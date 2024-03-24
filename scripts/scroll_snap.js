// Init all the variables
const sections = Array.from(document.querySelectorAll('section')).map(section => {
    const top = section.offsetTop;
    const bottom = section.offsetHeight + top;
    return { top, bottom, section };
});


console.table(sections);

let currentSection = sections[0].section;

console.log(currentSection);

let previousScrollPosition = window.scrollY;


window.addEventListener('scroll', event => {
    const currentScrollPosition = window.scrollY;
    const isScrollingUp = (previousScrollPosition > currentScrollPosition);
    const screenHeigh = window.innerHeight;
    const scrollY = window.scrollY + screenHeigh;

    let scroll = false;

    sections.forEach(section => {
        const top = section.top;
        const bottom = section.bottom;

        if ((top < scrollY) && (bottom > scrollY) && (section.section !== currentSection)) {
            console.log("new section. Previous section : " + currentSection.id);
            currentSection = section.section;
            scroll = true;
        }

    });

    if (scroll) {
        console.log(currentSection, scroll);
        scroll = false;
    }
});