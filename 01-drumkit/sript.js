function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSound));
window.addEventListener('keydown', playSound);


const bpmAtual = document.querySelector('.bpm-atual');
const slider = document.querySelector('.slider');
const rangeBtnDiminuir = document.querySelector('.range-btn-diminuir');
const rangeBtnAumentar = document.querySelector('.range-btn-aumentar');
const compassoBtnDiminuir = document.querySelector('.compasso-btn-diminuir');
const compassoBtnAumentar = document.querySelector('.compasso-btn-aumentar');
const compassoDisplay = document.querySelector('.compasso-display');
const startBtn = document.querySelector('.start-btn');

let bpm = 120;
let compasso = 4;
slider.value = bpm;

rangeBtnDiminuir.addEventListener('click', () => {
  if(bpm <= 40){return};
  bpm--;
  bpmAtual.textContent = bpm;
  slider.value = bpm;
});

rangeBtnAumentar.addEventListener('click', () => {
  if(bpm >=180){return};
  bpm++;
  bpmAtual.textContent = bpm;
  slider.value = bpm;
});

slider.addEventListener('input', () =>{
  bpm = slider.value;
  bpmAtual.textContent = bpm;
  slider.value = bpm;
});

compassoBtnDiminuir.addEventListener('click', () => {
  if(compasso <= 2){return};
  compasso--;
  compassoDisplay.textContent = compasso;
});

compassoBtnAumentar.addEventListener('click', () => {
  if(compasso >= 12){return};
  compasso++;
  compassoDisplay.textContent = compasso;
});