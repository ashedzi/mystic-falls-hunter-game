'use strict';

import * as utils from utils.js;

const elena = utils.select('./assets/img/elena.jpg');
const stefan = utils.select('./assets/img/stefan.jpg');
const damon = utils.select('./assets/img/damonn.jpg');
const bonnie = utils.select('./assets/img/bonniee.jpg');
const katherine = utils.select('./assets/img/katherine-pierce.jpg');
const caroline = utils.select('./assets/img/carolinee.jpg');
const klaus = utils.select('./assets/img/klauss.jpg');
const tyler = utils.select('./assets/img/tyler.jpg');

const images = [ elena, stefan, damon, bonnie, katherine, caroline, klaus, tyler];

const doubledCards = [...images, ...images];
const sortedCards = doubledCards.sort(() => Math.random() - 0.5);

const cardBack = utils.select('.back');
