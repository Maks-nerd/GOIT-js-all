// # Задание 3

// Напиши класс `Storage`, который будет создавать объекты для управления складом
// товаров. При вызове будет получать один аргумент - начальный массив товаров, и
// записывать его в свойство `items`.

// Добавь методы класса:

// - `getItems()` - возвращает массив текущих товаров
// - `addItem(item)` - получает новый товар и добавляет его к текущим
// - `removeItem(item)` - получет товар и, если он есть, удаляет его из текущих

class Storage {
	constructor(products) {
		this.products = products;
	};

	getItems() {
		return this.products;
	};

	addItem(item) {
		this.products.push(item);
	};

	removeItem(item) {
		this.products.splice(0, 1);
	};
};

// ```js
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
// ```