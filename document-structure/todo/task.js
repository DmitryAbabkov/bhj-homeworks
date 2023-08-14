const form = document.querySelector('form'),
    input = document.querySelector('.tasks__input'),
    list = document.querySelector('.tasks__list');

    let counter = 0;

function generationContent(value) {
    list.insertAdjacentHTML('beforeend', `
    <div class="task">
    <div class="task__title">
        ${value}
    </div>
    <a href="#" class="task__remove">&times;</a>
</div>
`);
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value != '') {
        generationContent(input.value);
        ++counter;   
        localStorage.setItem(`${arr.length+1}`, `${input.value}`); 
           
            // localStorage.setItem(`${++counter}`, `${input.value}`);
    }

console.log(counter);
    form.reset();
});



list.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
});

let arr =[];
function generationTasks() {
for(let i=0; i<localStorage.length; i++) {
  let key = localStorage.key(i);
  arr.push(localStorage.getItem(key));
}
arr.reverse();
arr.forEach(item => {
    generationContent(item);
});

}

document.addEventListener('DOMContentLoaded', generationTasks());


// Осталось победить: удаление и перезапись в localStorage

// localStorage.clear();