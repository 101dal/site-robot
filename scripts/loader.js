// Add a minimum delay of 1 second before removing the loading screen
const minimumDelay = 1000;
let pageLoadTime;

window.onload = function () {
    pageLoadTime = new Date().getTime() - PerformanceNavigationTiming.startTime;


    setTimeout(function () {
        if (pageLoadTime < minimumDelay) {
            startVideo();
            desactivateLoading()
        } else {
            startVideo();
            desactivateLoading()
        }
    }, minimumDelay);
};

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