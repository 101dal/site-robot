// Get the scroll. If the scroll is greater than 20px relative to the bottom of the elemnt then it sets the background to orange. Else it's transparent
const navbar = document.querySelector("nav");
const hero = document.querySelector("section.hero");
const navbarHeight = navbar.offsetHeight;
const heroHeight = hero.offsetHeight;

document.querySelector(":root").style["--navbar-height"] = navbarHeight;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > navbarHeight + heroHeight - 10) {
        navbar.classList.add("other");
    } else {
        navbar.classList.remove("other");
    }
})