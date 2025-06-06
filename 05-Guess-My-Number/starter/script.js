'use strict';

let message = document.querySelector('.message');
let scoreSelect = document.querySelector('.score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        message.textContent = "No Guess Given, please try again."
    } else if (guess === secretNumber) {
        message.textContent = "Well done, you got it right!"
        score++;
        scoreSelect.textContent = score;
    } else if (guess > secretNumber) {
        if  (score > 1) {
            message.textContent = "Your guess was too high...";
            score--;
            scoreSelect.textContent = score;
        } else {
            message.textContent = "You Lost the game, better luck next time!";
            scoreSelect.textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = "Your guess was too low..."
            score--;
            scoreSelect.textContent = score;
        } else {
            message.textContent = "You Lost the game, better luck next time!";
            scoreSelect.textContent = 0;
        }
    }
})