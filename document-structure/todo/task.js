const form = document.querySelector('form'),
	input = document.querySelector('.tasks__input'),
	list = document.querySelector('.tasks__list');
let counterArr = localStorage.length;
let currentId = 0;
let arrToLocalSorage = [];

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
	if (input.value != false ) {
		let stringValue = input.value;
		stringValue = stringValue.trim();
		console.log(stringValue);
		generationContent(stringValue, currentId);
		arrToLocalSorage.push(stringValue);
		localStorage.setItem('tasks', arrToLocalSorage);
		++currentId;
	}
	form.reset();
});

function generationTasks() {
	if(localStorage.length > 0){
		arrToLocalSorage = localStorage.getItem('tasks').split(',');
	arrToLocalSorage.forEach(item => {
		generationContent(item, currentId);
		currentId++;
	})}
}

list.addEventListener('click', (e) => {
	if (e.target.classList.contains('task__remove')) {
		const taskElement = e.target.closest('.task');
		const taskId = taskElement.getAttribute('data-id');
		taskElement.remove();
		const storedTasks = localStorage.getItem('tasks');
		if (storedTasks) {
			const tasksArray = storedTasks.split(',');
			tasksArray.splice(taskId, 1);
			localStorage.setItem('tasks', tasksArray.join(','));
		}
	}
});

document.addEventListener('DOMContentLoaded', generationTasks());

// localStorage.clear();