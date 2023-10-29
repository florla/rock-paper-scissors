const buttons = document.querySelectorAll('button');
const resultDisplay = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', () => playGame(button.id));
});

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = determineWinner(playerChoice, computerChoice);
    resultDisplay.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

