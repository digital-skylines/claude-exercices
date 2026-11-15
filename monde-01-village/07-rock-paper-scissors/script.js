const el = {
    // Buttons
    rock: document.querySelector("#rock"),
    paper: document.querySelector("#paper"),
    scissors: document.querySelector("#scissors"),
    
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

// Ecoute d'événement
el.rock.addEventListener("click", (event) => playGame(event))
el.paper.addEventListener("click", (event) => playGame(event))
el.scissors.addEventListener("click", (event) => playGame(event))

function playGame(event) {
    
    const humanAction = getHumanAction(event);
    const botAction = getBotAction();

    const judgement = judge(humanAction, botAction);

    console.log(judgement)

    displayJudgement(judgement);

} 

function getHumanAction(event) {
    return event.target.dataset.action;
}

function getBotAction() {
    const choices = ["rock", "paper", "scissors"]
    const index = Math.floor(Math.random() * 3)
    return choices[index];
}

function judge(humanAction, botAction) {

    const data = {
        message: "",
        humanAction,
        botAction,
    }

    // Case human win
    if(
        (humanAction === "rock" && botAction === "scissors") ||
        (humanAction === "paper" && botAction === "rock") ||
        (humanAction === "scissors" && botAction === "paper")
    ) {
        score.human++;
        data.message = "VOUS AVEZ GAGNÉ"
    }

    // Case bot win
    else if(
        (botAction === "rock" && humanAction === "scissors") ||
        (botAction === "paper" && humanAction === "rock") ||
        (botAction === "scissors" && humanAction === "paper")
    ) {
        score.bot++;
        data.message = "VOUS AVEZ PERDU"
    }

    // Case draw
    else {
        data.message = "ÉGALITÉ";
    }

    return data;
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