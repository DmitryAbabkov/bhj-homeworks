const holes = document.querySelectorAll(".hole"),
	dead = document.querySelector("#dead"),
	lost = document.querySelector("#lost");

function checkWinner() {
	holes.forEach((item) => {
		item.addEventListener("click", function() {
			if (item.classList.contains("hole_has-mole")) {
				if (dead.textContent == 10) {
					alert("Победа");
					location.reload();
				} else {
					dead.textContent = +dead.textContent + 1;
				}
			} else {
				if (lost.textContent == 5) {
					alert("Поражение!");
					location.reload();
				} else {
					lost.textContent = +lost.textContent + 1;
				}
			}
		});
	});
}
checkWinner();