'use strict'

// # Задание 7 - дополнительное, выполнять не обязательно

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
		const id = `${type}-${amount}-${Math.round(Math.random()*1000)}`;
		// const id = 'id-1';
		const newObject = {id: id, type, amount};

		return newObject;
	},

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
		this.balance += amount;
		this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
	},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
		this.balance -= amount;
		this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
	},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
		return this.balance;
	},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
		const transactions = this.transactions;

		for (const transaction of transactions) {
			if(id === transaction.id) {
				return transaction;
			}
		}
	},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
		let total = 0;
		const typeTransaction = Transaction[type.toUpperCase()];
		const transactions = this.transactions;

		for (const {id, type, amount} of transactions) {
			if(typeTransaction === type) {
				total += amount;
			}
		}

		return total;
	},
};
// ```

console.log(account.createTransaction(300, 'deposit'));
account.deposit(400);
account.deposit(400);
account.deposit(400);
account.withdraw(200);
console.log(account.getBalance());
console.log(account.getTransactionDetails("id-1"));
console.log(account.transactions);
console.log(account.getTransactionTotal("withdraw"));
