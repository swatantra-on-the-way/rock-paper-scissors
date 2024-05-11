let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let a = Math.floor(Math.random() * 3);
    return choices[a];
}

let result_box = document.createElement("div");
result_box.style.marginLeft = "20px";
document.body.appendChild(result_box);

let rock_button = document.querySelector("#rock-button");
let paper_button = document.querySelector("#paper-button");
let scissor_button = document.querySelector("#scissor-button");

rock_button.addEventListener("click", () => {
    console.log("Rock button pressed");
    playRound('Rock', getComputerChoice());
});

paper_button.addEventListener("click", (e) => {
    console.log("Paper button pressed");
    playRound('Paper', getComputerChoice());
});

scissor_button.addEventListener("click", (e) => {
    console.log("Scissor button pressed");
    playRound('Scissors', getComputerChoice());
});


function playRound(humanChoice, computerChoice){

    let comp_score = document.querySelector("#comp_score");
    let human_score = document.querySelector("#human_score");

    if (humanChoice == computerChoice){
        result_box.innerText = `It's a tie! ${humanChoice} is same as ${computerChoice}`;
    }
    
    else if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice =="Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")){
        result_box.innerText =`You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;

    }

    else{
        result_box.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }

    comp_score.innerText = `${computerScore}`;
    human_score.innerText = `${humanScore}`;

    if (humanScore >= 5 || computerScore >= 5) {
        let final_msg = document.createElement("div");
        let reset_button = document.createElement("button");

        start = false;

        final_msg.style.marginLeft = "20px";
        final_msg.style.marginTop = "10px";

        reset_button.style.marginLeft = "20px";
        reset_button.style.marginTop = "10px";

        reset_button.innerText = "Play Again";
        
        if (humanScore > computerScore) {
            final_msg.innerText = "Congrats! You won the game.";
        }
        else {
            final_msg.innerText = "Sorry, but you lost the game. Better Try Next Time.";
        }
        
        document.body.appendChild(final_msg);
        document.body.appendChild(reset_button);

        reset_button.addEventListener('click', (e) => {
            humanScore = 0;
            computerScore = 0;

            comp_score.innerText = "0";
            human_score.innerText = "0";
        
            document.body.removeChild(final_msg);
            document.body.removeChild(reset_button);
            result_box.innerText = "";

        });
    }
        
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

// function playGame(){
//     humanScore = 0;
//     computerScore = 0;

//     tmp1 = getHumanChoice();
//     tmp2 = getComputerChoice();
//     playRound(tmp1, tmp2);

//     console.log("\n");
//     if (humanScore === computerScore){
//         console.log("It's a tie");
//     }

//     else if(humanScore > computerScore){
//         console.log("Congrats! You won.");
//     }
    
//     else{
//         console.log("You lost! Sorry.");
//     }

// }