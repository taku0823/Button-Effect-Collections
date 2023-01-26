'use strict';

const buttonAnimation10 = () => {
  const button = document.querySelector('.button10');
  const frontText = button.querySelector('.front');
  const backText = button.querySelector('.back');

  button.addEventListener('mouseover', () => {
    frontText.classList.add('is-hide');
    frontText.classList.remove('is-show');
    backText.classList.remove('is-hide');
    backText.classList.add('is-show');
  });

  button.addEventListener('mouseleave', () => {
    frontText.classList.remove('is-hide');
    frontText.classList.add('is-show');
    backText.classList.add('is-hide');
    backText.classList.remove('is-show');
  });

  button.addEventListener('click', (event) => {
    let x = event.clientX - event.target.offsetLeft;
    let y = event.clientY - event.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.classList.add('button10__ripples');
    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;
    button.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 800);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  buttonAnimation10();
});
