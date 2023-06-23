'use strict';

//selectam elementele din html
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.getElementById('score--0'); //o alta alternativa
const score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let playing = true;
// console.log(score0, score1, diceEl);
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; //daca activePlayer este 0, atunci devine 1, altfel devine 0
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
btnRoll.addEventListener('click', function () {  //adaugam event listener
if(playing ){
    //1. generam un numar random
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. afisam zarul
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. verificam daca este 1
    if (dice !== 1) {
        //adunam scorul
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        //schimbam jucatorul
        switchPlayer();
    }   
    }   
})  

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore
    
        document.getElementById(`score--${activePlayer}`).textContent =
          scores[activePlayer];
    
        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
          // Finish the game
          playing = false;
          diceEl.classList.add('hidden');
    
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
        } else {
          // Switch to the next player
          switchPlayer();
        }
      }
})


btnNew.addEventListener('click', function () {
    playing = true;
    score0.textContent = 0;
    score1.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.add('player--active');
})
