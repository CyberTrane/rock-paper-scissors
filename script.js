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
    let playerChoice = this.textContent.toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();

    if (playerChoice === computerChoice) {
        div.textContent = "It's a Tie! Both chose " + playerChoice;
        div2.textContent = "Player - " + userPoints + " Computer - " + compPoints;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        compPoints++;
        div.textContent = "You Lose! Paper beats Rock.";
        div2.textContent = "Player - " + userPoints + " Computer - " + compPoints;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        userPoints++;
        div.textContent = "You Win! Rock beats Scissors.";
        div2.textContent = "Player - " + userPoints + " Computer - " + compPoints;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        userPoints++;
        div.textContent = "You Win! Paper beats Rock.";
        div2.textContent = "Player - " + userPoints + " Computer - " + compPoints;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        compPoints++;
        div.textContent = "You Lose! Scissors beats Paper.";
        div2.textContent = "Player - " + userPoints + " Computer - " + compPoints;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        compPoints++;
        div.textContent = "You Lose! Rock beats Scissors.";
        div2.textContent = "Player - " + userPoints + " Computer - " + compPoints;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        userPoints++;
        div.textContent = "You Win! Scissors beats Paper.";
        div2.textContent = "Player - " + userPoints + " Computer - " + compPoints;
    }

    if (userPoints === 5) {
        div.textContent = "You Won the Game!";
        div2.textContent = "Player - " + userPoints + " Computer - " + compPoints;
        userPoints = 0;
        compPoints = 0;
    } else if (compPoints === 5) {
        div.textContent = "You Lost the Game!";
        div2.textContent = "Player - " + userPoints + " Computer - " + compPoints;
        userPoints = 0;
        compPoints = 0;
    }
}

let userPoints = 0;
let compPoints = 0;

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
const div2 = document.createElement('div');
bod.appendChild(div);
bod.appendChild(div2);

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

/* function game() { */

/* let userChoice = prompt("Choose Rock, Paper, or Scissors");
let compChoice = getComputerChoice();
console.log(playRound(userChoice, compChoice)); */

/* }

game(); */