let resWords;

class Game {
	constructor(container) {
		this.container = container;
		this.wordElement = container.querySelector(".word");
		this.winsElement = container.querySelector(".status__wins");
		this.lossElement = container.querySelector(".status__loss"),
			this.statusTimer = container.querySelector(".status__timer");

		this.reset();

		this.registerEvents();
	}

	reset() {
		this.setNewWord();
		this.winsElement.textContent = 0;
		this.lossElement.textContent = 0;
	}

	registerEvents() {
		let inputSymbol;
		let current = this;

		function characterCheck(event) {
			inputSymbol = event.key;
			if(event.code == "ShiftLeft" || event.code == "AltLeft") {
				return false;
			}
			if (current.currentSymbol.textContent == inputSymbol) {
				current.success();
			} else {
				current.fail();
			}
		}

		document.addEventListener("keydown", characterCheck);
	}
	timer() {
		let counter = resWords.length;
		this.statusTimer.textContent = counter;

		if (this.interval) {
			clearInterval(this.interval);
		}

		this.interval = setInterval(() => {
			if (counter > 0) {
				--counter;
				this.statusTimer.textContent = counter;
			} else {
				clearInterval(this.interval);
				if (this.fail()) {
					return;
				}
				this.setNewWord();
			}
		}, 1000);
	}

	success() {
		if (this.currentSymbol.classList.contains("symbol_current"))
			this.currentSymbol.classList.remove("symbol_current");
		this.currentSymbol.classList.add("symbol_correct");
		this.currentSymbol = this.currentSymbol.nextElementSibling;

		if (this.currentSymbol !== null) {
			this.currentSymbol.classList.add("symbol_current");
			return;
		}

		if (++this.winsElement.textContent === 10) {
			alert("Победа!");
			this.reset();
		}
		this.setNewWord();
	}

	fail() {
		if (++this.lossElement.textContent === 5) {
			alert("Вы проиграли!");
			this.reset();
		}
		this.setNewWord();
	}

	setNewWord() {
		const word = this.getWord();

		this.renderWord(word);
	}

	getWord() {
		const words = [
				"это bob",
				"это awesome",
				"это netology",
				"это hello",
				"это kitty",
				"это rock",
				"это youtube",
				"это popcorn",
				"это cinema",
				"love - это любовь",
				"я люблю javascript",
			],
			index = Math.floor(Math.random() * words.length);
		resWords = words[index];
		return resWords;
	}

	renderWord(word) {
		const html = [...word]
			.map(
				(s, i) =>
				`<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
			)
			.join("");
		this.wordElement.innerHTML = html;

		this.currentSymbol = this.wordElement.querySelector(".symbol_current");
		this.timer();
	}
}

new Game(document.getElementById("game"));