// ## Задание 1

// В HTML есть список категорий `ul#categories`.

// ```html
// <ul id="categories">
//   <li class="item">
//     <h2>Животные</h2>

//     <ul>
//       <li>Кот</li>
//       <li>Хомяк</li>
//       <li>Лошадь</li>
//       <li>Попугай</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Продукты</h2>

//     <ul>
//       <li>Хлеб</li>
//       <li>Петрушка</li>
//       <li>Творог</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Технологии</h2>

//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node</li>
//     </ul>
//   </li>
// </ul>
// ```

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
// элементов `li.item`. Получится `'В списке 3 категории.'`.

const countCategories = document.querySelectorAll('li.item').length;
const categories = document.querySelectorAll('li.item');

console.log(`В списке ${countCategories} категории.`);

// Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
// консоль текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов `li`).

const arrayCategories = Object.values(categories);

for (const category of arrayCategories) {
	const h2 = category.querySelector('h2').textContent;
	const countAllLiintoCategory = category.querySelectorAll('li').length;

	console.log(`Категория - ${h2}`);
	console.log(`Количество элементов - ${countAllLiintoCategory}`);
}

// for (const index in categories) {
// 	const category = categories[index];
// 	const h2 = category.querySelector('h2').textContent;
// 	const countAllLiintoCategory = category.querySelectorAll('li').length;

// 	console.log(`Категория - ${h2}`);
// 	console.log(`Количество элементов - ${countAllLiintoCategory}`);
// }


// categories.forEach(category => {
// 	const h2 = category.querySelector('h2').textContent;
// 	const countAllLiintoCategory = category.querySelectorAll('li').length;

// 	console.log(`Категория - ${h2}`);
// 	console.log(`Количество элементов - ${countAllLiintoCategory}`);
// });


// Например для первой категории получится:

// - Категория: Животные
// - Количество элементов: 4