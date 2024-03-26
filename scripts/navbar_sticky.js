// Get the scroll. If the scroll is greater than 20px relative to the bottom of the elemnt then it sets the background to orange. Else it's transparent
const navbar = document.querySelector("nav");
const hero = document.querySelector("section.hero");
const heroHeight = hero.offsetHeight;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > heroHeight - 10) {
        navbar.classList.add("other");
    } else {
        navbar.classList.remove("other");
    }
})