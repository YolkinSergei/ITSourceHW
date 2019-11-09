'use strict';

/*
1 задание
	Используя поиск по селекторам querySelector и querySelectorAll из DOM API и свойство 
	DOM-элемента style, задайте стили элементам таблицы в блоке #content. Редактировать HTML 
	нельзя, CSS не нужен. Последовательность команд:
	- Таблица расположена посредине страницы, расстояния между ее ячейками нет
	- Все ячейки имеют ширину-высоту 10px, цвет фона #eee, границу 1px solid #000
	- Фон в ячейках первых шести строк –#106B63
	- Фон в ячейках строк 7-9 –#E7C610
	- Фон в ячейках строк 10-12 – #C64A08
	- Фон в ячейках строк 13-15 –#B43100
	- Фон в ячейках всех оставшихся строк –#102173
	- У некоторых ячеек есть класс none, задайте на jQuery стиль для этого класса: фона нет, 
	  границы нет

	Подсказка: для поиска элементов помогут “родственные селекторы”. Задать стиль всем элементам 
	коллекции можно в цикле.
*/

let table = document.querySelector('#content table');
table.style.borderCollapse = 'collapse';
table.align = 'center';

let elementsSet = document.querySelectorAll('#content table tr td');

for (let i = 0; i < elementsSet.length; i++) {
	elementsSet[i].style.backgroundColor = '#eee';
	elementsSet[i].style.border = '1px solid #000';
	elementsSet[i].style.width = '10px';
	elementsSet[i].style.height = '10px';
}


elementsSet = document.querySelectorAll('#content table tr');

for (let i = 1; i <= elementsSet.length; i++) {
	let childElementsSet = document.querySelectorAll(`#content table tr:nth-child(${i}) td`);

	for (let j = 0; j < childElementsSet.length; j++) {
		if (i <= 6) {
			childElementsSet[j].style.backgroundColor = '#106B63';
		} else if (i <= 9) {
			childElementsSet[j].style.backgroundColor = '#E7C610';
		} else if (i <= 12) {
			childElementsSet[j].style.backgroundColor = '#C64A08';
		} else if (i <= 15) {
			childElementsSet[j].style.backgroundColor = '#B43100';
		} else {
			childElementsSet[j].style.backgroundColor = '#102173';
		}
	}
}

elementsSet = document.querySelectorAll('#content table tr td.none');

for (let i = 0; i < elementsSet.length; i++) {
	elementsSet[i].style.background = 'none';
	elementsSet[i].style.border = 'none';
}


/*
2 задание
	Создайте три ассоциативных массива (объекта), в каждом из которых есть поля firstname, 
	lastname, city, phone и birthday.
	- Добавьте некоторым объектам поле middlename (отчество).
	- Объедините все объекты в одном массиве (массив объектов, e.g. users).
	- В цикле добавьте каждому объекту массива users дополнительное поле - fullName - которое 
		будет иметь вид “Имя Отчество Фамилия”, если поле middlename в объекте есть, и только 
		“Имя Фамилия”, если отчества нет.
	- Создайте цикл, который с помощью методов нативного JS выводит в HTML-таблицу данные о 
		пользователях.
	- Создайте объект соответствия названия полей русскому аналогу (типа { firstname: ‘Имя’ }) 
		и дорисуйте таблице шапку.
*/

let ivan = {
		firstname: 'Иван',
		lastname: 'Дурак',
		city: 'ТриДевятое государство',
		phone: '-',
		birthday: '31 Февраля'
	},
	vasily = {
		firstname: 'Васыль',
		lastname: 'Васюков',
		city: 'Мукачево',
		phone: '+38(094)123-45-78',
		birthday: '1 октября'
	},
	anna = {
		firstname: 'Анна-Лиза',
		lastname: 'Киттинг',
		city: 'Нью-Йорк',
		phone: '+9(876)1234578',
		birthday: '1 октября'
	};

ivan.middlename = 'Царевич';
anna.middlename = 'Андреевна';

let users = [ivan, vasily, anna];

for (let i = 0; i < users.length; i++) {
	users[i].fullName = `${users[i].firstname} ${users[i].middlename ? (users[i].middlename + ' ') : ''}${users[i].lastname}`;
}

let tableUsers = document.createElement('table');
document.body.appendChild(tableUsers);
tableUsers.style.borderCollapse = 'collapse';
tableUsers.style.marginTop = '50px';

for (let i = 0; i < users.length; i++) {
	let trElement = document.createElement('tr');

	for (let j in users[0]) {
		let tdElement = document.createElement('td');

		tdElement.innerText = users[i][j] ? users[i][j] : null;
		tdElement.style.border = '1px black solid';
		tdElement.style.padding = '5px';

		trElement.appendChild(tdElement);
	}

	tableUsers.appendChild(trElement);
}

let assocObj = {
		firstname: 'Имя:',
		lastname: 'Фамилия:',
		city: 'Город:',
		phone: 'Телефон:',
		birthday: 'День рождения:',
		middlename: 'Отчество:',
		fullName: 'Полное имя:'
	};

let trElement = document.createElement('tr');

for (let i in assocObj) {
	let tdElement = document.createElement('td');

	tdElement.innerText = assocObj[i] ? assocObj[i] : null;
	tdElement.style.border = '1px black solid';
	tdElement.style.backgroundColor = 'grey';
	tdElement.style.textAlign = 'center';
	tdElement.style.fontWeight = 'bold';
	tdElement.style.padding = '5px';

	trElement.appendChild(tdElement);
}

tableUsers.prepend(trElement);