var notifInProgress = 0;

function createNotif(titleNotif, textNotif, time) {
    var id = Math.random().toString(36).substr(2, 9);
    var notif = `
    <div class="center-container notif-box" id="box-${id}">
        <span class="titleNotif textNotif" id="titleNotif-${id}">${titleNotif}</span>
        <span class="textNotif" id="textNotif-${id}" style="margin-bottom: 20px;">${textNotif}</span>
        <div class="progress" id="progress-${id}">
            <div id="prog-${id}" class="determinate"></div>
        </div>
    </div>`;
    
    var temp = document.getElementById("notif").innerHTML;

    document.getElementById("notif").innerHTML = temp + notif;
    animateInNotif(id, time);
    ++notifInProgress
}

function animateInNotif(id, time) {
    updateProg(time || 500, id);

    setTimeout(function() {
        document.getElementById(`box-${id}`).style.maxHeight = `100px`;
        document.getElementById(`box-${id}`).style.margin = `5px 0px`;
        setTimeout(function() {
            document.getElementById(`box-${id}`).style.transition = `all 1s ease`;
            document.getElementById(`box-${id}`).style.opacity = `1`;
        }, 500);
    }, 100)
}

function updateProg(progr, id) {
    var temp = progr;
    var intr = setInterval(function() {
        document.getElementById(`prog-${id}`).style.width = ((progr - 0) * 100) / (temp - 0) + `%`;
        if (--progr == 0) {
            animateOutNotif(id);
            clearInterval(intr);
        }
    }, 10);
}

function animateOutNotif(id) {
    document.getElementById(`box-${id}`).style.opacity = `0`;
    setTimeout(function() {
        document.getElementById(`box-${id}`).style.maxHeight = `0px`;
        document.getElementById(`box-${id}`).style.margin = `0px`;

        --notifInProgress

        if (notifInProgress == 0) {
            document.getElementById("notif").innerHTML = "";
        }
    }, 500);
}