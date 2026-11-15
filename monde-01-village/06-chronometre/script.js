/* Elements */
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const toursButton = document.querySelector("#tours");
const toursList = document.querySelector("#tours-list")
const screen = document.querySelector("#screen");

let pause = false;
let ms = 0;
let lastTime = 0;
let time = 0;

function displayChrono() {
    
    const chrono = getChrono(ms)

    screen.textContent = chrono
}

function getChrono(ms) {
    const mm = Math.floor(ms / 60000).toString().padStart(2, "0");
    const ss = (Math.floor(ms / 1000) % 60).toString().padStart(2, "0");
    const cc = (Math.floor(ms / 10) % 100).toString().padStart(2, "0");

    return `${mm}:${ss}.${cc}`
}

function playChrono() {
    if(time === 0) { time = performance.now() - ms}
    if(pause) { return; }
    ms = performance.now() - time;
    displayChrono();
    setTimeout(playChrono, 5);
}

displayChrono()

startButton.addEventListener("click", () => {
    time = 0;
    pause = false;
    playChrono();
})

pauseButton.addEventListener("click", () => {
    pause = true;
})

resetButton.addEventListener("click", () => {
    pause = true;
    time = 0;
    ms = 0;
    lastTime = 0;
    displayChrono();
    toursList.innerHTML = "";
})

toursButton.addEventListener("click", () => {

    // index
    const toursPoint = toursList.querySelectorAll("li")
    const index = toursPoint.length + 1;

    // tour
    const tour = getChrono(ms - lastTime)

    // total
    const total = getChrono(ms)

    // Création élément
    const li = document.createElement("li");
    li.textContent = `${index} - ${tour} - ${total}`;
    
    // Affichage
    toursList.appendChild(li);
    lastTime = ms;
})