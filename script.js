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

function playRound(e) {
    div.textContent = '';
    let playerChoice = this.textContent.toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();

    if (playerChoice === computerChoice) {
        div.textContent = "It's a Tie! Both chose " + playerChoice;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        div.textContent = "You Lose! Paper beats Rock.";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        div.textContent = "You Win! Rock beats Scissors.";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        div.textContent = "You Win! Paper beats Rock.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        div.textContent = "You Lose! Scissors beats Paper.";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        div.textContent = "You Lose! Rock beats Scissors.";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        div.textContent = "You Win! Scissors beats Paper.";
    }
}

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';

const bod = document.querySelector('body');
bod.appendChild(rockButton);
bod.appendChild(paperButton);
bod.appendChild(scissorsButton);

const buttons = document.querySelectorAll('button');

const div = document.createElement('div');
bod.appendChild(div);

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

/* function game() { */

/* let userChoice = prompt("Choose Rock, Paper, or Scissors");
let compChoice = getComputerChoice();
console.log(playRound(userChoice, compChoice)); */

/* }

game(); */