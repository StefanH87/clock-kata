setInterval(displayTime, 1000);

const digitalPoints = document.querySelectorAll(".points");
const hourFinger = document.querySelector(".hour");
const minFinger = document.querySelector(".minute");
const secFinger = document.querySelector(".second");

function displayTime() {
  const clock = new Date();
  let sec = clock.getSeconds();
  let min = clock.getMinutes();
  let hour = clock.getHours();
  hour = checkTime(hour);
  min = checkTime(min);
  sec = checkTime(sec);
  //Text-wiedergeben bewegen----------------------------------------------
  document.getElementById("hour_number").innerHTML = hour;
  document.getElementById("min_number").innerHTML = min;
  document.getElementById("sec_number").innerHTML = sec;
  digitalPoints.forEach((element) => element.classList.toggle("hidden"));

  // Zeiger bewegen----------------------------------------------
  const angleHour = (hour * 360) / 12;
  const angleMinute = (min * 360) / 60;
  const angleSecond = (sec * 360) / 60;

  hourFinger.style.transform = `rotate(${angleHour}deg)`;
  minFinger.style.transform = `rotate(${angleMinute}deg)`;
  secFinger.style.transform = `rotate(${angleSecond}deg)`;

  // rotateClock(hour,min,sec)
}

displayTime();

// setze eine 0 vor die Zahl wenn kleiner als 10

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// rotateClock(hour,min,sec){
// const anglehour = hour * 360/12;
// const angleMinute = min * 360/60;
// const angleSecond = sec * 360/60;

// secFinger.style.transform = `rotate(${angleSecond}deg)`;

// }
