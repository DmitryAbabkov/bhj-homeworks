const fontSize = Array.from(document.querySelectorAll('.font-size')),
 activeClass = document.querySelector('.font-size_active'),
 book = document.querySelector('.book'),
 background = Array.from(document.querySelectorAll('.book__control_background .color')),
 color = Array.from(document.querySelectorAll('.book__control_color .color'));
let indexActive = fontSize.indexOf(activeClass);

function searchSize(currentSize) {
    let filteredItems = [];
    fontSize.forEach(item => {
        if(item.dataset.size != currentSize) {
            filteredItems.push(item);
        }
        filteredItems.forEach(item => {
            book.classList.remove(`book_fs-${item.dataset.size}`);
            const result = currentSize != undefined ? book.classList.add(`book_fs-${currentSize}`): ``;
            return result;
        });
    });
}

fontSize.forEach((item,i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        fontSize[indexActive].classList.remove('font-size_active');
        fontSize[i].classList.add('font-size_active');
        indexActive = i;
        let currentSize = item.dataset.size;
        searchSize(currentSize);
    });
});

   function searchColor(current, iteratedElement, color, addClass) {
    let filteredItems = [];
    iteratedElement.forEach(item => {
        book.classList.add(`${addClass}${current}`);
        item.classList.add('color_active');

        if(item.dataset[color] != current) {
            filteredItems.push(item);
        }
        filteredItems.forEach(item => {
			book.classList.remove(`${addClass}${item.dataset[color]}`);
            item.classList.remove('color_active');
		});
    });
   }

   background.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		let currentBg = item.dataset.bgColor;
		searchColor(currentBg, background, `bgColor`, `bg_color_`);
	});
});

color.forEach(item => {
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        let currentColor = item.dataset.textColor;
        searchColor(currentColor, color, `textColor`, `book_color-`);
    });
});