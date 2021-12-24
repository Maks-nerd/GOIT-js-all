// # Таймер обратного отсчета

// Создай плагин настраиваемого таймера, который ведет обратный отсчет до
// предварительно определенной даты. Такой плагин может использоваться в блогах и
// интернет-магазинах, страницах регистрации событий, во время технического
// обслуживания и т. д.

// Плагин это класс `CountdownTimer`, экземпляр которого создает новый таймер с
// настройками.

// ```js
class CountdownTimer{

	constructor({selector, targetDate}) {
		this.selector = selector;
		this.targetDate = targetDate;

		this.initTimer();
	}

	initTimer() {
		const currentDate = new Date();
		let timeLeft = this.targetDate - currentDate;
	
		setInterval(() => {
			timeLeft -= 1000;
	
			this.getTime(timeLeft);
		}, 1000);
	}

	getRefs() {
		return {
			days: document.querySelector(this.selector + ' [data-value="days"]'),
			hours: document.querySelector(this.selector + ' [data-value="hours"]'),
			mins: document.querySelector(this.selector + ' [data-value="mins"]'),
			secs: document.querySelector(this.selector + ' [data-value="secs"]'),
		};
	}

	getTime(time) {
		const {days, hours, mins, secs} = this.getRefs();

		days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
		hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
		secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
	
		return {days, hours, mins, secs};
	}

	pad(value) {
		return String(value).padStart(2, 0);
	}

};

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 1, 2022'),
});

new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jul 2, 2022'),
});

// console.log(timer);

// function startTimer() {
// 	const targetDate = new Date('Jul 17, 2019');
// 	const currentDate = new Date();
// 	let timeLeft = currentDate - targetDate;

// 	setInterval(() => {
// 		timeLeft -= 1000;

// 		console.log(getTime(timeLeft));
// 	}, 1000);
// };

// startTimer();

// const targetDate = new Date('Jul 17, 2019');
// const currentDate = new Date();
// console.log(currentDate - targetDate);

// function getTime(time) {
// 	const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
// 	const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
// 	const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
// 	const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

// 	return {days, hours, mins, secs};
// };

// function pad(value) {
// 	return String(value).padStart(2, 0);
// };
// ```

// Для подсчета значений используй следующие готовые формулы, где `time` - разница
// между `targetDate` и текущей датой.

// ```js
// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
// ```
