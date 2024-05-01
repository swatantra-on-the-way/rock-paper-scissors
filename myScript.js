function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let a = Math.floor(Math.random() * 3);
    return choices[a];
}

function getHumanChoice() {
    let b = window.prompt("Enter your choice (rock, paper, or scissors)");
    return b;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    console.log(`Human choice is ${humanChoice}`);
    console.log(`Computer choice is ${computerChoice}`);

    if (humanChoice === computerChoice){
        console.log(`It's a tie! ${humanChoice} is same as ${computerChoice}`);
    }
    
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice ==="paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);

    }

    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);