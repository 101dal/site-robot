const manuel_image = document.querySelector("img#manuel_image");

// Get the initial position of the image and then hide it
const rect = manuel_image.getBoundingClientRect();
const scrollLeft = document.documentElement.scrollLeft;
const x = rect.left + scrollLeft;
const width = manuel_image.offsetWidth;

const scrollWidth = document.documentElement.scrollWidth;

document.addEventListener('mousemove', (event) => {
    const mouse_position = event.clientX;

    // Make the image move to the mouse relative to it.
    const translationPixels = mouse_position - x - (width / 2);

    manuel_image.style.transform = `translateX(${translationPixels}px)`;

    // If the image goes over the screen then hide it
    if (mouse_position + width >= scrollWidth) {
        manuel_image.style.display = "none";
    } else {
        manuel_image.style.display = "block";
    }
});