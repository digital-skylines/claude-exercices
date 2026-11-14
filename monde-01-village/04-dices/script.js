import { buildDiceOption, buildDice } from "./builder.js";

const options = document.querySelector("#options-container");

function load() {
    options.appendChild(buildDiceOption());
}

load()

document.querySelector("#add-dice").addEventListener("click", () => options.appendChild(buildDiceOption()))

document.querySelector("#start-dices").addEventListener("click", () => {

    const dicesInput = document.querySelectorAll('.dice-input');
    const dices = document.querySelector("#dices")
    dices.innerHTML = "";

    if(dicesInput.length === 0) {
        alert("Veuillez au moins créer un dé")
        return;
    }

    dicesInput.forEach(dice => {
        let value = 6;
        // Créer un dé avec la bonne valeur du dé
        if(!isNaN(dice.value) && isFinite(dice.value) ) {
            dice.value = Math.min(dice.value, 99)
            dice.value = Math.max(dice.value, 1)
            value = Math.floor(Math.random() * dice.value) +1;
        } 
        
        const newDice = buildDice(value);
        dices.appendChild(newDice)
    })
})

