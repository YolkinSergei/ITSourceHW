'use strict';

/* 
	Задание 1

	Изучите перебирающие методы массивов: forEach, filter, map. Создайте 
	массив объектов users (~10 объектов), каждый объект имеет поля firstname, 
	lastname, age с разными значениями, у некоторых есть поле middlename. 
	Используя встроенные функции массивов:	
	a. 	Отфильтруйте пользователей младше 18 лет
	b. 	Добавьте каждому объекту поле fullName, которое является конкатенацией 
		firstname, middlename и lastname, если есть все три, и только firstname 
		и lastname, если middlename нет
	c. Сформируйте новый массив, который содержит только полное имя 
		пользователей
*/

let users = [
	{
		firstname: 'Иван',
		lastname: 'Иванов',
		age: 84,
		middlename: 'Иванович'
	}, 
	{
		firstname: 'Петр',
		lastname: 'Петров',
		age: 25
	}, 
	{
		firstname: 'Семен',
		lastname: 'Семенов',
		age: 18,
		middlename: 'Семенович'
	}, 
	{
		firstname: 'Евгения',
		lastname: 'Онегина',
		age: 30
	}, 
	{
		firstname: 'Курт',
		lastname: 'Кобейн',
		age: 17,
		middlename: 'Николаевич'
	}, 
	{
		firstname: 'Анна',
		lastname: 'Кукушкина',
		age: 14,
		middlename: 'Ивановна'
	}, 
	{
		firstname: 'Марина',
		lastname: 'Петрова',
		age: 54
	}, 
	{
		firstname: 'Олег',
		lastname: 'Олегов',
		age: 30,
		middlename: 'Олегович'
	}, 
	{
		firstname: 'Натаниэль',
		lastname: 'Горро',
		age: 18
	}, 
	{
		firstname: 'Елена',
		lastname: 'Еленова',
		age: 19,
		middlename: 'Еленовна'
	}
];

let underageUsers = users.filter((item) => item.age < 18);

users.forEach((item) => {
	item.fullName = item.firstname
					+ (item.middlename ? ' ' + item.middlename  + ' ' : ' ')
					+ item.lastname;
});

let userFullNames = users.map((item) => item = item.fullName);

/*
	2 задание

	Напишите функцию, которая возвращает куб переданного числа, аналог 
	Math.pow(x, 3)
	a) используя цикл 
	b) используя рекурсию:

	console.log( cube(2) ); // 8
*/

function doCubeByCycle(value) {
	let returnValue = value;

	for (let i = 1; i < 3; i++) {
		returnValue *= value;
	}

	return returnValue;
}

let doCubeByRecursion = function(value, exponent) {
	let exponentStep = exponent || 3;

	return exponentStep > 1 ? 
		value * doCubeByRecursion(value, exponentStep - 1) : value;
}

console.log(`doCubeByCycle(2) = ${ doCubeByCycle(2) }`);
console.log(`doCubeByRecursion(3) = ${ doCubeByRecursion(3) }`);

/*
	3 задание

	Напишите функцию extraCube, которая принимает в качестве параметра или 
	число, или массив числовых значений и возвращает либо куб числа, либо 
	массив кубов, в зависимости от типа входящего параметра (typeof). Для 
	расчета куба числа вместо встроенного метода Math.pow используйте 
	собственную функцию.

	console.log( extraCube(2) ); // 8
	console.log( extraCube([0, 1, 2, 3]) ); // [0, 1, 8, 27]
*/

function extraCube(value) {
	switch (typeof value) {
		case 'number': return doCubeByRecursion(value);
		case 'object': {
			if (Array.isArray(value) && value.length > 0) {
				for (let i = 0; i < value.length; i++) {
					value[i] = doCubeByCycle(value[i]);
				}

				return value;
			}
		}	
	}

	return null;
}

console.log( `extraCube(2) = ${extraCube(2)}` ); 
console.log( `extraCube([0, 1, 2, 3]) = ${extraCube([0, 1, 2, 3])}` ); 

/*
	4 задание

	Напишите функцию ask с тремя параметрами: question, defaultValue, callback.
	Функция ask запрашивает с помощью prompt вопрос question, ответ по 
	умолчанию - defaultValue. Что делать с полученным значением - определяет 
	callback

	ask('How old are you?', '10', function(response) {
		console.log(response);
	});
*/

function ask(question, defaultValue, callback) {
	callback( prompt(question, defaultValue) );
}

/*
	5 задание

	Создайте объект, описывающий html-разметку. Напишите функцию, которая 
	добавляет разметку в произвольный контейнер на странице.

	<section id="methods">
		<article>
			<h1>Array.prototype.every()</h1>
			<p>Метод every() проверяет, удовлетворяют ли все элементы массива 
			условию, заданному в передаваемой функции.</p>
		</article>
		<article>
			<h1>Array.prototype.some()</h1>
			<p>Метод some() проверяет, удовлетворяет ли хоть какой-нибудь 
			элемент массива условию, заданному в передаваемой функции.</p>
		</article>
		<article>
			<h1>Array.prototype.reduce()</h1>
			<p>Метод reduce() применяет функцию к аккумулятору и каждому 
			значению массива (слева-направо), сводя его к одному значению.</p>
		</article>
		<article>
			<h1>Array.prototype.reduceRight()</h1>
			<p>Метод reduceRight() применяет функцию к аккумулятору и каждому 
			начению массива (справа-налево), сводя его к одному значению.</p>
		</article>
	</section>
*/

function objectToHtml(htmlData, domContainer) {
	let parentContainer = domContainer || document.body,
		newItem = document.createElement(htmlData.type);

	if ('id' in htmlData) {
		newItem.setAttribute('id', htmlData.id);
	}

	if ('text' in htmlData) {
		newItem.innerText = htmlData.text;
	}

	if ('items' in htmlData && Array.isArray(htmlData.items) 
		&& htmlData.items.length > 0) {
		let childItems = htmlData.items;

		for (let i = 0; i < childItems.length; i++) {
			objectToHtml(childItems[i], newItem);
		}
	}

	parentContainer.appendChild(newItem);
}

let htmlObject = {
	type: 'section',
	id: 'methods',
	items: [
		{
			type: 'article',
			items: [
				{
					type: 'h1',
					text: 'Array.prototype.every()'
				},
				{
					type: 'p',
					text: 'Метод every() проверяет, удовлетворяют ли все ' 
					+ 'элементы массива условию, заданному в передаваемой '
					+ 'функции.'
				}
			]
		}, 
		{
			type: 'article',
			items: [
				{
					type: 'h1',
					text: 'Array.prototype.some()'
				},
				{
					type: 'p',
					text: 'Метод some() проверяет, удовлетворяет ли хоть '
					+ 'какой-нибудь элемент массива условию, заданному в '
					+ 'передаваемой функции.'
				}
			]
		}, 
		{
			type: 'article',
			items: [
				{
					type: 'h1',
					text: 'Array.prototype.reduce()'
				},
				{
					type: 'p',
					text: 'Метод reduce() применяет функцию к аккумулятору и'
					+ 'каждому значению массива (слева-направо), сводя его к ' 
					+ 'одному значению.'
				}
			]
		}, 
		{
			type: 'article',
			items: [
				{
					type: 'h1',
					text: 'Array.prototype.reduceRight()'
				},
				{
					type: 'p',
					text: 'Метод reduceRight() применяет функцию к '
					+ 'аккумулятору и каждому значению массива (справа-налево)'
					+ ', сводя его к одному значению.'
				}
			]
		}
	]
};


objectToHtml(htmlObject);

/*
	6 задание

	Напишите функцию checkNumber, которая получает на вход как параметр 
	массив любых значений и возвращает true, если все элементы - числа, и 
	false - если в массиве хотя бы  одно не число. Для проверки массива 
	используйте метод every или some

	console.log( checkNumber([1, 2, '3', 'a']) ); // false
	console.log( checkNumber([1, 2, '3', '4']) ); // true
*/

function checkNumber(values) {
	return values.every( (item) => isFinite(item) );
}

console.log( checkNumber([1, 2, '3', 'a']) );
console.log( checkNumber([1, 2, '3', '4']) );


///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Замыкания /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

/*
	1 задание

	Используя замыкание, напишите функцию createTimer, которая использует метод 
	performance.now() для получения текущей временной метки и служит для замера 
	времени выполнения другого кода:

	var timer = createTimer();
	alert('!');  // код, время выполнения которого нужно измерить
	alert( timer() ); // время в мкс от начала выполнения createTimer() до 
	момента вызова timer()
*/

function createTimer() {
	let startTime = performance.now();

	return function() {
		return performance.now() - startTime;
	}
}

var timer = createTimer();
alert('!');
alert( timer() );

/*
	2 задание 

	Используя замыкания, создайте функцию createAdder(), которая принимает на 
	вход любой примитивный параметр и возвращает функцию, которая добавляет к 
	первому параметру второй. Функция работает по следующему принципу:

	var hello = createAdder('Hello, ');
	alert( hello('John') ); // Hello, John
	alert( hello('Harry') ); // Hello, Harry

	var plus = createAdder(5);
	alert( plus(1) ); // 6
	alert( plus(5) ); // 10

*/

function createAdder(value) {
	let startValue = value;

	return function(newValue) {
		return startValue + newValue;
	}
}

let plus = createAdder(5);
console.log( `plus(1) = ${plus(1)}` );
console.log( `plus(5) = ${plus(5)}` );

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// LEVEL UP //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

/*
	Создайте представленную выше структуру в HTML. 
	Средствами JS DOM API переберите структуру и создайте из нее объект данных. 
	Распечатайте полученный объект в консоли:

	<section id="methods_2">
		<article>
			<h1>Array.prototype.every()</h1>
			<p>Метод every() проверяет, удовлетворяют ли все элементы массива 
			условию, заданному в передаваемой функции.</p>
		</article>
		<article>
			<h1>Array.prototype.some()</h1>
			<p>Метод some() проверяет, удовлетворяет ли хоть какой-нибудь 
			элемент массива условию, заданному в передаваемой функции.</p>
		</article>
		<article>
			<h1>Array.prototype.reduce()</h1>
			<p>Метод reduce() применяет функцию к аккумулятору и каждому 
			значению массива (слева-направо), сводя его к одному значению.</p>
		</article>
		<article>
			<h1>Array.prototype.reduceRight()</h1>
			<p>Метод reduceRight() применяет функцию к аккумулятору и каждому 
			значению массива (справа-налево), сводя его к одному значению.</p>
		</article>
	</section>
*/

function htmlToObject(domContainer) {
	let objectItem = {};

	let attributes = domContainer.getAttributeNames();

	objectItem.type = domContainer.tagName;

	for (let i = 0; i < attributes.length; i++) {
		objectItem[attributes[i]] = domContainer.getAttribute(attributes[i]);
	}

	if (domContainer.childElementCount > 0) {
		objectItem.items = [];
		let children = domContainer.children;

		for (let i = 0; i < children.length; i++) {
			objectItem.items.push( htmlToObject(children[i]) );
		}
	} else {
		if (domContainer.innerText) {
			objectItem.text = domContainer.innerText;
		}
	}

	return objectItem;
}

console.log( htmlToObject( document.querySelector('#methods_2') ) );