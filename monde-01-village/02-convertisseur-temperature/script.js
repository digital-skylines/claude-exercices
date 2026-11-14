const el = {
    value: document.querySelector("#value"),
    input: document.querySelector("#input"),
    C2F: document.querySelector("#C2F"),
    F2C: document.querySelector("#F2C")
}

let mode = "C2F";

function convertC2F(celsius) {
    return ((celsius * (9/5)) + 32).toFixed(1)
}

function convertF2C(fahrenheit) {
    return ((fahrenheit - 32) * 5/9).toFixed(1)
}

function convert() {
    // Récupération de la valeur
    const temperature = el.input.value === "" ? NaN : Number(el.input.value);

    // Vérification de la valeur
    if(isNaN(temperature) || !isFinite(temperature)) {
        el.value.textContent = "Valeur incorrect !";
        return;
    }

    // Conversion de la valeur
    const result = mode === "C2F" ? convertC2F(temperature) + "°F" : convertF2C(temperature) + "°C" ;
    el.value.textContent = result;
}

el.input.addEventListener("input", () => convert())

el.F2C.addEventListener("click", () => { 
    el.C2F.removeAttribute("disabled")
    el.F2C.setAttribute("disabled", "disabled")
    mode = "F2C"
    convert()
})

el.C2F.addEventListener("click", () => { 
    el.C2F.setAttribute("disabled", "disabled")
    el.F2C.removeAttribute("disabled")
    mode = "C2F"
    convert()
})