const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

function updateTimer() {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  hoursElement.textContent = padZero(hours);
  minutesElement.textContent = padZero(minutes);
  secondsElement.textContent = padZero(seconds);
}

function padZero(value) {
  return value.toString().padStart(2, '0');
}

function startTimer() {
  interval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
}

function pauseTimer() {
  clearInterval(interval);
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function resetTimer() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  hoursElement.textContent = '00';
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
  startButton.disabled = false;
  pauseButton.disabled = true;
  resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);