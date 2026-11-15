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
        fr: "pierre",
        en: "rock"
    },
    {
        fr: "papier",
        en: "paper"
    },
    {
        fr: "ciseaux",
        en: "scissors"
    }
]

// Ecoute d'événement
btns.forEach(item => { item.addEventListener("click", event => playGame(event.target.dataset.action)) })

function playGame(humanChoice) {
    
    const humanAction = getHumanAction(humanChoice);
    const botAction = getBotAction();

    const judgement = judge(humanAction, botAction);

    displayJudgement(judgement);

} 

function getHumanAction(humanChoice) {
    return choices.find(choice => choice.en === humanChoice)
}

function getBotAction() {
    const index = Math.floor(Math.random() * choices.length)
    return choices[index];
}

function judge(humanAction, botAction) {

    const arbitration = {
        message: "",
        humanAction: humanAction.fr.toUpperCase(),
        botAction: botAction.fr.toUpperCase(),
    }

    // Case human win
    if(
        (humanAction.en === "rock" && botAction.en === "scissors") ||
        (humanAction.en === "paper" && botAction.en === "rock") ||
        (humanAction.en === "scissors" && botAction.en === "paper")
    ) {
        score.human++;
        arbitration.message = "VOUS AVEZ GAGNÉ"
    }

    // Case bot win
    else if(
        (botAction.en === "rock" && humanAction.en === "scissors") ||
        (botAction.en === "paper" && humanAction.en === "rock") ||
        (botAction.en === "scissors" && humanAction.en === "paper")
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