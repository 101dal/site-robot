document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('myVideo');
    const robot = document.querySelector('#robot-image');
    video.addEventListener('ended', function () {
        robot.style.opacity = 1;
    });
}, false);
