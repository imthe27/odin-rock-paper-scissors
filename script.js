const avaliableSelections = ["rock", "paper", "scissors"];
var computerSelection;
var playerSelection;
var rounds = 0;
var gameIsOver = false;
var pwin = 0;
var cwin = 0;
var random;

function getPlayerChoice() {
    let input = prompt("asdsd");
    return input.toLowerCase();
}

function getComputerChoice() {
    random = Math.floor(Math.random() * avaliableSelections.length);
    return avaliableSelections[random];
}

function playRound(playerSelection, computerSelection) {
        computerSelection = getComputerChoice();
        switch (playerSelection = getPlayerChoice()) {
            case 'rock':
                if (computerSelection == 'scissors') {
                    console.log("You Won! Rock beats Scissors")
                    pwin++;
                } else {
                    if (computerSelection == 'paper') {
                        console.log("You Lose! Paper beats Rock")
                        cwin++;
                    } else {
                        console.log("Tie! You both chose Rock")
                    }
                }
                break;

                case 'paper':
                    if (computerSelection == 'rock') {
                        console.log("You Won! Paper beats Rock")
                        pwin++;
                    } else {
                        if (computerSelection == 'scissors') {
                            console.log("You Lose! Scissors beats Paper")
                            cwin++;
                        } else {
                            console.log("Tie! You both chose Paper")
                        }
                    }
                    break;

                case 'scissors':
                if (computerSelection == 'paper') {
                    console.log("You Won! Scissors beats Paper")
                    pwin++;
                } else {
                    if (computerSelection == 'rock') {
                        console.log("You Lose! Rock beats Scissors")
                        cwin++
                    } else {
                        console.log("Tie! You both chose Scissors")
                    }
                }
                break;
        
            default:
                prompt("please enter")
                break;
    }
} 

function game() {
    for (rounds = 0;rounds < 5;rounds++) {
        playRound();
    }
    if (pwin > cwin) {
        console.log("COngrats, you won")
    } else {
        if (pwin < cwin) {
            console.log("how tf did u lose?")
        } else {
            console.log("wtf a tie?")
        }
    }
}