'use strict';

/*
1 задание
	Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
	Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
*/
let mixedArray = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'],
	sum = 0;

for (let i = 0; i < mixedArray.length; i++) {
	let numberValue = parseFloat(mixedArray[i]);
	if (!isNaN(numberValue)) {
		sum += numberValue;
	}
}

alert(sum);

/*
2 задание
	Сгенерируйте массив из N случайных чисел с двумя знаками после запятой. 
	Затем переберите массив и распечатайте в консоли значения его элементов, 
	возведенные в пятую степень. Для возведения в степень используйте вложенный 
	цикл (НЕ метод Math.pow(), НЕ оператор **).
*/
let generatedArray = [];

for (let i = 0; i < 10; i++) {
	generatedArray[i] = (Math.random() * 10).toFixed(2);
}

// Можно было генерировать и обрабатывать массив в одном цикле, но
// по условию задания мне показалось, что нужно два отдельных цикла.

for (let i = 0; i < generatedArray.length; i++) {
	var exponValue = 1;
	for (let j = 0; j < 5; j++) {
		exponValue *= generatedArray[i];
	}
	console.log(`Число ${generatedArray[i]} в 5-й степени = ${exponValue}`);
}

/*
3 задание
	Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt 
	для ввода любых символов, полученное значение добавляйте в конец созданного 
	массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите 
	в alert полученный результат.
*/

let emptyArray = [];

// sum обьявлена ранее
sum = 0;

for (let i = 0; i < 10; i++) {
	emptyArray.push(prompt('Please enter any symbol or digit'));

	let numberValue = parseInt(emptyArray[i]);

	if (isNaN(numberValue)) {
		continue;
	}

	sum += numberValue;
}

alert(`Сумма чисел, введенных в массив: ${sum}`);


/*
4 задание
	Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
	- Добавьте в начало массива значение ‘Backbone.js’
	- Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
	- Добавьте в массив значение ‘CommonJS’ вторым элементом
	- Найдите и удалите из массива значение ‘jQuery’, выведите его в alert 
	  словами “Это здесь лишнее”
*/
let languagesArray = ['AngularJS', 'jQuery'];

languagesArray.splice(0, 0, 'Backbone.js');

languagesArray.push('ReactJS', 'Vue.js');

languagesArray.splice(1, 0, 'CommonJS');

alert(`Это здесь лишнее: ${languagesArray.splice(languagesArray.indexOf('jQuery'), 1)[0]}`);

/*
5 задание
	Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’. 
	Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью 
	любых методов массива (indexOf, splice ...). Затем объедините элементы массива 
	в строку и выведите в alert исходный и итоговый варианты.
*/
let startString = 'Как однажды Жак звонарь сломал городской  фонарь',
	startArray = startString.split(' '),
	endString;

startArray.splice(4, 0, startArray.splice(5, 1)[0]);

endString = startArray.join(' ');

alert(`Было:\n "${startString}" \n Стало: \n "${endString}"`);

/*
6 задание
	Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения. 
	После того, как таблица сгенерирована, распечатайте значение в консоли:
*/
let multiplicationArray = [];

for (let i = 0; i < 10; i++) {
	multiplicationArray[i] = [];
	for (let j = 0; j < 10; j++) {
		multiplicationArray[i][j] = `${i+1} x ${j+1} = ${(i + 1) * (j + 1)}`;
	}
}

console.log(multiplicationArray);