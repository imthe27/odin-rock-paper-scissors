const availableSelections = ["Rock", "Paper", "Scissors"];
const rockbtn = document.createElement("button");
const paperbtn = document.createElement("button");
const scissorsbtn = document.createElement("button");
const divbtns = document.createElement("div");
const para = document.createElement("p");
const body = document.querySelector("body");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return availableSelections[(Math.floor(Math.random() * availableSelections.length))];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
        switch (humanChoice) {
            case "rock":
                if (computerChoice == "Scissors") {
                    para.textContent = "You Won! Rock beats Scissors";
                    divbtns.appendChild(para);
                    humanScore++;
                } else if (computerChoice == "Paper") {
                        para.textContent = "You Lose! Paper beats Rock";
                        divbtns.appendChild(para);
                        computerScore++;
                } else {
                        para.textContent = "Tie! You both chose Rock";
                        divbtns.appendChild(para);
                    }
                break;

            case "paper":
                if (computerChoice == "Rock") {
                    para.textContent = "You Won! Paper beats Rock";
                    divbtns.appendChild(para);
                    humanScore++;
                } else if (computerChoice == "Scissors") {
                        para.textContent = "You Lose! Scissors beats Paper";
                        divbtns.appendChild(para);
                        computerScore++;
                } else {
                        para.textContent = "Tie! You both chose Paper";
                        divbtns.appendChild(para);
                }
                break;

            case "scissors":
                if (computerChoice == "Paper") {
                    para.textContent = "You Won! Scissors beats Paper";
                    divbtns.appendChild(para);
                    humanScore++;
                } else if (computerChoice == "Rock") {
                        para.textContent = "You Lose! Rock beats Scissors";
                        divbtns.appendChild(para);
                        computerScore++
                } else {
                        para.textContent = "Tie! You both chose Scissors";
                        divbtns.appendChild(para);
                }
                break;

            default:
                break;
    }
}

rockbtn.textContent = "Rock";
divbtns.appendChild(rockbtn);
paperbtn.textContent = "Paper";
divbtns.appendChild(paperbtn);
scissorsbtn.textContent = "Scissors";
divbtns.appendChild(scissorsbtn);
body.appendChild(divbtns);

rockbtn.addEventListener("click", () => {
    playRound("rock");
});
paperbtn.addEventListener("click", () => {
    playRound("paper");
});
scissorsbtn.addEventListener("click", () => {
    playRound("scissors");
});

//if (humanScore > computerScore) {
//        para.textContent = "Congrats, you won!";
//} else if (humanScore < computerScore) {
//        para.textContent = "how tf did u lose?";
//} else {
//        para.textContent = "wtf a tie?";
//}