const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ## Задание 3

// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список `ul#gallery`.

// ```html
// <ul id="gallery"></ul>
// ```

const galleryList = document.querySelector('ul#gallery');

const createGallery = (images) => images.map(({url, alt}) => `<li><img src='${url}' alt='${alt}' width='500'></li>`);


galleryList.insertAdjacentHTML('afterbegin', createGallery(images).map(li => li).join(''))



// const createGallery = (images) => {
// 	return images.map(({url, alt}) => {
// 		const img = document.createElement('img');
// 		img.src = url;
// 		img.alt = alt;
// 		img.width = 500;

// 		const li = document.createElement('li');
// 		li.append(img);

// 		return li;
// 	});
// };

// createGallery(images);

// const makeLiGallery = images.map(li => li).join('');

// console.log(makeLiGallery);
// const printGallery = (img) => {
// 	return galleryList.insertAdjacentHTML('beforebegin', `<li>${img}</li>`);
// };

// printGallery(...createGallery(images));

// console.log(createGallery(images));

// galleryList.append(...createGallery(images));
// galleryList.insertAdjacentHTML('afterbegin', makeLiGallery);

// Используй массив объектов `images` для создания тегов `img` вложенных в `li`.
// Для создания разметки используй шаблонные строки и `insertAdjacentHTML()`.

// - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// - Добавь минимальное оформление галереи флексбоксами или гридами через
//   css-классы.

// ```js
// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];
// ```