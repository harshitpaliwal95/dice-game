'use srict';
// element selection
const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// stating possition
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let score, currentScore, activePlayer, playing;
// new game
const init = function () {
  score = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  score1El.textContent = 0;
  score2El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// current score
// this array becouse who have 0 in current he is active player

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// roll dice and show function
btnRoll.addEventListener('click', function () {
  if (playing) {
    // rendom dice number
    const dice = Math.trunc(Math.random() * 6) + 1;

    //   show dice
    diceEl.classList.remove('hidden');
    diceEl.src = `https://raw.githubusercontent.com/harshitpaliwal95/complete-javascript-course/master/07-Pig-Game/starter/dice-${dice}.png`;

    //   score correction
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // document.querySelector('#current--0').textContent = currentScore;
    } else {
      //   switch to other player
      switchPlayer();
    }
  }
});

// hold buton
btnHold.addEventListener('click', function () {
  // add current socore
  if (playing) {
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 30) {
      diceEl.classList.add('hidden');
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
