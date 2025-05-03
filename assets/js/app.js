'use strict';

// import * as utils from './utils.js';

// const cards = utils.selectAll('.card');
// const back = utils.select('.back');

const cards = document.querySelectorAll('.card');
const dialog = document.querySelector('dialog');
const startButton = document.querySelector('.start-game');
const restartButton = document.querySelector('.restart-game');
const game = document.querySelector('section');
const modal = document.querySelector('.modal');
const displayMoves = document.querySelector('.moves span');
const timer = document.querySelector('.timer p');
const scoreSummary = document.querySelector('.score-summary');
const gameOverModal = document.querySelector('.gameover-modal');
const replay = document.querySelector('.replay-game');
const bgMusic = new Audio('./assets/media/background.mp3');
bgMusic.type = 'audio/mp3';
bgMusic.loop = true;
const matchSound = new Audio('./assets/media/pain.mp3');
matchSound.type = 'audio/mp3';
const win = new Audio('./assets/media/victory-laugh.mp3');
win.type = 'audio/mp3';

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
    bgMusic.play();
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
        card.style.border = 'none';
        card.style.pointerEvents = 'auto'; 
        card.style.opacity = '1';
        const back = card.querySelector('.back');
        back.style.backgroundImage = `url('./assets/img/${reshuffled[index]}')`;
    })

    setTimeout(() => {
        cards.forEach(card => {
            card.style.transform = 'rotateY(0deg)';
        })
    }, 3000);
}

function flipCard(card) {
    if (flippedCards.length === 2)
     return;

    card.style.pointerEvents = 'none'; 
    card.style.transform = 'rotateY(180deg)';
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moves++;
        displayMoves.textContent = moves;
        setTimeout(() => {
            if (
                flippedCards[0].querySelector('.back').style.backgroundImage ===
                flippedCards[1].querySelector('.back').style.backgroundImage
            ) {
                matchSound.play();
                flippedCards[0].classList.add('matched');
                flippedCards[1].classList.add('matched');
                flippedCards = [];
                finishGame();
    
            } else {
                flippedCards.forEach(card => {
                    card.style.transform = 'rotateY(0deg)';
                    card.style.pointerEvents = 'auto';
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

function finishGame() {
    const matchedCards = document.querySelectorAll('.card.matched');
    if (matchedCards.length === cards.length) {
        clearInterval(timerInterval);
        scoreSummary.textContent = ` You tracked down all the mystical characters in ${timer.textContent} minutes with just ${moves} moves`;
        scoreSummary.style.color = '#00FFFF';
        dialog.showModal();
        win.play();
        bgMusic.pause();
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 }
          });
    }
}

startButton.addEventListener('click', () => {
    modal.classList.add('fade-out');
    modal.style.display = 'none';
    game.style.display = 'block';
    startGame();
})

restartButton.addEventListener('click', () => {
    restartGame();
})

replay.addEventListener('click', () => {
    if(dialog.open) {
        dialog.close();
    }
    restartGame();
})
