const form = document.querySelector('#signin__form'),
	authorizationInterface = document.querySelector('.signin');
    welcomInterface = document.querySelector('.welcome'),
	id = document.getElementById('user_id'),
	info = document.querySelector('.card__info'),
	exit = document.querySelector('.card__exit');

function login(user) {
	authorizationInterface.classList.remove('signin_active');
	id.textContent = user;
	welcomInterface.classList.add('welcome_active');
	info.textContent = '';
	exit.style.cssText = `display: block`;
}

function checkStatus(status, user) {
	if (status == true) {
		login(user);
		localStorage.setItem('id', user);
	} else {
		info.textContent = 'Неверный логин/пароль';
	}
	form.reset();
}

function checkUserToLocalStorage() {
	if (localStorage.getItem('id')) {
		login(localStorage.getItem('id'));
	}
}

function deauthorization() {
	welcomInterface.classList.remove('welcome_active');
	authorizationInterface.classList.add('signin_active');
	exit.style.cssText = `display: none`;
	localStorage.removeItem('id');
}

checkUserToLocalStorage();

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	try {
		let response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
			method: 'POST',
			body: new FormData(form)
		});

		let result = await response.json();

		checkStatus(result.success, result.user_id);

	} catch (error) {
		console.error('An error occurred:', error);
	}
});

exit.addEventListener('click', () => {
	deauthorization();
})