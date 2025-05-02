'use strict';

// import * as utils from './utils.js';

// const cards = utils.selectAll('.card');
// const back = utils.select('.back');

const cards = document.querySelectorAll('.card');
const dialog = document.querySelector('dialog');
const startButton = document.querySelector('.start-game');
const restartButton = document.querySelector('.restart-game');
const game = document.querySelector('section')
const modal = document.querySelector('.modal');
const displayMoves = document.querySelector('.moves span');
const timer = document.querySelector('.timer p');
// const back = document.querySelector('.back');

const images = [ 
    'elena.jpg', 
    'stefan.jpg', 
    'damon.jpg', 
    'bonnie.jpg', 
    'katherine.jpg', 
    'caroline.jpg', 
    'klaus.jpg', 
    'tyler.jpg',
    'enzo.jpg',
    'rebekah.jpg'
]; 

const cardDeck = [...images, ...images];
const shuffledCards = cardDeck.sort(() => Math.random() - 0.5);
let moves = 0;
let flippedCards = [];


cards.forEach((card, index) => {
    const back = card.querySelector('.back');
    back.style.backgroundImage = `url('./assets/img/${shuffledCards[index]}')`;
    card.addEventListener('click', () => {
        flipCard(card);
    });
});

function startGame() {
    startTimer();
    moves = 0;
    displayMoves.textContent = moves;
    flippedCards = [];
    shuffledCards;
    cards.forEach(card => {
        card.style.transform = 'rotateY(180deg)';
    })

    setTimeout(() => {
        cards.forEach(card => {
            card.style.transform = 'rotateY(0deg)';
        })
    }, 3000);
}

function restartGame() {
    clearInterval(timerInterval);
    startTimer();
    moves = 0;
    displayMoves.textContent = moves;
    flippedCards = [];

    const reshuffled = [...images, ...images].sort(() => Math.random() - 0.5);


    cards.forEach((card, index) => {
        card.style.transform = 'rotateY(180deg)';
        const back = card.querySelector('.back');
        back.style.backgroundImage = `url('./assets/img/${reshuffled[index]}')`;
    })

    setTimeout(() => {
        cards.forEach(card => {
            card.style.transform = 'rotateY(0deg)';
        })
    }, 3000);
    startTimer();
}

function flipCard(card) {
    if (flippedCards.length === 2)
     return;

    card.style.transform = 'rotateY(180deg)';
    flippedCards.push(card);

    if (flippedCards.length === 2) {

        setTimeout(() => {
            if (flippedCards[0].querySelector('.back').style.backgroundImage === flippedCards[1].querySelector('.back').style.backgroundImage) {
                moves++;
                displayMoves.textContent = moves;
                flippedCards = [];
            } else {
                flippedCards.forEach(card => {
                    card.style.transform = 'rotateY(0deg)';
                });
                flippedCards = [];
            }
        }, 1000);
    }
}

let timerInterval;
let timeElapsed = 0;

function startTimer() {
    timeElapsed = 0;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeElapsed++;
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    timer.textContent = `${formattedTime}`;
}

startButton.addEventListener('click', () => {
    modal.style.display = 'none';
    game.style.display = 'block'
    startGame();
})

restartButton.addEventListener('click', () => {
    restartGame();
})
