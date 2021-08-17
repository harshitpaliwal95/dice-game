'use srict';
// element selection
const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const deiceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// stating possition

score1El.textContent = '0';
score2El.textContent = '0';
deiceEl.classList.add('hidden');

// current score
let currentScore = 0;

// roll dice and show function
btnRoll.addEventListener('click', function () {
  // rendom dice number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //   show dice
  deiceEl.classList.remove('hidden');
  deiceEl.src = `https://raw.githubusercontent.com/harshitpaliwal95/complete-javascript-course/master/07-Pig-Game/starter/dice-${dice}.png`;

  //   score correction
  if (dice !== 1) {
    currentScore += dice;
    document.querySelector('#current--0').textContent = currentScore;
  } else {
    //   switch to other player
  }
});
