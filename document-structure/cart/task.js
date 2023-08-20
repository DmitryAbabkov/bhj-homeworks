const counterRemove = document.querySelectorAll('.product__quantity-control_dec'),
	counterAdd = document.querySelectorAll('.product__quantity-control_inc'),
	valueCounter = document.querySelectorAll('.product__quantity-value'),
	cart = document.querySelector('.cart__products'),
	cartAdd = document.querySelectorAll('.product__add'),
	image = document.querySelectorAll('.product__image'),
	product = document.querySelectorAll('.product'),
	divCart = document.querySelector('.cart'),
	cartProducts = Array.from(document.querySelector('.cart__products'));
let arrVendorCode = [];
let objectToLocal = [];

divCart.style.display = 'none';

counterAdd.forEach((item, index) => {
	item.addEventListener('click', () => {
		const currentValue = +valueCounter[index].textContent;
		valueCounter[index].textContent = currentValue + 1;
	});
});

counterRemove.forEach((item, index) => {
	item.addEventListener('click', () => {
		const currentValue = +valueCounter[index].textContent;
		if (currentValue > 1) {
			valueCounter[index].textContent = currentValue - 1;
		}
	});
});

function generationCart(srcImage, count, data) {
	divCart.style.display = 'block';
	const newProduct = document.createElement('div');
	newProduct.classList.add('cart__product');
	newProduct.setAttribute('data-id', data);
	cart.appendChild(newProduct);
	const productInfo = `
    <div class="cart__product-remove">❌</div>
    <img class="cart__product-image" src="${srcImage}">
    <div class="cart__product-count">${count}</div>`;
	newProduct.insertAdjacentHTML('beforeend', productInfo);
	arrVendorCode.push(data);
	// updateToLocalStorage(srcImage, count, data, objectToLocal);
}

cartAdd.forEach((item, i) => {
	item.addEventListener('click', () => {
		if (arrVendorCode.includes(product[i].dataset.id)) {
			const currentValue = +valueCounter[i].textContent;
			const existingValue = +document.querySelector(`[data-id="${product[i].dataset.id}"] .cart__product-count`).textContent;
			document.querySelector(`[data-id="${product[i].dataset.id}"] .cart__product-count`).textContent = existingValue + currentValue;
		} else {
			generationCart(image[i].src, valueCounter[i].textContent, product[i].dataset.id);
			setupRemoveListeners();
		}
	});
});
function setupRemoveListeners() {
	const removeButtons = document.querySelectorAll('.cart__product-remove');
	removeButtons.forEach((button) => {
		button.addEventListener('click', removeCartItem);
	});
}

function removeCartItem() {
	const cartProduct = this.closest('.cart__product');
	const dataId = cartProduct.getAttribute('data-id');
	const index = arrVendorCode.indexOf(dataId);
	if (index !== -1) {
		arrVendorCode.splice(index, 1);
	}
	cartProduct.remove();
	// localStorage.removeItem(cartProduct.getAttribute('data-id'));
}

setupRemoveListeners();

// function updateToLocalStorage(srcImage, count, data, objectToLocal) {
// 	objectToLocal = [srcImage, count];
// 	localStorage.setItem(data, objectToLocal);
// }

// function renderingProduct() {
// 	if (localStorage.length > 0) {
// 		for(let i = 1; i <= localStorage.length+1; i++) {
// 			if(localStorage.getItem(i) != null) {
// 			let res = localStorage.getItem(i).split(',');
// 			generationCart(res[0], res[1], i);
// 			}
// 		}
// 	} 
// }

// document.addEventListener('DOMContentLoaded', renderingProduct());

// function animationForCart() {
// 	let imageProduct = [];
// 	image.forEach(item => {
// 		imageProduct.push(item.getBoundingClientRect().y);
// 	})
// 	let cartImageArr = [];
// 	const cartImage = document.querySelectorAll('.cart__product-image');
// 	cartImage.forEach(item => {
// 		cartImageArr.push(item.getBoundingClientRect().y);
// 	});

// 	let diggerent = 665;
	
// 	console.log(imageProduct);
// 	console.log(cartImageArr);
// }
// animationForCart();

// localStorage.clear();

// setupRemoveListeners();