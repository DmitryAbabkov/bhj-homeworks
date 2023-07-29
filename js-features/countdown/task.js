let timer = document.querySelector("#timer");

let changeTimer = setInterval(() => {
  if (timer.textContent > 0) {
    timer.textContent -= 1;
  } else {
    clearInterval(changeTimer);
    alert("Вы победили в конкурсе!");
  }
}, 1000);
