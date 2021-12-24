// ## Задание 5

// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
// input), подставляет его текущее значение в `span#name-output`. Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.

const inputName = document.querySelector('input#name-input');
const spanName = document.querySelector('span#name-output');

inputName.addEventListener('input', onChangeInputName);

function onChangeInputName() {
	return spanName.textContent = (inputName.value === '') ? 'незнакомец' : inputName.value;
};

// ```html
// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
// ```