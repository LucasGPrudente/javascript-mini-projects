const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"];
const daysOfTheWeek = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

showTime();
showDate();

// Get time from Date object and update window digits
function showTime() {
  let date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  document.getElementById('hours').innerHTML = (hour < 10) ? "0" + hour : hour;
  document.getElementById('minutes').innerHTML = (minute < 10) ? "0" + minute : minute;
  document.getElementById('seconds').innerHTML = (second < 10) ? "0" + second : second;
}

// Get date from Date object and update the date text in the window
function showDate() {
  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let dayOfWeek = date.getDay();

  document.getElementById('date').innerHTML = daysOfTheWeek[dayOfWeek] + ", " + day + " " + months[month] + " " + year;
}

// Update time every 1 second
setInterval(() => {
  showTime()
}, 1000);

// Update date every 1 minute
setInterval(() => {
  showDate()
}, 60 * 1000);