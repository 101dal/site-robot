// Init all the variables
let lines = [];


const sections = Array.from(document.querySelectorAll('section')).map(section => {
    const top = section.offsetTop;
    const bottom = section.offsetHeight + top;

    // Create and append blue lines
    const topLine = document.createElement('div');
    topLine.style.height = '10px';
    topLine.style.backgroundColor = 'green';
    topLine.style.width = '100%';
    topLine.style.position = 'absolute';
    topLine.style.top = `${top}px`;
    topLine.style.zIndex = '1000';
    topLine.setAttribute('parent', section.id);
    topLine.setAttribute('typeOfLine', 'top');
    section.appendChild(topLine);

    const bottomLine = document.createElement('div');
    bottomLine.style.height = '10px';
    bottomLine.style.backgroundColor = 'blue';
    bottomLine.style.width = '100%';
    bottomLine.style.position = 'absolute';
    bottomLine.style.top = `${bottom}px`;
    bottomLine.style.zIndex = '1000';
    bottomLine.setAttribute('parent', section.id);
    bottomLine.setAttribute('typeOfLine', 'bottom');
    section.appendChild(bottomLine);


    lines.push({ position: topLine.offsetTop, section: topLine }, { section: bottomLine });

    return { top, bottom, section };
});


console.table(sections);
console.table(lines);

let currentSection = sections[0].section;

console.log(currentSection);

let previousScrollPosition = window.scrollY;


window.addEventListener('scroll', event => {
    const currentScrollPosition = window.scrollY;
    const isScrollingUp = (previousScrollPosition > currentScrollPosition);
    const screenHeigh = window.innerHeight;
    const scrollY = window.scrollY + screenHeigh;

    let scroll = false;

    lines.forEach(l => {

    })

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
        console.log(scroll);
        scroll = false;
    }
});