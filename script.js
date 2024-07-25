const availableSelections = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return availableSelections[(Math.floor(Math.random() * availableSelections.length))];
}

function getHumanChoice() {
    let choice = '';
    do {
        choice = prompt("Pick an item of your choice(Rock, Paper, Scissors): ");
    } while (choice.toUpperCase() != "ROCK" && choice.toUpperCase() != "PAPER" && choice.toUpperCase() != "SCISSORS");
    return choice;
}

function playRound(humanChoice, computerChoice) {
        switch (humanChoice.toUpperCase()) {
            case 'ROCK':
                if (computerChoice == "Scissors") {
                    console.log("You Won! Rock beats Scissors");
                    humanScore++;
                } else if (computerChoice == "Paper") {
                        console.log("You Lose! Paper beats Rock");
                        computerScore++;
                } else {
                        console.log("Tie! You both chose Rock");
                    }
                break;

            case 'PAPER':
                if (computerChoice == "Rock") {
                    console.log("You Won! Paper beats Rock");
                    humanScore++;
                } else if (computerChoice == "Scissors") {
                        console.log("You Lose! Scissors beats Paper");
                        computerScore++;
                } else {
                        console.log("Tie! You both chose Paper");
                }
                break;

            case 'SCISSORS':
                if (computerChoice == "Paper") {
                    console.log("You Won! Scissors beats Paper");
                    humanScore++;
                } else if (computerChoice == "Rock") {
                        console.log("You Lose! Rock beats Scissors");
                        computerScore++
                } else {
                        console.log("Tie! You both chose Scissors");
                }
                break;

            default:
                prompt("Please enter a valid item:");
                break;
    }
}

function playGame() {
    for (rounds = 5;rounds > 0;rounds--) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("Congrats, you won!")
    } else if (humanScore < computerScore) {
            console.log("how tf did u lose?")
    } else {
            console.log("wtf a tie?")
    }
}

playGame();