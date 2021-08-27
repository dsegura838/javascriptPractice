'use strict';

/*
console.log(document.querySelector('.message').textContent);
//setting a message
document.querySelector('.message').textContent = 'Correct Number!🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//to read a value from an input field
//setting an input value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


//eventlistener for guess button
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess);

    //when there is no guess
    if(!guess){
        //document.querySelector('.message').textContent = `🛑 No number!`;
        displayMessage(`🛑 No number!`);
        
        //when guess is correct
    } else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Correct Number!🎉');
        //document.querySelector('.message').textContent = 'Correct Number!🎉';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //when guess is wrong
    } else if(guess !== secretNumber){
        if(score > 1){
            score--;
            //console.log(score);
            document.querySelector('.score').textContent = score;
            //document.querySelector('.message').textContent = guess > secretNumber ? `Too high 🐱‍🏍` : 'Too low 🥱';
            displayMessage(guess > secretNumber ? `Too high 🐱‍🏍` : 'Too low 🥱');
        }else{
            //document.querySelector('.message').textContent = `You Lost 🥺`;
            displayMessage(`You Lost 🥺`);
            document.querySelector('.score').textContent = 0;
        }
    }

    // else if(guess > secretNumber){
    //     if(score > 1){
    //         score--;
    //         //console.log(score);
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('.message').textContent = `Too high 🐱‍🏍`;
    //     }else{
    //         document.querySelector('.message').textContent = `You Lost 🥺`;
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // } else if(guess < secretNumber){
    //     if(score > 1){
    //         score--;
    //         console.log(score);
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('.message').textContent = 'Too low 🥱';
    //     }else{
    //         document.querySelector('.message').textContent = `You Lost 🥺`;
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }

});

//event listener for again button
document.querySelector('.again').addEventListener('click', function(){
    score = 20
    //reset score
    document.querySelector('.score').textContent = score;
    //reset message
    displayMessage('Start guessing...');
    //document.querySelector('.message').textContent = 'Start guessing...';
    //reset background color
    document.querySelector('body').style.backgroundColor = '#222';
    //reset sizing
    document.querySelector('.number').style.width = '15rem';
    //hide secret number
    document.querySelector('.number').textContent = '?';
    //reset secret num
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    console.log(secretNumber);
    //reset input box value
    document.querySelector('.guess').value = '';
} );