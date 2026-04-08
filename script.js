const playerChoiceDisplay = document.getElementById("player-Choice");
const computerChoiceDisplay = document.getElementById("computer-Choice");
const resultText = document.getElementById("result-text");

const choices = ["rock", "paper", "scissors"];
const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissor");
const computerChoice = choices[Math.floor(Math.random() * 3)];

function playgame(player){
    if(player === computerChoice){
        resultText.textContent = "It's a tie!";
    } else if((player === "rock" && computerChoice === "scissors") ||
              (player === "paper" && computerChoice === "rock") ||
              (player === "scissors" && computerChoice === "paper")){
        resultText.textContent = "You win!";
    } else {
        resultText.textContent = "Computer wins!";
    }
    playerChoiceDisplay.textContent = `YOU: ${player}`;
    computerChoiceDisplay.textContent = `COMPUTER: ${computerChoice}`;
}
rock.addEventListener("click", () => playgame("rock"));
paper.addEventListener("click", () => playgame("paper"));
scissors.addEventListener("click", () => playgame("scissors"));

