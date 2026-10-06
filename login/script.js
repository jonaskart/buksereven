const hidden = document.getElementById("hidden");
const slider = document.getElementById("slider");

const successtxt = `
Ja! Stikk på USB du`
const failtxt = `
Nei! Fortsett å jobb`

function sjekk() {
    if (document.getElementById('knapptekst').textContent === "Prøv igjen?") {
        restartAlt();
    } else {
        if (slider.checked) {
            loginSuccess(); prøvIgjen();
        } else {
            random(); prøvIgjen();
        }
    } 
};

function random() {
    if (Math.floor(Math.random() * 2) === 1) {
        loginSuccess();
    } else {
        loginFail();
    } 
};

function loginShow() {
    document.getElementById('skalvi').style.visibility = "visible";;
};

function loginSuccess() {
    loginHide();
    hidden.innerHTML = successtxt;
    skytConfetti();
};

function loginFail() {
    loginHide();
    hidden.innerHTML = failtxt;
};

function loginHide() {
    document.getElementById('skalvi').style.visibility = "hidden";
};

function prøvIgjen() {
    document.getElementById('knapptekst').textContent = "Prøv igjen?";
};

function skytConfetti() {
    confetti({ particleCount: 100, angle: 60, spread: 70, origin: { x: 0, y: 0.7 } });
    confetti({ particleCount: 100, angle: 120, spread: 70, origin: { x: 1, y: 0.7 } });
};

function restartAlt() {
    hidden.innerHTML = "";
    loginShow();
    document.getElementById('knapptekst').textContent = "Sjekk";
};