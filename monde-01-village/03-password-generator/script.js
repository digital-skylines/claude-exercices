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
    let length = Number(document.querySelector("#longueur").value);

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
   
    if(length < 4) { 
        length = 4;
    }

    document.querySelector("#longueur").value = length;

    // Création du tableau
    const a = inputNumbersValue ? numbers : [];
    const b = inputSpecialsValue ? specials : [];
    const c = inputUppercaseValue ? uppercases : [];
    const d = inputLowercaseValue ? lowercases : [];

    const allCharTable = [...a, ...b, ...c, ...d];

    let checkNumber = inputNumbersValue ? 0 : 1;
    let checkSpecial = inputSpecialsValue ? 0 : 1;
    let checkUppercase = inputUppercaseValue ? 0 : 1;
    let checkLowercase = inputLowercaseValue ? 0 : 1;
    
    while( 
        checkNumber === 0 ||
        checkSpecial  === 0 ||
        checkUppercase  === 0 ||
        checkLowercase  === 0
    ) {

        checkNumber = inputNumbersValue ? 0 : 1;
        checkSpecial = inputSpecialsValue ? 0 : 1;
        checkUppercase = inputUppercaseValue ? 0 : 1;
        checkLowercase = inputLowercaseValue ? 0 : 1;
        
        password = "";
        
        for(let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * allCharTable.length);
            password += allCharTable[index];

            if(inputNumbersValue && numbers.includes(allCharTable[index])) {
                checkNumber++;
            }

            if(inputSpecialsValue && specials.includes(allCharTable[index])) {
                checkSpecial++
            } 

            if(inputUppercaseValue && uppercases.includes(allCharTable[index])) {
                checkUppercase++
            }

            if(inputLowercaseValue && lowercases.includes(allCharTable[index])) {
                checkLowercase++
            }
            
        }

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