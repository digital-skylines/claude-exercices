/* Elements */
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const toursButton = document.querySelector("#tours");
const toursList = document.querySelector("#tours-list")
const screen = document.querySelector("#screen");

let pause = false;
let cs = 0;
let lastTime = 0;

function displayChrono() {
    
    const chrono = getChrono(cs)

    screen.textContent = chrono
}

function getChrono(cs) {
    const mm = (Math.floor(cs / 6000)).toString().padStart(2, "0");
    const ss = (Math.floor(cs / 100) % 60).toString().padStart(2, "0");
    const cc = (Math.floor(cs / 1) % 100).toString().padStart(2, "0")

    return `${mm}:${ss}.${cc}`
}

function startChrono() {
    if(pause) { return; }
    cs++;
    displayChrono();
    setTimeout(startChrono, 10);
}

displayChrono()

startButton.addEventListener("click", () => {
    pause = false;
    startChrono();
})

pauseButton.addEventListener("click", () => {
    pause = true;
})

resetButton.addEventListener("click", () => {
    pause = true;
    cs = 0;
    displayChrono();
    toursList.innerHTML = "";
})

toursButton.addEventListener("click", () => {

    // index
    const toursPoint = toursList.querySelectorAll("li")
    const index = toursPoint === null ? 1 : toursPoint.length + 1;

    // tour
    const tour = getChrono(cs - lastTime)

    // total
    const total = getChrono(cs)

    // Création élément
    const li = document.createElement("li");
    li.textContent = `${index} - ${tour} - ${total}`;
    
    // Affichage
    toursList.appendChild(li);
    lastTime = cs;
})