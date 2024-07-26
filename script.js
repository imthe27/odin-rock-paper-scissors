const availableSelections = ["Rock", "Paper", "Scissors"];
const rockbtn = document.createElement("button");
const paperbtn = document.createElement("button");
const scissorsbtn = document.createElement("button");
const divbtns = document.createElement("div");
const divscore = document.createElement("div");
const divres = document.createElement("div");
const para = document.createElement("p");
const hScore = document.createElement("p");
const cScore = document.createElement("p");
const btns = document.querySelectorAll("button");
const body = document.querySelector("body");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return availableSelections[(Math.floor(Math.random() * availableSelections.length))];
}

function playRound(humanChoice) {
    if (humanScore < 5 && computerScore < 5) {
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
    hScore.textContent = `Player: ${humanScore}.`;
    cScore.textContent = `Computer: ${computerScore}.`;
    result();
});
paperbtn.addEventListener("click", () => {
    playRound("paper");
    hScore.textContent = `Player: ${humanScore}.`;
    cScore.textContent = `Computer: ${computerScore}.`;
    result();
});
scissorsbtn.addEventListener("click", () => {
    playRound("scissors");
    hScore.textContent = `Player: ${humanScore}.`;
    cScore.textContent = `Computer: ${computerScore}.`;
    result();
});

divscore.appendChild(hScore);
divscore.appendChild(cScore);
body.appendChild(divscore);

function result() {
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            para.textContent = "Congrats, you won!";
            divres.appendChild(para);
        } else {
            para.textContent = "how tf did u lose?";
            divres.appendChild(para);
        }
    }
}

body.appendChild(divres);
