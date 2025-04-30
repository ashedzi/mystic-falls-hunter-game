// 'use strict';

// // import * as utils from './utils.js';

// // const cards = utils.selectAll('.card');
// // const back = utils.select('.back');

// const cards = document.querySelectorAll('.card');
// // const back = document.querySelector('.back');

// const images = [ 
//     'elena.jpg', 
//     'stefan.jpg', 
//     'damon.jpg', 
//     'bonnie.jpg', 
//     'katherine.jpg', 
//     'caroline.jpg', 
//     'klaus.jpg', 
//     'tyler.jpg'
// ]; 

// const cardDeck = [...images, ...images];
// const shuffledCards = cardDeck.sort(() => Math.random() - 0.5);

// cards.forEach((card, index) => {
//     const back = card.querySelector('.back');
//     back.style.backgroundImage = `url('./assets/img/${shuffledCards[index]}')`;
// });

// // cards.forEach((card, index) => {
// //     back.style.backgroundImage = `url('./img/cards/${shuffledCards[index]}')`;

// //     // card.classList.add('flipped');
// // });