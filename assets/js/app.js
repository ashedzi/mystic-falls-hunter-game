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
    cards.forEach(card => {
        card.style.transform = 'rotateY(180deg)';
    })

    setTimeout(() => {
        cards.forEach(card => {
            card.style.transform = 'rotateY(0deg)';
        })
    }, 3000);
}

startButton.addEventListener('click', () => {
    // console.log('Start button clicked');
    // dialog.close();
    modal.style.display = 'none';
    game.style.display = 'block'

    startGame()
})


window.addEventListener('load', () => {
    
    // setTimeout(() => {
    //     dialog.showModal();
    // }, 1000);
});

function validateHits() {
    let displayedWord = randomWords.textContent.trim();
    let userInput = typedWord.value.trim();

    if ((displayedWord.length === userInput.length) && (displayedWord === userInput)) {
        correct.currentTime = 0;
        correct.play();
        randomWords.textContent = getNextWord();
        clearInput();
        count++;
        numberOfHits.textContent = `Hits: ${count}`;
    }
}