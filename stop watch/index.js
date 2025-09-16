let secondsElapsed = 0;
let interval = null;

const time = document.getElementById("time");

function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;

  // Format as MM:SS
  const formattedTime = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  time.innerHTML = formattedTime;
}

function timer() {
  secondsElapsed++;
  setTime();
}

function startClock() {
  if (!interval) { // prevent multiple intervals
    interval = setInterval(timer, 1000);
  }
}

function stopClock() {
  clearInterval(interval);
  interval = null;
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}
