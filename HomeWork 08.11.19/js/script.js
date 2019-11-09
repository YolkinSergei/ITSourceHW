'use strict';

/* /////////////////////////////////////////////////////////////////////////////////////////////
1 задание
////////////////////////////////////////////////////////////////////////////////////////////////
	Создайте функцию p и a, которые будут служить короткими именами для prompt и alert 
	соответственно, то есть запрашивать окно с полем ввода и выводить любое пользовательское 
	сообщение в стандартном модальном окне. Напишите функцию d, которая будет служить коротким 
	именем для debugger, то есть запускать процесс отладки. Используя эти псевдонимы получите 
	значение из prompt и отобразите в alert. А процесс работы скрипта проконтролируйте с помощью 
	функции, которая служит для дебага.

	d();
	let name = p( 'Enter your name', '');
	a(name);
	a( 'Hello World' );
*/
/*
function d() {
	debugger;
}

function a(value) {
	alert(value);
}

function p(message, defaultValue) {
	return prompt(message, defaultValue);
}

d();

let name = p('Enter your name', '');
a(name);

a('Hello World');
*/

/* /////////////////////////////////////////////////////////////////////////////////////////////
2 задание
////////////////////////////////////////////////////////////////////////////////////////////////
	Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая 
	сравнивает два числа и возвращает большее: 

	console.log( max(0, -1) ); // 0
*/
/*
let max = (value1, value2) => (value1 > value2) ? value1 : value2;

console.log(max(0, -1));
*/

/* /////////////////////////////////////////////////////////////////////////////////////////////
3 задание
////////////////////////////////////////////////////////////////////////////////////////////////
	Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое 
	количество чисел и возвращает меньшее из них:

	console.log( min(0, -1, 100, 500, 100500) ); // -1
*/
/*
function min() {
	let minValue = arguments[0];

	for (let i = 1; i < arguments.length; i++) {
		if (arguments[i] < minValue) {
			minValue = arguments[i];
		}
	}

	return minValue;
}

console.log(min(0, -1, 100, 500, 100500));
*/

/* /////////////////////////////////////////////////////////////////////////////////////////////
4 задание
////////////////////////////////////////////////////////////////////////////////////////////////
	Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из 
	переданного в параметре массива первый элемент и возвращает новый массив.
*/

/* 
// Аналог shift(), который удаляет первый элемент массива и возвращает его же:
function shift(array) {
	if (array.length == 0) {
		return array[0];
	}

	let returnValue = array[0];

	for (let i = 1; i < array.length; i++) {
		array[i-1] = array[i];
	}

	array.length = array.length - 1;

	return returnValue;
}
*/

/*
// Аналог shift() который удаляет первый элемент и возвращает измененный массив:
function shift(array) {
	if (array.length > 0) {
		for (let i = 1; i < array.length; i++) {
			array[i-1] = array[i];
		}

		array.length = array.length - 1;
	}

	return array;
}
*/


/* /////////////////////////////////////////////////////////////////////////////////////////////
5 задание
////////////////////////////////////////////////////////////////////////////////////////////////
	Не используя методы массива, напишите функцию аналог метода массива push. Функция добавляет 
	в конец переданного в параметре массив произвольное количество элементов.
*/
/*
function push(array) {
	if (Array.isArray(array)) {
		let arrayLength = array.length,
			i;

		for (i = 1; i < arguments.length; i++) {
			array[arrayLength - 1 + i] = arguments[i];
		}

		return i - 1 + arrayLength;
	} else {
		return undefined;
	}
}
*/

/* /////////////////////////////////////////////////////////////////////////////////////////////
6 задание
////////////////////////////////////////////////////////////////////////////////////////////////
	Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект, 
	поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями 
	которых будет расширяться целевой объект.
	
	var source = {firstname: 'Tom', age: 10}
	var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
	console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
	console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}
*/
/*
function assignObject(targetObject) {
	for (let i = 1; i < arguments.length; i++) {
		for (let j in arguments[i]) {
			targetObject[j] = arguments[i][j];
		}
	}

	return targetObject;
}

let source = {firstname: 'Tom', age: 10};
let s = assignObject(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

*/

/* /////////////////////////////////////////////////////////////////////////////////////////////
7 задание
////////////////////////////////////////////////////////////////////////////////////////////////
	Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - 
	обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции 
	должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные 
	переданы некорректно. Параметр author - опциональный, но должна происходить проверка: 
	если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция 
	распечатывает в HTML текст в виде: 
		<имя_автора>, <дата>
		<текст_сообщения>

	setComment('2016-11-02', 'Everything is ok', 'John');
*/
/*
function setComment(date, message, author = 'Anonymous') {
	if (!date || !message) {
		alert('Данные переданы некорректно!');
	} else {
		let div = document.createElement('div');
		div.style.border = '1px solid black';
		div.style.padding = '5px';
		div.style.marginBottom = '10px';

		let divTitle = document.createElement('div');
		divTitle.innerText = `${author}, ${date}`;
		divTitle.style.fontWeight = 'bold';

		let divMessage = document.createElement('div');
		divMessage.innerText = message;

		div.appendChild(divTitle);
		div.appendChild(divMessage);

		document.body.appendChild(div);
	}
}

setComment('2016-11-02', 'Everything is ok', 'John');

while(confirm('Добавить новый комментарий?')) {
	setComment(prompt('Укажите дату:'), prompt('Введите комментарий:'), prompt('Укажите ваше имя:'));
};
*/

/* /////////////////////////////////////////////////////////////////////////////////////////////
8 задание
////////////////////////////////////////////////////////////////////////////////////////////////
	Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит 
	максимальное и минимальное, и возвращает их 

	var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
	console.log( result ); // "542 -214"
*/
/*
function highAndLow(str) {
	let array = str.split(' '),
		min = +array[0], 
		max = +array[0];

	for (let i in array) {
		if (+array[i] > max) {
			max = +array[i];
		}
		if (+array[i] < min) {
			min = +array[i];
		}
	}

	return `${max} ${min}`;
};
*/

/* /////////////////////////////////////////////////////////////////////////////////////////////
9 задание
////////////////////////////////////////////////////////////////////////////////////////////////
	Найдите и исправьте ошибки в коде:

	function foo() {
		function bar(a) {
			i = 3;
			return i + a;
		}
		
		for (var i = 0; i < 10; i++) {
			console.log( bar(i * 2) );
		}
	}

	foo(); // 3 5 7 9 11 13 15 17 19 21
*/
/*
function foo() {
	function bar(a) {
		let i = 3;
		return i + a;
	}
	
	for (var i = 0; i < 10; i++) {
		console.log(bar(i * 2));
	}
}

foo(); // 3 5 7 9 11 13 15 17 19 21
*/