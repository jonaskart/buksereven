
const rev = document.getElementById("rev");
let revCount = 0;

rev.onclick = function() {
    revCount++;
    if (revCount >= 10) {
        rev.src = 'images/sweat.png';
    }
}