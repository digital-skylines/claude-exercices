const btns = [
    document.querySelector("#rock"),
    document.querySelector("#paper"),
    document.querySelector("#scissors"),
]

const el = {
    // Screens
    duel: document.querySelector("#duel"),
    result: document.querySelector("#result"),

    // Scores
    humanScore: document.querySelector("#score-human"),
    botScore: document.querySelector("#score-bot")
}

const score = {
    human: 0,
    bot: 0
}

const choices = [
    {
        key: "rock",
        fr: "pierre",
        en: "rock"
    },
    {
        key: "paper",
        fr: "papier",
        en: "paper"
    },
    {
        key: "scissors",
        fr: "ciseaux",
        en: "scissors"
    }
]

// Ecoute d'événement
btns.forEach(btn => { btn.addEventListener("click", event => playGame(event.target.dataset.action)) })

function playGame(humanAction) {
    
    const humanChoice = getHumanChoice(humanAction);
    const botChoice = getBotChoice();

    const arbitration = judge(humanChoice, botChoice);

    displayJudgement(arbitration);

} 

function getHumanChoice(humanAction) {
    return choices.find(choice => choice.key === humanAction);
}

function getBotChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function judge(humanChoice, botChoice) {

    const arbitration = {
        message: "",
        humanChoice: humanChoice.fr.toUpperCase(),
        botChoice: botChoice.fr.toUpperCase(),
    }

    // Case human win
    if(
        (humanChoice.key === "rock" && botChoice.key === "scissors") ||
        (humanChoice.key === "paper" && botChoice.key === "rock") ||
        (humanChoice.key === "scissors" && botChoice.key === "paper")
    ) {
        score.human++;
        arbitration.message = "VOUS AVEZ GAGNÉ";
    }

    // Case bot win
    else if(
        (botChoice.key === "rock" && humanChoice.key === "scissors") ||
        (botChoice.key === "paper" && humanChoice.key === "rock") ||
        (botChoice.key === "scissors" && humanChoice.key === "paper")
    ) {
        score.bot++;
        arbitration.message = "VOUS AVEZ PERDU";
    }

    // Case draw
    else {
        arbitration.message = "ÉGALITÉ";
    }

    return arbitration;
}

function displayJudgement(arbitration) {
    // Changement du score
    el.humanScore.textContent = score.human;
    el.botScore.textContent = score.bot;

    // Affichage du duel
    el.duel.textContent = `[VOUS] ${arbitration.humanChoice} <VS> [BOT] ${arbitration.botChoice}`;

    // Affichage du gagnant
    el.result.textContent = arbitration.message;
}