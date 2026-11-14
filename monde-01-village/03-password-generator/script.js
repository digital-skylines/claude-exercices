const lowercases = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercases = lowercases.map(letter => letter.toUpperCase())
const numbers = "0123456789".split("");
const specials = "()!~+-*/".split("")

let password = "";

// EventListeners
document.querySelector("#longueur").addEventListener("input", () => generatePassword())
document.querySelector("#chiffres").addEventListener("change", () => generatePassword())
document.querySelector("#symboles").addEventListener("change", () => generatePassword())
document.querySelector("#uppercases").addEventListener("change", () => generatePassword())
document.querySelector("#lowercases").addEventListener("change", () => generatePassword())
document.querySelector("#clipboard").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(password);
        createDialog("Mot de passe copié avec succès")
    } catch (error) {
        console.error(error.message);
        createDialog("Erreur lors de la copie")
    }
    
})

// Functions
function generatePassword() {

    // Screen
    const screen = document.querySelector("#screen-password")

    // Récupération des options
    const inputNumbersValue = document.querySelector("#chiffres").checked
    const inputSpecialsValue = document.querySelector("#symboles").checked
    const inputUppercaseValue = document.querySelector("#uppercases").checked
    const inputLowercaseValue = document.querySelector("#lowercases").checked
    const length = Number(document.querySelector("#longueur").value);

    // Tout doit être coché
    if(!inputNumbersValue && !inputSpecialsValue && !inputUppercaseValue && !inputLowercaseValue) {
        password = "";
        screen.textContent = password;
        createDialog("Veuillez au moins sélectionner une option !");
        return;
    }

    if(isNaN(length) || !isFinite(length)) {
        createDialog("Longueur incorrect");
        return;
    }

    if (length > 50) { 
        length = 50;
    }
   
    if(length < 1) { 
        length = 0;
    }

    // Création du tableau
    const a = inputNumbersValue ? numbers : [];
    const b = inputSpecialsValue ? specials : [];
    const c = inputUppercaseValue ? uppercases : [];
    const d = inputLowercaseValue ? lowercases : [];

    const allCharTable = [...a, ...b, ...c, ...d];

    password = "";

    for(let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * allCharTable.length);
        password += allCharTable[index];
    }

    screen.textContent = password;

}

function createDialog(text) {
    const dialog = document.createElement("div");
    dialog.classList.add("dialog-item");
    dialog.textContent = text;

    document.querySelector(".dialog").appendChild(dialog);

    setTimeout(() => {
        dialog.remove();
    }, 3000)
    
}

// On page load
generatePassword()