const btns = [
    document.querySelector("#rock"),
    document.querySelector("#paper"),
    document.querySelector("#scissors"),
];

const el = {
    // Screens
    duel: document.querySelector("#duel"),
    result: document.querySelector("#result"),

    // Scores
    humanScore: document.querySelector("#score-human"),
    botScore: document.querySelector("#score-bot")
};

const score = {
    human: 0,
    bot: 0
};

const choices = [
    {
        key: "rock",
        winAgainst: "scissors",
        fr: "pierre"
    },
    {
        key: "paper",
        winAgainst: "rock",
        fr: "papier"
    },
    {
        key: "scissors",
        winAgainst: "paper",
        fr: "ciseaux"
    }
];

// Ecoute d'événement
btns.forEach(btn => { btn.addEventListener("click", event => playGame(event.currentTarget.dataset.action)); });

function playGame(humanAction) {
    
    const humanChoice = getHumanChoice(humanAction);
    const botChoice = getBotChoice();

    const arbitration = judge(humanChoice, botChoice, score);

    displayArbitration(arbitration, score);

} 

function getHumanChoice(humanAction) {
    return choices.find(choice => choice.key === humanAction);
}

function getBotChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function judge(humanChoice, botChoice, scoring) {

    const arbitration = {
        message: "",
        humanChoice: humanChoice.fr.toUpperCase(),
        botChoice: botChoice.fr.toUpperCase(),
    };

    // Case human win
    if(humanChoice.winAgainst === botChoice.key) {
        scoring.human++;
        arbitration.message = "VOUS AVEZ GAGNÉ";
    }

    // Case bot win
    else if(botChoice.winAgainst === humanChoice.key) {
        scoring.bot++;
        arbitration.message = "VOUS AVEZ PERDU";
    }

    // Case draw
    else {
        arbitration.message = "ÉGALITÉ";
    }

    return arbitration;
}

function displayArbitration(arbitration, scoring) {
    // Changement du score
    el.humanScore.textContent = scoring.human;
    el.botScore.textContent = scoring.bot;

    // Affichage du duel
    el.duel.textContent = `[VOUS] ${arbitration.humanChoice} <VS> [BOT] ${arbitration.botChoice}`;

    // Affichage du gagnant
    el.result.textContent = arbitration.message;
}