'use strict';
//Первое задание:
var x = parseInt(prompt('Введите Х', '1')),
	y = parseInt(prompt('Введите Y', '1'));

alert('Сумма: ' + (x + y));

//Второе задание:
/*
let a = parseInt(prompt('Введите числовое значение первой переменной: ')), 
	b = a * 3, 
	c = a + b;
alert(`Вторая переменная B = ${b}.\nТретья переменная C = ${c}.`);
*/

//Третье задание:
/*
let firstName = prompt('Введите имя:'), 
	lastName = prompt('Введите фамилию:');
alert('What\'s up ' + firstName.toUpperCase() + ' ' + lastName.toUpperCase());
*/

//Четвертое задание:
/*
let x = parseFloat(prompt('Введите X:')),
	y = parseFloat(prompt('Введите Y:'));
alert('Произведение чисел: ' + (x * y));
alert('Частное чисел: ' + (x / y));
alert('Разность чисел: ' + (x - y));
alert('Сумма чисел: ' + (x + y));
*/

//Пятое задание:
//alert(Boolean(parseInt(prompt('Введите число:'))%2 == 1));

//Шестое задание:
/*
const COEF = 1024;
let mb = parseFloat(prompt('Введите количество Mbyte:'));
alert(`В ${mb} Mbyte содержится ${mb*COEF} Kbyte и ${mb*COEF*COEF} byte.`);
*/

//Седьмое задание:
/*
let chjuanTszyHave = parseInt(prompt('У Чжуан-Цзы было яблок:')),
	tszenTszyEat = parseInt(prompt('Цзен-Цзы сьел яблок:'));
alert('Чжуан-Цзы, обвиняя Цзен-Цзы, говорит ' + (chjuanTszyHave <= tszenTszyEat));
*/

//Восьмое задание:
/*
let column1 = parseInt(prompt('Высота первой колонки: ')),
	column2 = parseInt(prompt('Высота второй колонки: ')),
	column3 = parseInt(prompt('Высота третьей колонки: '));
alert(`Самая высокая колонка имеет высоту ${Math.max(column1, column2, column3)}px.`);
*/

//Девятое задание:
/*
const DISTANCETOMOON = 384000,
	HOURSISDAY = 24,
	MINUTESINHOUR = 60,
	SECONDSINMINUTE = 60;
let speedOfSpaceship = parseInt(prompt('Укажите скорость космического корабля (км/ч): ')),
	commonTime = (DISTANCETOMOON / speedOfSpaceship),
	days = parseInt(commonTime / HOURSISDAY),
	hours = parseInt(commonTime % HOURSISDAY),
	minutes = parseInt((commonTime - (days * HOURSISDAY) - hours) * MINUTESINHOUR),
	seconds = parseInt(commonTime - (days * HOURSISDAY) - hours - (minutes / MINUTESINHOUR));
alert(`Корабль доберется до Луны за ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд.`);
*/

//Десятое задание:
/*
let x = Math.round(Math.random() * 100), 
	y = parseInt(prompt('Введите число Y:'));
alert(`x < y = ${x<y}, x = ${x}, y = ${y}` );
*/