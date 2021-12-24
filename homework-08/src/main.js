// ## Задание

// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного
// изображения в модальном окне. Превью результата посмотри
// [по ссылке](https://take.ms/ZvBD0E).

// ![Превью](preview.jpg)

// Разбей задание на несколько подзадач:

// - Создание и рендер разметки по массиву данных `galleryItems` из `app.js` и
//   предоставленному шаблону.
import galleryItems from './app.js';
// console.log(galleryItems);

const refUlGallery = document.querySelector('ul.js-gallery');
const refLightbox = document.querySelector('div.lightbox');
const refLightboxImage = document.querySelector('.lightbox__image');
const refLightboxBtnClose = document.querySelector('button[data-action="close-lightbox"]');
const refLightboxOverlay = document.querySelector('div.lightbox__overlay');
let currentGalleryItem;

const gallery = galleryItems.map(galleryItem => {
	const {preview, original, description} = galleryItem;

	return `
	<li class="gallery__item">
	  <a
	    class="gallery__link"
	    href="${original}"
	  >
	    <img
	      class="gallery__image"
	      src="${preview}"
	      data-source="${original}"
	      alt="${description}"
	    />
	  </a>
	</li>
	`;
});

refUlGallery.insertAdjacentHTML('afterbegin', gallery.join(''));

// - Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого
//   изображения.
refUlGallery.addEventListener('click', onClickGalleryFoto);
refLightboxBtnClose.addEventListener('click', onCloseLightboxClickBtn);
refLightboxOverlay.addEventListener('click', onCloseLightboxClickOverlay);

function updateLightboxFoto(side) {
	const allGalleryItems = document.querySelectorAll('.gallery__item');
	const arrayGalleryItems = Array.from(allGalleryItems);
	const indexCurrentGalleryItem = arrayGalleryItems.indexOf(currentGalleryItem);
	let indexNextGalleryItem = 0;

	if(side === 'left') {
		indexNextGalleryItem = indexCurrentGalleryItem - 1;
	} else {
		indexNextGalleryItem = indexCurrentGalleryItem + 1;
	};

	if(indexNextGalleryItem > 0 && indexNextGalleryItem < allGalleryItems.length) {
		const getNextGalleryItem = allGalleryItems.item(indexNextGalleryItem);
		const getNextGalleryItemImage = getNextGalleryItem.querySelector('.gallery__image');
	
		createLightboxGalleryItem(getNextGalleryItemImage);
	};

};

function onClickLightboxToLeft(e) {
	const left = 'left';
	
	if(e.code === 'ArrowLeft') {
		updateLightboxFoto(left);
	};
};

function onClickLightboxToRight(e) {
	const right = 'right';

	if(e.code === 'ArrowRight') {
		updateLightboxFoto(right);
	};
};

function onCloseLightboxPressEsc(e) {
	if(e.code === 'Escape') {
		onCloseLightboxClickBtn();
	};
};

function onCloseLightboxClickOverlay(e) {
	if(event.target === event.currentTarget){
		onCloseLightboxClickBtn();
	};
};

function getCurrentGalleryItem(currentItem) {
	return currentItem;
};

function onClickGalleryFoto (e) {
	e.preventDefault();

	if(event.target !== event.currentTarget){
		createLightboxGalleryItem(event.target);
	};
};

function createLightboxGalleryItem(target) {
	refLightboxImage.src = target.dataset.source;
	refLightboxImage.alt = target.alt;

	refLightbox.classList.add('is-open');

	document.addEventListener('keydown', onCloseLightboxPressEsc);
	document.addEventListener('keydown', onClickLightboxToLeft);
	document.addEventListener('keydown', onClickLightboxToRight);

	currentGalleryItem = target.closest('.gallery__item');
}

function onCloseLightboxClickBtn() {
	refLightboxImage.src = '';
	refLightboxImage.alt = '';

	refLightbox.classList.remove('is-open');

	document.removeEventListener('keydown', onCloseLightboxPressEsc);
	document.removeEventListener('keydown', onClickLightboxToLeft);
	document.removeEventListener('keydown', onClickLightboxToRight);
};
// - Открытие модального окна по клику на элементе галереи.

// - Подмена значения атрибута `src` элемента `img.lightbox__image`.

// - Закрытие модального окна по клику на кнопку
//   `button[data-action="close-lightbox"]`.

// - Очистка значения атрибута `src` элемента `img.lightbox__image`. Это необходимо
//   для того, чтобы при следующем открытии модального окна, пока грузится
//   изображение, мы не видели предыдущее.

// ## Стартовые файлы

// - В папке [src](./src) ты найдешь стартовые файлы проекта с базовой разметкой и
//   готовыми стилями.
// - В файле `app.js` есть массив `galleryItems`, который содержит объекты с
//   информацией о изображениях: маленькое изображение, оригинальное и описание.

// ## Разметка элемента галереи

// Ссылка на оригинальное изображение должна храниться в data-атрибуте `source` на
// элементе `img`, и указываться в `href` ссылки (это необходимо для доступности).

// ```html
// <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>
// ```

// ## Дополнительно

// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой
// по работе с событиями.

// - Закрытие модального окна по клику на `div.lightbox__overlay`.
// - Закрытие модального окна по нажатию клавиши `ESC`.
// - Пролистывание изображений галереи в открытом модальном окне клавишами "влево"
//   и "вправо".