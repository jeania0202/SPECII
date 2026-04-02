const playerChoiceDisplay = document.getElementById('player-Choice');
const computerChoiceDisplay = document.getElementById('computer-Choice');
const resultText = document.getElementById('result-text');

const choices = ['rock', 'paper', 'scissors'];

function game(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    playerChoice === computerChoice ? resultText.textContent = "It's a tie!" :
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ? resultText.textContent = "You win!" :
    resultText.textContent = "Computer wins!";
    playerChoiceDisplay.textContent = `YOU: ${playerChoice}`;
    computerChoiceDisplay.textContent = `COMPUTER: ${computerChoice}`;

    
}

