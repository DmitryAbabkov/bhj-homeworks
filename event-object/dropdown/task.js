const listLanguage = document.querySelector('.dropdown__list'),
    dropValue = document.querySelector('.dropdown__value'),
    listItem = document.querySelectorAll('.dropdown__item');

let arrItem = Array.from(listItem);

dropValue.addEventListener('click', () => {
        listLanguage.classList.toggle('dropdown__list_active');
});

arrItem.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        listLanguage.classList.remove('dropdown__list_active');
        dropValue.textContent = item.textContent;
    });
});
