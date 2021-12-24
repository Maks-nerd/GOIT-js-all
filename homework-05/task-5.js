// # Задание 5

// Напиши класс `Car` с указанными свойствами и методами.

// ```js
class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

static getSpecs({maxSpeed, speed, isOn, distance, price}) {
	console.log(`maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`);
}

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
  constructor(car) {
		const {maxSpeed, speed = 0, isOn = false, distance = 0, price} = car;
		this.maxSpeed = maxSpeed;
		this.speed = speed;
		this.isOn = isOn;
		this.distance = distance;
		this._price = price;
		// console.log(this.maxSpeed);
	}

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */
get price() {
	return this._price;
}

set price(price) {
	return this._price = price;
}

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
  turnOn() {
		this.isOn = true;
	}

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
  turnOff() {
		this.isOn = false;
		this.speed = 0;
	}

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
  accelerate(value) {
		if(this.speed < this.maxSpeed) {
			this.speed += value;
		}
	}

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
  decelerate(value) {
		if(this.speed > 0) {
			this.speed -= value;
		}
	}

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
  drive(hours) {
		if(this.isOn) {
			this.distance += hours * this.speed;
		}
	}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

console.log(mustang);
console.log(mustang.price);

mustang.turnOn();
console.log(mustang);

mustang.accelerate(50);
console.log(mustang);

mustang.drive(2);
console.log(mustang);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
// ```