const tabs = Array.from(document.querySelectorAll(".tab")),
	tabContent = Array.from(document.querySelectorAll(".tab__content"));

function hideTab() {
	tabs.forEach((tab) => {
		tab.classList.remove("tab_active");
	});
}

function showContent(i) {
	tabContent.forEach((item) => {
		item.classList.remove("tab__content_active");
	});
	tabContent[i].classList.add("tab__content_active");
}

tabs.forEach((item, i) => {
	item.addEventListener("click", () => {
		hideTab();
		item.classList.add("tab_active");
		showContent(i);
	});
});

let counter = 0;

function keyRemoveActive() {
	tabs[counter].classList.remove("tab_active");
	tabContent[counter].classList.remove("tab__content_active");
}

function keyAddActive() {
	tabs[counter].classList.add("tab_active");
	tabContent[counter].classList.add("tab__content_active");
}

document.addEventListener("keydown", (e) => {
	if (e.code === "KeyW") {
		if (counter < tabs.length - 1) {
			keyRemoveActive();
			++counter;
			keyAddActive();
		}
		return counter;
	}

	if (e.code === "KeyS") {
		if (counter != 0) {
			keyRemoveActive();
			--counter;
			keyAddActive();
		}
	}
});