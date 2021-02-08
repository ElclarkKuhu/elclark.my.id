let age = document.getElementById("age");

setInterval(() => {
	let time = (new Date() - new Date(1012618800000)) / (1000 * 60 * 60 * 24 * 365.25);
	age.innerText = time.toString().substring(0, 12);
}, 50);

var progr = 101;

function updateProg() {
    progr = progr - 1;
    document.getElementById('prog').style.width = progr + '%';
    if (progr != 0) {
        setTimeout(function() {
            updateProg();
        }, 100);
    } else {
        progr = 101;
        hideNotif();
    }
}

function showNotif(textNotif) {
    updateProg();
    document.getElementById('more').innerHTML = textNotif;

    document.getElementById('boxlogo').style.opacity = '1';
    setTimeout(function() {
        document.getElementById('boxlogo').style.height = '100px';
        setTimeout(function() {
            document.getElementById('more').style.height = '70px';
            setTimeout(function() {
                document.getElementById('more').style.transition = 'all 1s ease';
                document.getElementById('more').style.opacity = '1';
                document.getElementById('progress').style.transition = 'all 1s ease';
                document.getElementById('progress').style.opacity = '1';
            }, 500);
        }, 500);
    }, 500)
}

function hideNotif() {
    document.getElementById('more').style.opacity = '0';
    document.getElementById('progress').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('more').style.height = '0';
        setTimeout(function() {
            document.getElementById('boxlogo').style.opacity = '0';
        }, 500);
    }, 500);
}