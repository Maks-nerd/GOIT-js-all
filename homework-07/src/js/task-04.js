// ## Задание 4

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValue = document.querySelector('#value');
// let counterValuetextContent = Number(document.querySelector('#value').textContent);
let counterValuetextContent = counterValue.textContent = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const increment = () => {
	counterValuetextContent += 1;
	return counterValue.textContent = counterValuetextContent;
};
const decrement = () => {
	counterValuetextContent -= 1;
	return counterValue.textContent = counterValuetextContent;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

// ```html
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// ```