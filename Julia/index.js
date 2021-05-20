'use strict';

console.log('funguju');

const divLength = document.getElementsByTagName('div').length;

let i;
const gridColors = () => {
  for (i = 0; i < divLength; i++) {
    const r = Math.floor(Math.random() * 5);
    const b = Math.floor(Math.random() * 5);
    const y = Math.floor(Math.random() * 5);

    const colors = 'rby(' + r + ',' + b + ',' + y + ')';
    divLength[i].style.backgroundColor = colors;
  }
};

const btnElm = document.querySelector('button');
btnElm.addEventListener('click', gridColors);
