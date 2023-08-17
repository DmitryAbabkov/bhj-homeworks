const form = document.querySelector('form'),
	input = document.querySelector('.tasks__input'),
	list = document.querySelector('.tasks__list');
let counterArr = localStorage.length;
let currentId = 0;

function generationContent(value, currentId) {
	list.insertAdjacentHTML('beforeend', `
    <div class="task" data-id="${currentId}">
    <div class="task__title">
        ${value}
    </div>
    <a href="#" class="task__remove">&times;</a>
</div>
`);
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (input.value != '') {
		generationContent(input.value, currentId);
		localStorage.setItem(`${currentId}`, `${input.value}`);
		++currentId;
	}
	form.reset();
});

let arr = [];

function generationTasks() {
	for (let i = 0; i < localStorage.length; i++) {
		let key = localStorage.key(i);
		arr.push(localStorage.getItem(key));
	}
	arr.reverse();
	arr.forEach(item => {
		generationContent(item, currentId);
		++currentId;
	});
}

list.addEventListener('click', (e) => {
	if (e.target.classList.contains('task__remove')) {
		const taskElement = e.target.closest('.task');
		const taskId = taskElement.getAttribute('data-id');
		taskElement.remove();
		localStorage.removeItem(taskId);
	}
});

document.addEventListener('DOMContentLoaded', generationTasks());