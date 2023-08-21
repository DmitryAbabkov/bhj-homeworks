const loader = document.getElementById('loader'),
	items = document.querySelector('#items');
let arrToName = [];
let arrToValue = [];
let count = 0;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')

generationToLocalStorage();

xhr.onreadystatechange = function() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status >= 200 && xhr.status < 300) {
			onloadXhr();
		}
	}
};

xhr.send();

function onloadXhr() {
	const data = JSON.parse(xhr.response);
	let objToMoney = data.response.Valute;
	loader.classList.remove('loader_active');
	for (let key in objToMoney) {
		arrToName.push(objToMoney[key].CharCode);
		arrToValue.push(objToMoney[key].Value)
		localStorage.setItem('name', JSON.stringify(arrToName));
		localStorage.setItem('value', JSON.stringify(arrToValue));
	}
	generationCurrency(arrToName, arrToValue);
}

function generationCurrency(arrToName, arrToValue) {
	if (arrToName != null) {
		for (let i = 0; i < arrToName.length; i++) {
			let item = `<div class="item">
        <div class="item__code">${arrToName[i]}</div>
                    <div class="item__value">${arrToValue[i]}</div>
                    <div class="item__currency">руб.</div>
                    </div>`;
			items.insertAdjacentHTML('beforeend', item);
		}
	}
}

function generationToLocalStorage() {
	if (localStorage.getItem('name')) {
		loader.classList.remove('loader_active');
		let arrToLocalStorageName = JSON.parse(localStorage.getItem('name'));
		let arrToLocalStorageValue = JSON.parse(localStorage.getItem('value'));
		items.innerHTML = '';
		generationCurrency(arrToLocalStorageName, arrToLocalStorageValue);
	}
}