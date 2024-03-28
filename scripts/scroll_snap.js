// Init all the variables
let lines = [];


const sections = Array.from(document.querySelectorAll('section')).map(section => {
    const rect = section.getBoundingClientRect();
    const top = rect.top;
    const bottom = rect.bottom;

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
    previousScrollPosition = currentScrollPosition;
    const screenHeigh = window.innerHeight;
    const scrollBottom = currentScrollPosition + screenHeigh;
    const scrollTop = currentScrollPosition;

    let scroll = false;

    sections.forEach(section => {
        const top = section.top; // The coords of the top of the section
        const bottom = section.bottom; // The coords of the bottom of the section

        // Calculate if intersecting with the section (default to false)
        let isIntersectingTop = false;

        if (isScrollingUp) {
            isIntersectingTop = (top <= scrollTop) && (scrollTop < bottom);
        } else {
            isIntersectingTop = (top <= scrollBottom) && (scrollBottom < bottom);
        }
        // Is the current section the same as before
        const isCurrentSection = section.section == currentSection;

        if (isIntersectingTop && !isCurrentSection) {
            console.log(`New section : ${section.section.id}. Previous section: ${currentSection.id}. Scrolling ${isScrollingUp ? "UP" : "DOWN"}`)
            currentSection = section.section;
            scroll = true;
        }

    });

    if (scroll) {
        console.log(scroll);
        scrollTimer = setTimeout(() => {
            currentSection.scrollIntoView({ behavior: "smooth" });
            scroll = false;
        }, 100); // adjust the delay as needed
    }
});