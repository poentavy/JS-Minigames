'use strict';

let secretNumber = Math.trunc(Math.random()* 20)+ 1;
let score = 20;
let highscore = 0;
let maxNumber = 20;
console.log(secretNumber);

const displayMessage = function(msg){
    document.querySelector(`.message`).textContent = msg ;
};

document.querySelector(`.check`).addEventListener(`click`, function (){
    const guess = Number(document.querySelector(`.guess`).value);
    if (!guess){
        displayMessage(`Not a number bruh!🤦‍♂️`);
    }else if (guess === secretNumber){
        document.querySelector(`.number`).textContent = secretNumber;
        displayMessage(`You got it!🌞`);
        document.querySelector(`.check`).disabled = true;
        document.querySelector(`.difficulty`).disabled = true;
        document.querySelector(`body`).style.backgroundColor= '#60b347' ;
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore){
            highscore = score ;
            document.querySelector(`.highscore`).textContent = highscore;
            
        }

    }

    else if (guess !== secretNumber ) {
        if(score > 1 ){
            displayMessage(guess > secretNumber ? `Too high!📈`: `Too low!📉`);
            score--;
            document.querySelector(`.guess`).value = '';
            document.querySelector(`.score`).textContent = score;
        }else{
            displayMessage(`You loser!😞 `);
            document.querySelector(`.score`).textContent = 0;
        }

    }
    
});

document.querySelector('.guess').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.querySelector('.check').click();
    }else if(event.key === 'Escape'){
        document.querySelector('.again').click();
    }
  });

document.querySelector(`.again`).addEventListener(`click`, function() {
    score = maxNumber; 
    secretNumber = Math.trunc(Math.random()* maxNumber) + 1;
    console.log(secretNumber);
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = `?` ;
    displayMessage(`Start guessing...`);
    document.querySelector(`body`).style.backgroundColor = `#222` ; 
    document.querySelector('.number').style.width = '15rem';
    document.querySelector(`.guess`).value = '';
    document.querySelector(`.check`).disabled = false;
    document.querySelector(`.difficulty`).disabled = false;

});
document.querySelector(`.difficulty`).addEventListener(`click`,function()
    {
    if (maxNumber === 20){
        maxNumber = 50;
    
    document.querySelector(`.between`).textContent= `(Between 1 and 50)` ;
    secretNumber = Math.trunc(Math.random()* maxNumber) + 1;
    highscore = 0;
    document.querySelector(`.highscore`).textContent = highscore;
    }else {
        maxNumber = 20;
        document.querySelector(`.between`).textContent= `(Between 1 and 20)` ;
        secretNumber = Math.trunc(Math.random()* maxNumber) + 1;
        highscore = 0;
        document.querySelector(`.highscore`).textContent = highscore;
    }
    score = maxNumber;
    console.log(secretNumber);
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.check`).disabled = false;
    document.querySelector(`.difficulty`).disabled = false;
    });

