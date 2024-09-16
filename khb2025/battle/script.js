const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === '⚙') {
    btn.innerHTML = '×';
  } else {
    btn.innerHTML = '⚙';
  }
});
nav.addEventListener('click', () => {
  nav.classList.remove('open-menu');
  if (btn.innerHTML === '⚙') {
    btn.innerHTML = '×';
  } else {
    btn.innerHTML = '⚙';
  }
});


const left = document.getElementById('left');
const center = document.getElementById('center');
const right = document.getElementById('right');
const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');




