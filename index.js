console.log(window);
console.log(document);
let count = 10;
const intervalId = setInterval(() => {
  document.getElementById("count").innerHTML = count;
  count--;
  if (count < 0) {
    document.getElementById("count").innerHTML = "HAPPIEST BIRTHDAYYY";
    clearInterval(intervalId);
  }
}, 1000);