function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let a = Math.floor(Math.random() * 3);
    return choices[a];
}

function getHumanChoice() {
    let b = window.prompt("Enter your choice (Rock, Paper, or Scissors)");
    return b;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    tmp = humanChoice[0].toUpperCase() + humanChoice.substring(1);
    humanChoice = tmp;
    console.log(`Human choice is ${humanChoice}`);
    console.log(`Computer choice is ${computerChoice}`);

    if (humanChoice === computerChoice){
        console.log(`It's a tie! ${humanChoice} is same as ${computerChoice}`);
    }
    
    else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice ==="Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;

    }

    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);