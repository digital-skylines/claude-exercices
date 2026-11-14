const el = {
    value: document.querySelector("#value"),
    input: document.querySelector("#input"),
    C2F: document.querySelector("#C2F"),
    F2C: document.querySelector("#F2C")
}

function convertC2F(celsius) {
    return ((celsius * (9/5)) + 32).toFixed(1)
}

function convertF2C(fahrenheit) {
    return ((fahrenheit - 32) * 5/9).toFixed(1)
}

function convert(event) {
    // Récupération de la valeur
    const temperature = Number(el.input.value);

    // Vérification de la valeur
    if(isNaN(temperature) || !isFinite(temperature)) {
        el.value.textContent = "Valeur incorrect !";
        return;
    }

    // Conversion de la valeur
    const result = event.target.dataset.mode === "c2f" ? convertC2F(temperature) + "°F" : convertF2C(temperature) + "°C" ;
    el.value.textContent = result;
}

el.C2F.addEventListener("click", (event) => convert(event))

el.F2C.addEventListener("click", (event) => convert(event))