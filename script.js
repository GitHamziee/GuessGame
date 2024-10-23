'use strict';
let SecretNumber = Math.trunc(Math.random() * 11);
let score = 10;
let highScore = 0;

function PrintMessage(text) {
  document.querySelector('.message').textContent = text;
}

function reset() {
  document.querySelector('.again').addEventListener('click', function () {
    console.log('hellooo==>>');
    score = 10;
    SecretNumber = Math.trunc(Math.random() * 11);
    document.querySelector('body').style.backgroundColor = ' black';
    document.querySelector('.score').textContent = score;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  //   document.querySelector('.number').textContent = SecretNumber;

  document.querySelector('.check').addEventListener('click', function () {
    let guessedNum;

    if (Number(document.querySelector('.guess').value) == '') {
      PrintMessage('please enter a number 🤬');
    } else {
      guessedNum = Number(document.querySelector('.guess').value);

      reset();

      if (score <= 0) {
        document.querySelector('.message').textContent = 'You lost 🤣';
      } else {
        if (guessedNum === SecretNumber) {
          PrintMessage('Correctly Guessed 🥳🎈');
          if (score > highScore) {
            highScore = score;
          }
          document.querySelector('.highscore').textContent = highScore;
          reset();
          document.querySelector('body').style.backgroundColor = ' #60b347';
        } else if (guessedNum > SecretNumber) {
          PrintMessage('Try guessing a bit lower 👌');
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent = PrintMessage(
            'Try guessing a bit higher 👌'
          );
          score--;
          document.querySelector('.score').textContent = score;
        }
      }
    }
  });
});
