import { buildDiceOption, buildDice } from "./builder.js";

const options = document.querySelector("#options-container");

function load() {
    options.appendChild(buildDiceOption());
}

load()

document.querySelector("#add-dice").addEventListener("click", () => options.appendChild(buildDiceOption()))

document.querySelector("#start-dices").addEventListener("click", () => {

    const totalSpan = document.querySelector("#total");

    const dicesInput = document.querySelectorAll('.dice-input');
    const dices = document.querySelector("#dices")
    dices.innerHTML = "";

    if(dicesInput.length === 0) {
        alert("Veuillez au moins créer un dé")
        return;
    }

    let total = 0;
    dicesInput.forEach(dice => {
        
        // Créer un dé avec la bonne valeur du dé
        dice.value = Number(dice.value);
        let value = Math.floor(Math.random() * dice.value) +1;
        
        const newDice = buildDice(value);
        dices.appendChild(newDice)
        total += value;
    })

    totalSpan.textContent = total;
})

