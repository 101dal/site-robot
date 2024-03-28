// Add a minimum delay of 1 second before removing the loading screen
const minimumDelay = 1000;
let pageLoadTime;

window.scrollTo(0, 0);


window.onload = function () {
    window.scrollTo(0, 0);
    pageLoadTime = new Date().getTime() - PerformanceNavigationTiming.startTime;

    setTimeout(function () {
        if (pageLoadTime < minimumDelay) {
            finishLoading();
        } else {
            finishLoading();
        }
    }, minimumDelay);
};

function finishLoading() {
    const accessButton = document.getElementById("accessButton");
    const loadingText = document.querySelector("#loading-content h2");

    loadingText.remove();
    accessButton.style.display = "inline-block";

    accessButton.addEventListener("click", function () {
        desactivateLoading();
        startVideo();
    });
}

function desactivateLoading() {
    const navbar = document.querySelector("nav");

    window.scrollTo(0, 0);

    document.getElementById('loading').remove();

}

function startVideo() {
    const video = document.getElementById('myVideo');
    setTimeout(() => {
        video.play();
    }, 100);
}