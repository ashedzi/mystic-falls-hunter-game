'use strict';

// import * as utils from './utils.js';

// const cards = utils.selectAll('.card');
// const back = utils.select('.back');

const cards = document.querySelectorAll('.card');
const dialog = document.querySelector('dialog');
const startButton = document.querySelector('.start-game');
const restartButton = document.querySelector('.restart-game');
// const back = document.querySelector('.back');

const images = [ 
    'elena.jpg', 
    'stefan.jpg', 
    'damon.jpg', 
    'bonnie.jpg', 
    'katherine.jpg', 
    'caroline.jpg', 
    'klaus.jpg', 
    'tyler.jpg'
]; 

const cardDeck = [...images, ...images];
const shuffledCards = cardDeck.sort(() => Math.random() - 0.5);

cards.forEach((card, index) => {
    const back = card.querySelector('.back');
    back.style.backgroundImage = `url('./assets/img/${shuffledCards[index]}')`;
});


function startGame() {

}

window.addEventListener('load', () => {
    setTimeout(() => {
        dialog.showModal();
    }, 1000);
});



listen('click', open, () => {
    dialog.showModal();
});

listen('click', close, () => {
    dialog.close();
})