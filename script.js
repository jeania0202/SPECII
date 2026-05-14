const playerChoiceDisplay = document.getElementById("player-Choice");
const computerChoiceDisplay = document.getElementById("computer-Choice");
const resultText = document.getElementById("result-text");

const choices = ["ROCK", "PAPER", "SCISSORS"];
const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissor");
const computerChoice = choices[Math.floor(Math.random() * 3)];

function playgame(player){
    if(player === computerChoice){
        resultText.textContent = "It's a tie!";
    } else if((player === "ROCK" && computerChoice === "SCISSORS") ||
              (player === "PAPER" && computerChoice === "ROCK") ||
              (player === "SCISSORS" && computerChoice === "PAPER")){
        resultText.textContent = "You win!";
    } else {
        resultText.textContent = "Computer wins!";
    }
    playerChoiceDisplay.textContent = `YOU: ${player}`;
    computerChoiceDisplay.textContent = `COMPUTER: ${computerChoice}`;
}
rock.addEventListener("click", () => playgame("ROCK"));
paper.addEventListener("click", () => playgame("PAPER"));
scissors.addEventListener("click", () => playgame("SCISSORS"));

