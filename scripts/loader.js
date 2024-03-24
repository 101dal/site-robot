// Add a minimum delay of 1 second before removing the loading screen
const minimumDelay = 1000;
let pageLoadTime;

window.onload = function () {
    pageLoadTime = new Date().getTime() - PerformanceNavigationTiming.startTime;


    setTimeout(function () {
        if (pageLoadTime < minimumDelay) {
            desactivateLoading()
            startVideo();
        } else {
            desactivateLoading()
            startVideo();
        }
    }, minimumDelay);
};

function desactivateLoading() {
    document.getElementById('loading').remove();

}

function startVideo() {
    const video = document.getElementById('myVideo');
    video.play();
}