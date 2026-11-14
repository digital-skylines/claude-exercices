const lowercases = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercases = lowercases.map(letter => letter.toUpperCase())
const numbers = "0123456789".split("");
const specials = "()!~+-*/".split("")

let password = "";

// EventListeners
document.querySelector("#longueur").addEventListener("change", () => generatePassword())
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
    let howManyChars = Number(document.querySelector("#longueur").value);

    // Tout doit être coché
    if(!inputNumbersValue && !inputSpecialsValue && !inputUppercaseValue && !inputLowercaseValue) {
        password = "";
        screen.textContent = password;
        createDialog("Veuillez au moins sélectionner une option !");
        return;
    }

    if(isNaN(howManyChars) || !isFinite(howManyChars)) {
        createDialog("Longueur incorrect");
        return;
    }

    if (howManyChars > 50) { 
        howManyChars = 50;
    }
   
    if(howManyChars < 4) { 
        howManyChars = 4;
    }

    document.querySelector("#longueur").value = howManyChars;

    // Création du tableau
    const numberArray = inputNumbersValue ? numbers : [];
    const specialArray = inputSpecialsValue ? specials : [];
    const uppercaseArray = inputUppercaseValue ? uppercases : [];
    const lowercaseArray = inputLowercaseValue ? lowercases : [];

    const allCharTable = [...numberArray, ...specialArray, ...uppercaseArray, ...lowercaseArray];

    let checkNumber = 0;
    let checkSpecial = 0;
    let checkUppercase = 0;
    let checkLowercase = 0;
    
    while( 
        checkNumber === 0 ||
        checkSpecial  === 0 ||
        checkUppercase  === 0 ||
        checkLowercase  === 0
    ) {

        const octets = new Uint8Array(howManyChars);
        crypto.getRandomValues(octets);

        checkNumber = inputNumbersValue ? 0 : 1;
        checkSpecial = inputSpecialsValue ? 0 : 1;
        checkUppercase = inputUppercaseValue ? 0 : 1;
        checkLowercase = inputLowercaseValue ? 0 : 1;
        
        password = "";
        
        octets.forEach(octet => {
            const index = Math.floor((octet * allCharTable.length) / 256)
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
        })
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