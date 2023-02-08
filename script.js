function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "It's a Tie! Both chose " + playerChoice;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You Lose! Paper beats Rock.";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You Win! Rock beats Scissors.";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You Win! Paper beats Rock.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You Lose! Scissors beats Paper.";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You Lose! Rock beats Scissors.";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You Win! Scissors beats Paper";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Choose Rock, Paper, or Scissors");
        let compChoice = getComputerChoice();
        console.log(playRound(userChoice, compChoice));
    }
}

game();