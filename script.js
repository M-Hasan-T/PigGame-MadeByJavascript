'use strict';

// Because we will need to do something with these selected elements multiple times, we define them, and through two ways:
//with querySelector and getElementbyId.

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');

const diceElement = document.querySelector('.dice');
const btnNewElement = document.querySelector('.btn--new');
const btnRollElement = document.querySelector('.btn--roll');
const btnHoldElement = document.querySelector('.btn--hold');
//const activePlayerBgColor = document.querySelector('.player');

//Set these initial conditions of the elements. Javascript will automatically convert these initial values to strings to actually display them on the page.

let scores, currentScore, activePlayer, play;

function addHidden() {
  diceElement.classList.add('hidden');
}

function removeHidden() {
  diceElement.classList.remove('hidden');
}

const initialValues = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  play = true;
  addHidden();
  score0Element.textContent = 0;
  score1Element.textContent = 0;
};

initialValues();

// function changeBackgroundColor() {
//   if (activePlayer === 0) {
//     player0Element.classList.add('player--active');
//     player1Element.classList.remove('player--active');
//   } else {
//     player0Element.classList.remove('player--active');
//     player1Element.classList.add('player--active');
//   }
// }
function switchPlayer() {
  document.getElementById(`score--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}

//Rolling dice function
btnRollElement.addEventListener('click', function () {
  if (play) {
    const randomDice = Math.trunc(Math.random() * 6 + 1);
    removeHidden();
    diceElement.src = `dice-${randomDice}.png`;
    if (randomDice === 1) {
      switchPlayer();
    } else {
      currentScore += randomDice;
      document.getElementById(`score--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

btnHoldElement.addEventListener('click', function () {
  if (play) {
    scores[activePlayer] += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      play = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner', 'name');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      // document.querySelector('.btn--roll').disabled = true;
      // document.querySelector('.btn--hold').disabled = true;
      addHidden();
    } else {
      switchPlayer();
    }
  }
});

btnNewElement.addEventListener('click', function () {
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner', 'name');
  initialValues();
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
