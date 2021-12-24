// ## Задание 7

// Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
// (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
// `font-size`. В результате при перетаскивании ползунка будет меняться размер
// текста.

const inputFontSizeControl = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

inputFontSizeControl.addEventListener('input', onChangeFontSizeSpanText);


function onChangeFontSizeSpanText() {
	return spanText.style.fontSize = inputFontSizeControl.value + 'px';
};

// ```html
// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
// ```