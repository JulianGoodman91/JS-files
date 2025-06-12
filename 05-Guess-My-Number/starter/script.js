'use strict';

let guessValue = document.querySelector('.guess');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let scoreSelect = document.querySelector('.score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScoreEl = document.querySelector('.highscore');

let score = 20;
let highScore = 0;

const displayMessage = (msg) => {
    message.textContent = msg;
}

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    guessValue.value = '';
    number.textContent = '?';
    scoreSelect.textContent = score;
    displayMessage('Start guessing...');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    number.style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
})

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(guessValue.value);
    
    if(!guess) {
        displayMessage("No Guess Given, please try again.");

    } else if (guess === secretNumber) {
        displayMessage("Well done, you got it right!");
        document.querySelector('body').style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        number.textContent = secretNumber;

        if (score > highScore) {
            highScore = score
            highScoreEl.textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        if  (score > 1) {
            displayMessage(guess > secretNumber ? "Your guess was too high..." : "Your guess was too low...");
            score--;
            scoreSelect.textContent = score;
        } else {
            displayMessage("You Lost the game, better luck next time!");
            scoreSelect.textContent = 0;
        }
    }
});