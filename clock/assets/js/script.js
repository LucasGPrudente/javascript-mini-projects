const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"];
const daysOfTheWeek = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

showTime();
showDate();

// get time from Date object and update window digits
function showTime() {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  document.getElementById('hours').innerHTML = (hour < 10) ? "0" + hour : hour;
  document.getElementById('minutes').innerHTML = (minute < 10) ? "0" + minute : minute;
  document.getElementById('seconds').innerHTML = (second < 10) ? "0" + second : second;
}

// get date from Date object and update the date text in the window
function showDate() {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayOfWeek = date.getDay();

  document.getElementById('date').innerHTML = daysOfTheWeek[dayOfWeek] + ", " + day + " " + months[month] + " " + year;
}

// updates the time every 1 second
setInterval(() => {
  showTime()
}, 1000);

// updates the date every 1 minute
setInterval(() => {
  showDate()
}, 60 * 1000);