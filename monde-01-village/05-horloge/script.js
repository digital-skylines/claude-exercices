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
    switch(value) {
        case 0: 
            return "lundi";
        break;
        case 1: 
            return "mardi";
        break;
        case 2: 
            return "mercredi";
        break;
        case 3: 
            return "jeudi";
        break;
        case 4: 
            return "vendredi";
        break;
        case 5: 
            return "samedi";
        break;
        case 6: 
            return "dimanche";
        break;
        default:
            return "lundi";
        break;
    }
}

function getMonth(value) {
    switch(value) {
        case 0:
            return "janvier"
        break;
        case 1:
            return "février"
        break;
        case 2:
            return "mars"
        break;
        case 3:
            return "avril"
        break;
        case 4:
            return "mai"
        break;
        case 5:
            return "juin"
        break;
        case 6:
            return "juillet"
        break;
        case 7:
            return "aout"
        break;
        case 8:
            return "septembre"
        break;
        case 9:
            return "octobre"
        break;
        case 10:
            return "novembre"
        break;
        case 11:
            return "décembre"
        break;
        default:
            return "janvier"
        break;
    }
}

function dualDigits(value) {
    if(Number(value) < 10) {
        return `0${value}`
    }
    return value;
}