const btn = [
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

const translation = {
    rock: "PIERRE",
    paper: "PAPIER",
    scissors: "CISEAUX"
}

// Ecoute d'événement
btn.forEach(item => { item.addEventListener("click", event => playGame(event)) })

function playGame(event) {
    
    const humanAction = getHumanAction(event);
    const botAction = getBotAction();

    const judgement = judge(humanAction, botAction);

    displayJudgement(judgement);

} 

function getHumanAction(event) {
    return event.target.dataset.action;
}

function getBotAction() {
    const choices = ["rock", "paper", "scissors"]
    const index = Math.floor(Math.random() * choices.length)
    return choices[index];
}

function judge(humanAction, botAction) {

    const arbitration = {
        message: "",
        humanAction: translation[humanAction],
        botAction: translation[botAction],
    }

    // Case human win
    if(
        (humanAction === "rock" && botAction === "scissors") ||
        (humanAction === "paper" && botAction === "rock") ||
        (humanAction === "scissors" && botAction === "paper")
    ) {
        score.human++;
        arbitration.message = "VOUS AVEZ GAGNÉ"
    }

    // Case bot win
    else if(
        (botAction === "rock" && humanAction === "scissors") ||
        (botAction === "paper" && humanAction === "rock") ||
        (botAction === "scissors" && humanAction === "paper")
    ) {
        score.bot++;
        arbitration.message = "VOUS AVEZ PERDU"
    }

    // Case draw
    else {
        arbitration.message = "ÉGALITÉ";
    }

    return arbitration;
}

function displayJudgement(judgement) {
    // Changement du score
    el.humanScore.textContent = score.human;
    el.botScore.textContent = score.bot;

    // Affichage du duel
    el.duel.textContent = `[VOUS] ${judgement.humanAction} <VS> [BOT] ${judgement.botAction}`;

    // Affichage du gagnant
    el.result.textContent = judgement.message;
}