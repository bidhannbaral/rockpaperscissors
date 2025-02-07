let userScore = 0;
let computerScore = 0;

const playerScoreCounter = document.querySelector("#playerScoreCounter");
const computerScoreCounter = document.querySelector("#computerScoreCounter");
const detail = document.querySelector("#detail");
const rules = document.querySelector("#rules");
const play = document.querySelector("#play");

rules.addEventListener("click", () => {
    alert(
        "It's a basic game of rock paper scissors.\n" +
        "You should know how to play.\n" +
        "However, if you have never played before, then all you have to do is select either rock, paper, or scissors.\n" +
        "- Rock beats scissors.\n" +
        "- Paper beats rock.\n" +
        "- Scissors beats paper.\n" +
        "You will be playing against a computer.\n" +
        "Good Luck!"
    );
});

function playGame() {

    play.disabled = true;

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

    function playRound(userChoice) {

        const computerChoice = getComputerChoice();

        if (userChoice == computerChoice) {
            detail.textContent = "You chose " + userChoice + ". Computer chose " + computerChoice + ". It's a tie.";
        } else if (userChoice == "rock" && computerChoice == "paper") {
            detail.textContent = "You chose " + userChoice + ". Computer chose " + computerChoice + ". You lose.";
            computerScore++;
        } else if (userChoice == "rock" && computerChoice == "scissors") {
            detail.textContent = "You chose " + userChoice + ". Computer chose " + computerChoice + ". You win.";
            userScore++;
        } else if (userChoice == "paper" && computerChoice == "rock") {
            detail.textContent = "You chose " + userChoice + ". Computer chose " + computerChoice + ". You win.";
            userScore++;
        } else if (userChoice == "paper" && computerChoice == "scissors") {
            detail.textContent = "You chose " + userChoice + ". Computer chose " + computerChoice + ". You lose.";
            computerScore++;
        } else if (userChoice == "scissors" && computerChoice == "paper") {
            detail.textContent = "You chose " + userChoice + ". Computer chose " + computerChoice + ". You win.";
            userScore++;
        } else if (userChoice == "scissors" && computerChoice == "rock") {
            detail.textContent = "You chose " + userChoice + ". Computer chose " + computerChoice + ". You lose.";
            computerScore++;
        }

        updateScore();
        checkForWin();
    }

    function checkForWin() {
        if (userScore == 5) {
            alert("You have defeated the computer!");
            detail.textContent = "You have defeated the computer!";
            endGame();
        } else if (computerScore == 5) {
            alert("The computer has defeated you!");
            detail.textContent = "The computer has defeated you!";
            endGame();
        }
    }

    function updateScore() {
        playerScoreCounter.textContent = userScore;
        computerScoreCounter.textContent = computerScore;
    }

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => {
        playRound("rock");
    });
    paper.addEventListener("click", () => {
        playRound("paper");
    });
    scissors.addEventListener("click", () => {
        playRound("scissors");
    });
}

function startGame() {
    play.disabled = false;

    play.addEventListener("click", () => {
        detail.textContent = "You are now playing";
        playGame();
    });
}

function endGame() {
    userScore = 0;
    computerScore = 0;

    playerScoreCounter.textContent = userScore;
    computerScoreCounter.textContent = computerScore;
}

startGame();

