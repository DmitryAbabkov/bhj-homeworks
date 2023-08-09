const fontSize = Array.from(document.querySelectorAll('.font-size')),
 activeClass = document.querySelector('.font-size_active'),
 book = document.querySelector('.book'),
 background = Array.from(document.querySelectorAll('.book__control_background .color')),
 color = Array.from(document.querySelectorAll('.book__control_color .color'));
let indexActive = fontSize.indexOf(activeClass);

fontSize.forEach((item,i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        fontSize[indexActive].classList.remove('font-size_active');
        fontSize[i].classList.add('font-size_active');
        indexActive = i;
        
        if(item.dataset.size === 'small') {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } 
        else if (item.dataset.size === 'big') {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }
    });
});

function searchRemoveBg(current, arr) {
    background.forEach(item => {
        if(item.dataset.bgColor != current) {
            arr.push(item);
        }
    });
   }

   function searchRemoveColor(current, arr) {
    color.forEach(item => {
        if(item.dataset.textColor != current) {
            arr.push(item);
        }
    });
   }
// Вот здесь я преисполнился и написал, вроде как, самый умный код на диком западе

   background.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		let currentBg = item.dataset.bgColor;
		book.classList.add(`bg_color_${currentBg}`);
        item.classList.add(`color_active`);
		let arr = [];
		searchRemoveBg(currentBg, arr);
		arr.forEach(item => {
			book.classList.remove(`bg_color_${item.dataset.bgColor}`);
            item.classList.remove('color_active');
		});
	});
});
// Не понял, как здесь можно избежать дублирования

color.forEach(item => {
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        let currentColor = item.dataset.textColor;
        book.classList.add(`book_color-${currentColor}`);
        item.classList.add('color_active');
        let arr = [];
        searchRemoveColor(currentColor, arr, color);
        arr.forEach(item => {
			book.classList.remove(`book_color-${item.dataset.textColor}`);
            item.classList.remove('color_active');
		});
        
    });
});