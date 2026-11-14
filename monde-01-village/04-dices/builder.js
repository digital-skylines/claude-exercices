export function buildDice (value) {
    const dice = buildElement("span", "dice", value)

    return dice;
}

export function buildDiceOption () {
    const dice = buildElement("div", "dice-option");

    const span = buildElement("span", "");
    span.textContent = "Valeur du dé :";
    
    const input = buildElement("input", "dice-input");
    input.value = 6;
    input.setAttribute("type", "number")
    input.setAttribute("min", 2);
    input.setAttribute("max", 99);
    input.setAttribute("step", 1);
    input.addEventListener("change", () => {
        const valueString = input.value;
        let valueNumber = Number(valueString);

        if(isNaN(valueNumber) || !isFinite(valueNumber) || valueNumber < 2 || valueString.length === 0) {
            valueNumber = 6;
        }

        valueNumber = Math.round(Math.min(valueNumber, 99))
        valueNumber = Math.max(valueNumber, 2)

        input.value = valueNumber;
    })
    
    const button = buildElement("button", "");
    button.textContent = "X"
    button.addEventListener("click", () => {
        dice.remove();
    })

    dice.appendChild(span);
    dice.appendChild(input);
    dice.appendChild(button);

    return dice;
}

function buildElement (tag, className = false, text = false) {

    const el = document.createElement(tag);
    if(className) {el.classList.add(className);}
    if(text) { el.textContent = text };

    return el;

}