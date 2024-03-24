// Add a minimum delay of 1 second before removing the loading screen
const minimumDelay = 1000;
let pageLoadTime;

window.onload = function () {
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
    const navbar_height = navbar.offsetHeight;

    window.scrollTo(navbar_height, navbar_height);

    document.getElementById('loading').remove();

}

function startVideo() {
    const video = document.getElementById('myVideo');
    setTimeout(() => {
        video.play();
    }, 100);
}