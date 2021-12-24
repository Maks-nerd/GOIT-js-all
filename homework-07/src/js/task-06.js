// ## Задание 6

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

const input = document.querySelector('input');
const dataLength = input.dataset.length;

input.addEventListener('change', onCheckCountInput);

function onCheckCountInput() {
	if(input.value.length === 0) {
		input.classList.remove('valid', 'invalid');
	} else if(input.value.length >= dataLength) {
		input.classList.add('invalid');
		input.classList.remove('valid');
	} else {
		input.classList.add('valid');
		input.classList.remove('invalid');
	}
};
// ```html
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// ```

// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.

// ```css
// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// ```