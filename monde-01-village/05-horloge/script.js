const horlogeItem = document.querySelector("#horloge")
const dateItem = document.querySelector("#date")

function displayClock() {
    const date = new Date();
    
    const d = {
        year: date.getFullYear(),
        month: getMonth(date.getMonth()),
        weekDay: getWeekDay(date.getDay()),
        day: date.getDate().toString().padStart(2, "0"),
        hour: date.getHours().toString().padStart(2, "0"),
        minute: date.getMinutes().toString().padStart(2, "0"),
        second: date.getSeconds().toString().padStart(2, "0")
    }
    
        horlogeItem.textContent = `${d.hour}:${d.minute}:${d.second}`;
        dateItem.textContent = `${d.weekDay} ${d.day} ${d.month} ${d.year}`
}

displayClock()

const ms = (new Date()).getMilliseconds()

setTimeout(() => {
    setInterval(() => {
        const ms = (new Date()).getMilliseconds()
        displayClock()
    }, 1000)
}, 1000 - ms)



function getWeekDay(value) {
    return ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"][value];
}

function getMonth(value) {
    return [ "janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"][value];
}