document.addEventListener('scroll', event => {
    const navbar = document.querySelector("nav");
    const navbar_height = navbar.offsetHeight;

    const window_height = window.innerHeight;

    const scroll = window.scrollY;
    if (scroll < navbar_height) {
        window.scrollTo(navbar_height, 0)
    }

    console.log(parseInt(scroll), window_height);
})