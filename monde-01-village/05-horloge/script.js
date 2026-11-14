const horlogeItem = document.querySelector("#horloge")
const dateItem = document.querySelector("#date")

setInterval(displayClock, 1000)

function displayClock() {
    const date = new Date();
    
    const d = {
        year: date.getFullYear(),
        month: getMonth(date.getMonth()),
        weekDay: getWeekDay(date.getDay()),
        day: dualDigits(date.getDate()),
        hour: dualDigits(date.getHours()),
        minute: dualDigits(date.getMinutes()),
        second: dualDigits(date.getSeconds())
    }

    horlogeItem.textContent = `${d.hour}:${d.minute}:${d.second}`;
    dateItem.textContent = `${d.weekDay} ${d.day} ${d.month} ${d.year}`
}

displayClock()

function getWeekDay(value) {
    return ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"][value];
}

function getMonth(value) {
    return [ "janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"][value];
}

function dualDigits(value) {
    if(Number(value) < 10) {
        return `0${value}`
    }
    return value;
}