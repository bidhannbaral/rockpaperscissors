let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomValue == 0) {
        computerChoice = "rock";
    } else if (randomValue == 1) {
        computerChoice = "paper";
    } else if (randomValue == 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("Select Rock, Paper, or Scissors: ");
    userChoice.toLowerCase();
    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        userChoice = prompt("Enter a valid option: Rock, Paper, or Scissors: ");
        userChoice.toLowerCase();
    }
    return userChoice;
}

function playRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        console.log("It's a tie");
    } else if (userChoice == "rock" && computerChoice == "paper") {
        console.log("You lose. Paper beats rock.")
        computerScore++;
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        console.log("You win. Rock beats scissors");
        userScore++;
    } else if (userChoice == "paper" && computerChoice == "rock") {
        console.log("You win. Paper beats rock");
        userScore++;
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose. Scissors beats paper");
        computerScore++;
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        console.log("You win. Scissors beats paper");
        userScore++;
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose. Rock beats scissors");
        computerScore++;
    }
}

function playAgain() {
    userScore = 0;
    computerScore = 0;
    playGame();
}

function playGame() {
    while (userScore != 5 && computerScore != 5) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
    }

    if (userScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }

    let again = prompt("Would you like to play again? Yes or No");
    again.toLowerCase();

    while (again != "yes" && again != "no") {
        again = prompt("Enter a valid option: Yes or No");
        again.toLowerCase();
    }

    if (again == "yes") {
        playAgain();
    }
}