// light
const greenLight = document.getElementById("green-light");
const yellowLight = document.getElementById("yellow-light");
const redLight = document.getElementById("red-light");

// timer
const timer = document.getElementById("timer");

// turn off all the lights
greenLight.classList.add("green-off");
yellowLight.classList.add("yellow-off");
redLight.classList.add("red-off");

timerGreen();

// turn on the green light and initialize timer from green light
function timerGreen(){
  updateTimer(15);

  redLight.classList.remove("red-on");
  redLight.classList.add("red-off");

  greenLight.classList.remove("green-off");
  greenLight.classList.add("green-on");

  setTimeout(() => { timerYellow() }, 16 * 1000);
}

// turn on the yellow light and initialize timer from yellow light
function timerYellow(){
  updateTimer(5);

  greenLight.classList.remove("green-on");
  greenLight.classList.add("green-off");

  yellowLight.classList.remove("yellow-off");
  yellowLight.classList.add("yellow-on");

  setTimeout(() => { timerRed() }, 6 * 1000);
}

// turn on the red light and initialize timer from red light
function timerRed(){
  updateTimer(15);

  yellowLight.classList.remove("yellow-on");
  yellowLight.classList.add("yellow-off");

  redLight.classList.remove("red-off");
  redLight.classList.add("red-on");

  setTimeout(() => { timerGreen() }, 16 * 1000);
}

// update timer
function updateTimer(time){
  timer.innerHTML = (time < 10) ? "0" + time : time;
  time--;

  let interval = setInterval(() => {
    timer.innerHTML = (time < 10) ? "0" + time : time;
    time--;

    if(time < 0){ clearInterval(interval); }
  }, 1000);
}