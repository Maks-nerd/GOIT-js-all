const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// ## Задание 2

// В HTML есть пустой список `ul#ingredients`.

// ```html
// <ul id="ingredients"></ul>
// ```

// В JS есть массив строк.

// ```js
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// ```

// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
// `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.

const ingredientsList = document.querySelector('ul#ingredients');

// const arrayIngredients = ingredients.map(ingredient => {
// 	const li = document.createElement('li');
// 	li.innerText = ingredient;

// 	return li;
// });

const createIngredients = (ingredients) => {
	return ingredients.map(ingredient => {
		const li = document.createElement('li');
		li.innerText = ingredient;
	
		return li;
	});
};

ingredientsList.append(...createIngredients(ingredients));
