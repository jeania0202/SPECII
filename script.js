const playerChoiceDisplay = document.getElementById("player-Choice");
const computerChoiceDisplay = document.getElementById("computer-Choice");
const resultText = document.getElementById("result-text");
const mscore = document.getElementById("mscore");
const cscore = document.getElementById("cscore");
const choices = ["ROCK", "PAPER", "SCISSORS"];
const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissor");
const computerChoice = choices[Math.floor(Math.random() * 3)];
let scorem= 0;
let scorec=0;
function playgame(player){
    if(player === computerChoice){
        resultText.textContent = "It's a tie!";
    } else if((player === "ROCK" && computerChoice === "SCISSORS") ||
              (player === "PAPER" && computerChoice === "ROCK") ||
              (player === "SCISSORS" && computerChoice === "PAPER")){
        resultText.textContent = "You win!";
        scorem++;

    } else {
        resultText.textContent = "Computer wins!";
        scorec++;
    }
    playerChoiceDisplay.textContent = `YOU: ${player}`;
    computerChoiceDisplay.textContent = `COMPUTER: ${computerChoice}`;
    mscore.innerHTML=`You : ${scorem}`;
    cscore.innerHTML=`Computer : ${scorec}`;
}
rock.addEventListener("click", () => playgame("ROCK"));
paper.addEventListener("click", () => playgame("PAPER"));
scissors.addEventListener("click", () => playgame("SCISSORS"));

