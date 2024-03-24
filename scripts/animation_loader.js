// Animation of the loading button
const cycles = ["Loading.", "Loading..", "Loading..."];
let index_of_cycles = 0;
let direction = 1;

setInterval(() => {
    const element = document.querySelector('#loading-content h2');
    if (element) {
        document.querySelector('#loading-content h2').innerHTML = cycles[index_of_cycles];
        index_of_cycles += direction;

        if (index_of_cycles === (cycles.length - 1) || index_of_cycles === 0) {
            direction *= -1;
        }
    }
}, 250);
