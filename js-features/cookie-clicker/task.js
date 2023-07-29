let cookie = document.querySelector(".clicker__cookie"),
  counter = document.querySelector("#clicker__counter");
//   currentDate = new Date(),
//   currentMinutes = currentDate.getHours(),
//   currentSeconds = currentDate.getSeconds(),
//   result = `${currentMinutes}:${currentSeconds}`;

// let arr = [];

cookie.addEventListener("click", function () {
  counter.textContent = +counter.textContent + 1;
  if (counter.textContent % 2 == 0) {
    cookie.width = 200;
  } else {
    cookie.width = 300;
  }
});
