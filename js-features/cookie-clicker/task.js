let cookie = document.querySelector(".clicker__cookie"),
	cookieSpeed = document.querySelector('#clicker__speed'),
	counter = document.querySelector("#clicker__counter");


cookie.addEventListener("click", function() {
	counter.textContent = +counter.textContent + 1;
	if (counter.textContent % 2 == 0) {
		cookie.width = 200;
	} else {
		cookie.width = 300;
	}
	return;
});