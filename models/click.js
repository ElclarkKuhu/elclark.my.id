const mongoose = require('mongoose');

const ClickSchema = new mongoose.Schema({
    short: {
        type: String,
        required: true
    },
    ip: {
		type: String,
		required: false
	}
});

const Click = mongoose.model('Click', ClickSchema);

module.exports = Click;