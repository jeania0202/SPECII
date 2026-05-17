const playerChoiceDisplay = document.getElementById("player-Choice");
const computerChoiceDisplay = document.getElementById("computer-Choice");
const resultText = document.getElementById("result-text");

const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");
const finalResult = document.getElementById("final-result");
const resetBtn = document.getElementById("reset-btn");
const gameBox = document.querySelector(".game-container");
const choices = ["ROCK", "PAPER", "SCISSORS"];
const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissor");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playgame(player){
    if(gameOver) return;

    const computerChoice = getComputerChoice();

     playerChoiceDisplay.textContent = `YOU: ${player}`;
     computerChoiceDisplay.textContent = `COMPUTER: ${computerChoice}`;
    
    if(player === computerChoice){
        resultText.textContent = "It's a tie!";
        return;
    } 
    if(
        (player === "ROCK" && computerChoice === "SCISSORS") ||
        (player === "PAPER" && computerChoice === "ROCK") ||
        (player === "SCISSORS" && computerChoice === "PAPER"))
    {
        playerScore++;
        resultText.textContent = "YOU WIN! 🔥";
        gameBox.classList.add("shake");
        
    } else {
        computerScore++;
        resultText.textContent = "COMPUTER WINS! 💻";
        gameBox.classList.add("shake");
    }

        setTimeout(() => gameBox.classList.remove("shake"), 300);

    playerScoreText.textContent = `YOU: ${playerScore}`;
    computerScoreText.textContent = `COMPUTER: ${computerScore}`;
    checkWinner();
}

function checkWinner() {
    if (playerScore === 10 || computerScore === 10) {
        gameOver = true;

        if (playerScore === 10) {
            finalResult.textContent = "🏆 CONGRATULATIONS YOU WIN!";
        } else {
            finalResult.textContent = "💀 COMPUTER WINS!";
        }
    }
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    playerScoreText.textContent = "YOU: 0";
    computerScoreText.textContent = "COMPUTER: 0";

    playerChoiceDisplay.textContent = "YOU:";
    computerChoiceDisplay.textContent = "COMPUTER:";
    resultText.textContent = "RESULT:";
    finalResult.textContent = "";
}

rock.addEventListener("click", () => playgame("ROCK"));
paper.addEventListener("click", () => playgame("PAPER"));
scissors.addEventListener("click", () => playgame("SCISSORS"));
resetBtn.addEventListener("click", resetGame);
