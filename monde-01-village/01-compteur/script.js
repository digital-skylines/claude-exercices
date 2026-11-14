const el = {
    counter: document.querySelector("#counter"),
    plus: document.querySelector("#plus"),
    minus: document.querySelector("#minus"),
    reset: document.querySelector("#reset"),
}

let counter = 0;

el.plus.addEventListener("click", () => {
    counter++;
    el.counter.textContent = counter;
})

el.minus.addEventListener("click", () => {
    if(counter !== 0) {
        counter--;
        el.counter.textContent = counter;
    }
})

el.reset.addEventListener("click", () => {
    counter = 0;
    el.counter.textContent = counter;
})