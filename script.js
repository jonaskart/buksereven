
const rev = document.getElementById("rev");
const revtext = document.getElementById("revtext");
let revCount = 0;

rev.onclick = function() {
    revCount++;
    if (revCount >= 10) {
        rev.src = 'images/ape.gif';
        revtext.innerHTML = "shhhh ingen kommer til å tro på deg :3"
    }
}