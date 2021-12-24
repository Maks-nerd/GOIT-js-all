import menuItemTpl from './templates/menu_item.hbs';
import menuItems from './menu.json';

const arrayMenuItems = menuItems.map(menuItemTpl).join('');
const menuRef = document.querySelector('ul.js-menu');

menuRef.insertAdjacentHTML('afterbegin', arrayMenuItems);

// ## Тема

// Добавь функционал изменения темы при нажатии (событие `change`) на чекбокс
// `#theme-switch-toggle` в тулбаре.

// - По умолчанию тема светлая.
// - При изменении темы, необходимо добавлять на элемент `body` класс `light-theme`
//   или `dark-theme`.
// - Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения
//   темы используй `localStorage`.
// - Если при загрузке страницы тема тёмная, не забудь поставить свойство `checked`
//   у чекбокса `#theme-switch-toggle` в `true`, чтобы ползунок сдвинулся в
//   правильное положение.

// Для удобства хранения списка тем используй такое перечисление.

// ```js
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxChangeTheme = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

if(localStorage.getItem('theme') === Theme.DARK){
	checkboxChangeTheme.checked = true;
}
body.classList.add(localStorage.getItem('theme'));

checkboxChangeTheme.addEventListener('change', onChangeCheckboxTheme);

function onChangeCheckboxTheme() {
	const {LIGHT, DARK} = Theme;

	if(body.classList.contains(DARK)){
		body.classList.remove(DARK);
		body.classList.add(LIGHT);

		localStorage.setItem('theme', LIGHT);
	} else {
		body.classList.remove(LIGHT);
		body.classList.add(DARK);

		localStorage.setItem('theme', DARK);
	}
};

