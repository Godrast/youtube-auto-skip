const fps = 2;
const fpsInterval = 1000 / fps;
let interval = null;

window.onload = function() {
        startInterval();
}
if(checkUrl()){
    interval = setInterval(tryClicking, fpsInterval);
}

function checkUrl(){
    return /youtube\.(.)+\/watch\?/i.test(window.location.href);
}

function startInterval() {
    if (checkUrl() && interval === null) {
        setInterval(tryClicking, fpsInterval);
    }

}

function tryClicking() {
    let btn = document.querySelector(".ytp-ad-skip-button-slot");
    if (!btn) btn = document.querySelector(".ytp-ad-overlay-close-button");
    if (btn && btn.style.display != "none") {

        btn.click();
    }

}