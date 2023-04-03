const clock = new Date();

let hour = clock.getHours();
let min = clock.getMinutes();
let sec = clock.getSeconds();

function logTime() {
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("#min_number").innerHTML = min;
  setInterval(logTime, 1000);
}

// setze eine 0 vor die Zahl wenn kleiner als 10
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
