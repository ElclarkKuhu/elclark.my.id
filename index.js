if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');

const express = require('express');
const session = require('express-session');

const bcrypt = require('bcrypt');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require("./models/user.js");
const link = require("./models/link.js");
const click = require("./models/click.js");

const fs = require('fs');

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view-engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: false
}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new localStrategy(function (username, password, done) {
    User.findOne({
        username: username
    }, function (err, user) {
        if (err)
            return done(err);

        if (!user)
            return done(null, false, {
                message: 'Incorrect username.'
            });

        bcrypt.compare(password, user.password, function (err, res) {
            if (err)
                return done(err);

            if (res === false)
                return done(null, false, {
                    message: 'Incorrect password.'
                });

            return done(null, user);
        });
    });
}));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect(`/login/`); // ?back=${req.originalUrl}
}

function isLoggedOut(req, res, next) {
    if (!req.isAuthenticated())
        return next();
    res.redirect('/');
}

function count(short, ip) {
    link.find({
        short: short
    }, function (err, links) {
        if (err) {
            console.log(err);
        } else {
            const saveClick = new click({
                short: short,
                ip: ip,
            });

            saveClick.save(function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    addClick(short, links[0].click)
                }
            });
        }
    });
}

function addClick(short, cClick) {
    link.updateOne({
        short: short
    }, {
        click: cClick + 1
    }, function (err, docs) {
        if (err) {
            console.log(err)
        }
    });
}

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/links/', isLoggedIn, (req, res) => {
    res.render('links.ejs');
});

app.get('/login/', isLoggedOut, (req, res) => {
    res.render('login.ejs');
})

app.post('/login/', isLoggedOut, passport.authenticate('local', {
    successRedirect: '/links/',
    failureRedirect: '/login?error=true'
}));

app.post('/addlink/', isLoggedIn, (req, res) => {
    link.exists({
        short: req.body.short
    }, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            if (doc) {
                res.redirect('/?error=' + "The+shortlink+is+taken");
            } else {
                const addLink = new link({
                    creator: mongoose.Types.ObjectId(req.user._id),
                    url: req.body.url,
                    short: req.body.short,
                    click: 0,
                    date: Date.now()
                });

                addLink.save(function (err, data) {
                    if (err) {
                        console.log(err);
                        res.redirect('/?error=' + err);
                    } else {
                        res.redirect('/?success=true');
                    }
                });
            }
        }
    });
})

app.get('/:short/', (req, res) => {
    link.exists({
        short: req.params.short
    }, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            if (doc) {
                link.find({
                    short: req.params.short
                }, function (err, link) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        res.redirect(link[0].url);
                        count(req.params.short, req.header('x-forwarded-for') || req.socket.remoteAddress)
                    }
                });
            } else {
                res.status(404).render('404.ejs');
            }
        }
    });
})

app.get('/setup/', async (req, res) => {
    const exists = await User.exists({
        username: process.env.ADMIN_USERNAME
    });

    if (exists) {
        res.redirect('/login');
        return;
    };

    bcrypt.genSalt(10, function (err, salt) {
        if (err)
            return next(err);


        bcrypt.hash(process.env.ADMIN_PASSWORD, salt, function (err, hash) {
            if (err)
                return next(err);

            const newAdmin = new User({
                username: process.env.ADMIN_USERNAME,
                password: hash
            });
            newAdmin.save();

            res.redirect('/login');
        });
    });
});

app.get('/logout/', (req, res) => {
    req.logOut()
    res.redirect('/login/')
})

//  Handle 404
//  Put under all the route
app.use(function (req, res, next) {
    return res.status(404).render('404.ejs');
});

app.listen(port || 8000, () => {
    console.log('Server running on port', port || 8000, process.env.NODE_ENV);
});