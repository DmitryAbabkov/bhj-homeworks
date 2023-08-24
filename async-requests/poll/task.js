const questions = document.getElementById('poll__title'),
	poll = document.querySelector('div .poll__answers');

let xhr = new XMLHttpRequest();
xhr.open("GET", 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.onreadystatechange = function() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status >= 200 && xhr.status < 300) {
			xhrOnload();
		}
	}
};
xhr.send();

function xhrOnload() {
	let res = JSON.parse(xhr.response);
	const id = res.id;
	questions.innerHTML = res.data.title;
	let arrQuestions = res.data.answers;
	arrQuestions.forEach((item) => {
		let str = `<button class="poll__answer">${item}</button>`;
		poll.insertAdjacentHTML('beforeend', str);
	});
	clickToButton(id);
}

function clickToButton(id) {
	const btn = document.querySelectorAll('.poll__answer');
	btn.forEach((item, i) => {
		item.addEventListener('click', () => {
			alert('Спасибо, ваш голос засчитан!');
			const xhrPost = new XMLHttpRequest;
			xhrPost.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
			xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhrPost.onreadystatechange = function() {
				if (xhrPost.readyState === XMLHttpRequest.DONE) {
					if (xhrPost.status >= 200 && xhrPost.status < 300) {
						const resPost = JSON.parse(xhrPost.response);
						renderResult(resPost);

					}
				}
			};
			xhrPost.send(`vote=${id}&answer=${i}`);
		})
	})
}

function renderResult(resPost) {
	poll.innerHTML = '';
	resPost.stat.forEach(item => {
		let strResult = `<div>${item.answer} - ${item.votes}</div>`;
		poll.insertAdjacentHTML('beforeend', strResult);
	})
}