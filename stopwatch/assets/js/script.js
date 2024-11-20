// button
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");

// span
let hourText = document.getElementById("hour-digits");
let minuteText = document.getElementById("minute-digits");
let secondText = document.getElementById("second-digits");
let millisecondText = document.getElementById("millisecond-digits");

// interval
let interval;

reset();

// stop interval and reset digits on window
function reset() {
  clearInterval(interval);

  hourText.innerText = "00";
  minuteText.innerText = "00";
  secondText.innerText = "00";
  millisecondText.innerText = "00";

  buttonStart.style.display = "grid";
  buttonStop.style.display = "none";
}

// create interval and initialize the stopwatch
function start() {
  interval = setInterval(() => { countMilliseconds() }, 10);

  buttonStart.style.display = "none";
  buttonStop.style.display = "grid";
}

// stop stopwatch
function stop() {
  clearInterval(interval);

  buttonStart.style.display = "grid";
  buttonStop.style.display = "none";
}

// counts milliseconds. When reaching 99, millisecond == 0 and call countSeconds()
function countMilliseconds() {
  let millisecond = parseInt(millisecondText.innerText);

  if(millisecond == 99){
    millisecondText.innerText = "00";
    countSeconds();
    return;
  }

  millisecond++;

  millisecondText.innerText = (millisecond < 10) ? "0" + millisecond : millisecond;
}

// counts seconds. When reaching 59, second == 0 and call countMinutes()
function countSeconds() {
  let second = parseInt(secondText.innerText);

  if(second == 59){
    secondText.innerText = "00";
    countMinutes();
    return;
  }

  second++;

  secondText.innerText = (second < 10) ? "0" + second : second;
}

// counts minutes. When reaching 59, minute == 0 and call countHours()
function countMinutes() {
  let minute = parseInt(minuteText.innerText);

  if(minute == 59){
    minuteText.innerText = "00";
    countHours();
    return;
  }

  minute++;

  minuteText.innerText = (minute < 10) ? "0" + minute : minute;
}

// counts hours. When reaching 99, reset the stopwatch
function countHours() {
  let hour = parseInt(hourText.innerText);

  if(hour == 99){
    alert("The time limit has been reached, the stopwatch has been reset.");
    reset();
    return;
  }

  hour++;

  hourText.innerText = (hour < 10) ? "0" + hour : hour;
}