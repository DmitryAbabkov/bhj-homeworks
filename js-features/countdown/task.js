let timer = document.querySelector("#timer"),
	getHourse = +timer.textContent.slice(0, 2),
	getMinutes = +timer.textContent.slice(3, 5),
	getSeconds = +timer.textContent.slice(6, 8);

// Base Task
// let changeTimer = setInterval(() => {
//   if (timer.textContent > 0) {
//     timer.textContent -= 1;
//   } else {
//     clearInterval(changeTimer);
//     alert("Вы победили в конкурсе!");
//   }
// }, 1000);


let changeTimer = setInterval(() => {
	if (getSeconds > 0) {
		getSeconds -= 1;

	} else if (getMinutes > 0 && getSeconds == 0) {
		getMinutes -= 1;
		getSeconds = 59;
	} else if (getHourse > 0 && getMinutes == 0) {
		getHourse -= 1;
		getMinutes = 59;
		getSeconds = 59;
	}
	let formatHourse = getHourse < 10 ? `0${getHourse}` : getHourse,
		formatMinutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes,
		formatSeconds = getSeconds < 10 ? `0${getSeconds}` : getSeconds;

	timer.textContent = `${formatHourse}:${formatMinutes}:${formatSeconds}`;
}, 1000);