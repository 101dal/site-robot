document.addEventListener('scroll', event => {
    const navbar = document.querySelector("nav");

    const scroll = window.scrollY;
    if (scroll < navbarHeight) {
        window.scrollTo(0, navbarHeight)
    }
})