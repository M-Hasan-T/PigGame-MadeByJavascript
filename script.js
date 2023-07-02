'use strict';

// Because we will need to do something with these selected elements multiple times, we define them, and through two ways:
//with querySelector and getElementbyId.
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');

const diceElement = document.querySelector('.dice');
const btnNewElement = document.querySelector('.btn--new');
const btnRollElement = document.querySelector('.btn--roll');
const btnHoldElement = document.querySelector('.btn--hold');

//Set these initial conditions of the elements. Javascript will automatically convert these initial values to strings to actually display them on the page.

score0Element.textContent = 0;
score1Element.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let finalScore0 = 0;
let finalScore1 = 0;

function addHidden() {
  diceElement.classList.add('hidden');
}

function removeHidden() {
  diceElement.classList.remove('hidden');
}

addHidden();

//Rolling dice function
btnRollElement.addEventListener('click', function () {
  const randomDice = Math.trunc(Math.random() * 6 + 1);
  removeHidden();
  diceElement.src = `dice-${randomDice}.png`;
  if (randomDice === 1) {
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  } else {
    currentScore += randomDice;
    document.getElementById(`score--${activePlayer}`).textContent =
      currentScore;
    {
      //player change
    }
  }
});

btnHoldElement.addEventListener('click', function () {
  if (activePlayer === 0) {
    finalScore0 += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      finalScore0;
  } else {
    finalScore1 += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      finalScore1;
  }
  document.getElementById(`score--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
});

btnNewElement.addEventListener('click', function () {
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  finalScore0 = 0;
  finalScore1 = 0;
});
