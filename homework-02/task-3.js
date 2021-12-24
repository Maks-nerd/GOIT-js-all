'use strict'

// # Задание 3

// Напиши фукцнию `findLongestWord(string)`, которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы) и возвращает самое
// длинное слово в этой строке.

// ```js
// const findLongestWord = function(string) {
//   // твой код
// };

const findLongestWord = (string) => {
	const arrayWords = string.split(' ');
	let findLongestWord = '';

	for (const word of arrayWords) {
		if(word.length > findLongestWord.length) {
			findLongestWord = word;
		}
	};

	return findLongestWord;
};

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
// ```
