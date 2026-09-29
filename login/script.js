const hidden = document.getElementById("hidden");

const successtxt = `
Ja! Stikk på USB du`
const failtxt = `
Nei! Fortsett å jobb`

function sjekk() {
    if (document.getElementById('knapptekst').textContent === "Prøv igjen?") {
        location.reload();
        return;
    }
    loginShow();
    if (Math.floor(Math.random() * 2) === 1) {
        loginSuccess();
        console.log("it worked");
    } else {
        loginFail();
        console.log("it worked");
    }
    prøvIgjen();
};

function loginShow() {
    document.getElementById('skalvi').style.display = "";
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
    document.getElementById('skalvi').style.display = "none";
    hidden.style.paddingTop = '300px';
};

function prøvIgjen() {
    document.getElementById('knapptekst').textContent = "Prøv igjen?";

};

function skytConfetti() {
    confetti({ particleCount: 100, angle: 60, spread: 70, origin: { x: 0, y: 0.7 } });
    confetti({ particleCount: 100, angle: 120, spread: 70, origin: { x: 1, y: 0.7 } });
};