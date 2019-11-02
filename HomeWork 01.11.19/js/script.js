'use strict';
/*
1 задание
	Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. 
	С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, 
	и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое 
	также запрашивается из prompt.
*/
/*
let person = {
		name: 'JSON Стетхем',
		firstname: 'JSON',
		lastname: 'Стетхем',
		age: 52,
		weight: 80,
		height: 178
	},
	key = prompt(`Введите имя свойства, которое Вас интересует:`);

if (key in person) {
	alert(person[key]);
} else {
	let value = prompt(`Свойство "${key}" отсутствует и будет создано. Введите значение этого свойства:`);
	person[key] = value;
}
*/

/*
2 задание
	Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
	прочитанными из prompt (например: brand, model, resolution, color...), не используя 
	вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.
*/
/*
let phone = {
		system: null,
		brand: null,
		model: null,
		romSize: null
	};

for (key in phone) {
	phone[key] = prompt(`Укажите значение параметра "${key}" для обьекта Phone:`);
};

person['phone'] = phone;
*/

/*
3 задание
	Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, 
	либо update. В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) 
	свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять или 
	добавлять - также читается из prompt. Какое значение будет у добавленного свойства - тоже 
	берется из prompt. При нажатии на Отмена при появлении prompt редактирование person 
	заканчивается. И обновленные данные распечатываются в консоли.
*/
/*
editPerson: while (true) {
	let actionName = prompt(`Что Вы хотите сделать?\nupdate - обновить свойство\ndelete - удалить свойство`),
		keyName = (actionName === 'update' || actionName === 'delete')?prompt(`Какое свойство Вы хотите ${actionName=='delete'?'удалить':'обновить'}?`):null,
		value = actionName === 'update'?prompt(`Введите значение, которое хотите установить:`):null;
	switch (actionName) {
		case 'delete': {
			if (!delete person[keyName]) {
				alert(`Свойство "${keyName}" не может быть удалено из обьекта Person.`);
			};
			break;	
		}
		case 'update': {
			person[keyName] = value;
			break;	
		}
		case null: {
			break editPerson;
		}
		default: {
			alert('Некорректный ввод!'); 
			continue editPerson; 
		}
	}
}

for (key in person) {
	console.log(`${key}: ${person[key]}`);
}
*/

/*
4 задание
	Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) 
	сгенерированный ранее объект person, добавляя dt - для имени свойства и dt - для 
	значения свойства.	
*/
/*
let dl = document.createElement('dl');
document.body.appendChild(dl);

for (key in person) {
	let dt = document.createElement('dt'),
		dd = document.createElement('dd');

	dt.innerText = key;
	dd.innerText = person[key];

	dt.appendChild(dd);
	dl.appendChild(dt);
}
*/

/*
5 задание
	Создайте объект dates для хранения дат. Первая дата – позавчера. 
	Вторая дата – текущая дата (new Date) минус 365 дней. 
	Из prompt читается дата в формате yyyy-MM-dd. 
	Проверьте, попадает ли введенная дата в диапазон дат объекта dates.
*/
/*
let dates = {
		firstDate: new Date(),
		secondDate: new Date()
	},
	findDate = new Date(prompt(`Введите дату в формате yyyy-MM-dd:`));

dates.firstDate.setDate(dates.firstDate.getDate() - 2);
dates.firstDate.setHours(0, 0, 0, 0);

dates.secondDate.setDate(dates.secondDate.getDate() - 365);
dates.secondDate.setHours(0, 0, 0, 0);

findDate.setHours(0, 0, 0, 0);

if (findDate >= dates.secondDate && findDate <= dates.firstDate) {
	alert(`Дата попадает в диапазон.`);	
} else {
	alert(`Дата не попадает в диапазон.`);	
}
*/

/*
6 Задание
	Создайте структуру данных, полностью описывающую html-разметку картинки. 
	С помощью методов браузера добавьте ее на страницу со всеми атрибутами, 
	читая значения свойств из созданного объекта.
*/

let imgProperties = {
		src: 'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif',
		alt: ' ',
		style: 'border: 1px solid #ccc',
		width: '200'
	},
	img = document.createElement('img');

for (var key in imgProperties) {
	img.setAttribute(key, imgProperties[key]);
}

document.body.appendChild(img);
