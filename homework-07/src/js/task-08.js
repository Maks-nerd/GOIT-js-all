// ## Задание 8 - дополнительное, выполнять не обязательно

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
// количество элементов в `input` и нажимает кнопку `Создать`, после чего
// рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
// очищается.

// Создай функцию `createBoxes(amount)`, которая принимает 1 параметр `amount` -
// число. Функция создает столько `div`, сколько указано в `amount` и добавляет их
// в `div#boxes`.

const divBoxes = document.querySelector('div#boxes');
const renderBtnBlocks = document.querySelector('#controls button[data-action="render"]');
const destroyBtnBlocks = document.querySelector('#controls button[data-action="destroy"]');
const numberInputBlocks = document.querySelector('#controls input');

renderBtnBlocks.addEventListener('click', onCheckNumberInputBlocks);
destroyBtnBlocks.addEventListener('click', destroyBoxes);

function onCheckNumberInputBlocks() {
	const amount = numberInputBlocks.value;
	createBoxes(amount);
};

function addStyleDiv({height, width, div}) {
	let red = gerRandomNumberOfColor(255);
	let green = gerRandomNumberOfColor(255);
	let blue = gerRandomNumberOfColor(255);

	div.style.width = width + 'px';
	div.style.height = height + 'px';
	div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	
}

function createBoxes(amount) {
	destroyBoxes();

	let arrayBlocks = [];
	let width = 30;
	let height = 30;

	for(let i = 0; i < amount; i += 1) {
		const div = document.createElement('div');
		const parametrs = {width, height, div};

		addStyleDiv(parametrs);
		arrayBlocks.push(div);

		width += 10;
		height += 10;
	};

	return divBoxes.append(...arrayBlocks);
};

function gerRandomNumberOfColor(max) {
 return Math.floor(Math.random() * Math.floor(max));
};

function destroyBoxes() {
	divBoxes.innerHTML = '';
	numberInputBlocks.value = '';
};

// Каждый созданный div:

// - Имеет случайный rgb цвет фона
// - Размеры самого первого div - 30px на 30px
// - Каждый следующий div после первого, должен быть шире и выше предыдущего на
//   10px

// Создай функцию `destroyBoxes()`, которая очищает `div#boxes`.

// ```html
// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>
// ```