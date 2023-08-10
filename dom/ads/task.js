const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let attributeColor = [],
attributeSpeed = [];

function getColor() {
	rotator.forEach((item) => {
		attributeColor.push(item.getAttribute('data-color'));
	});
}

function getTime() {
	rotator.forEach((item) => {
		attributeSpeed.push(item.getAttribute('data-speed'));
	});
}
getTime();
getColor();

rotator.forEach((item, i) => {
	item.style.cssText = `color: ${attributeColor[i]}`;

	let counter = 0;

	setInterval(() => {
		if (counter <= rotator.length) {
			rotator[counter].classList.remove('rotator__case_active');

			counter = (counter + 1) % rotator.length;
			rotator[counter].classList.add('rotator__case_active');

		}
	}, attributeSpeed[counter]);
});