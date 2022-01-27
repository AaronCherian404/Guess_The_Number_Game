'use strict';

//generates the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;
//treats the click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //invalid input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Entered!';
    //when guess is correct
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Answer!';
    document.querySelector('.number').textContent = secretNumber;
    //changes colour when right
    document.querySelector('body').style.backgroundColor = '#60b347';

    //doubles width when correct
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;

    //When guess is diffrent
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Lost the Game! Try Again...';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//Reseting everything
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
