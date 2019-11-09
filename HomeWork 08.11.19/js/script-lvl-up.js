'use strict';
/*
	1 задание

	Напишите функцию, которая рисует в указанном HTML-контейнере диаграмму из данных, 
	представляющих из себя массив объектов: каждый объект имеет свойства color и value, 
	означающих соответственно цвет столбца и его высоту. Стилизацию столбиков диаграммы 
	можно сделать в CSS.

	var data1 = [ {color: '#DE9797', value: 70}, ... ];
	buildDiagram(data1, '#diagram1');
	var data2 = [ {color: '#97DEDA', value: 20}, ... ];
	buildDiagram(data2, '#diagram2');
*/
function buildDiagram(array, diagramId) {
	let diagram = document.querySelector(diagramId);

	for (let i in array) {
		let divColumn = document.createElement('div');

		divColumn.setAttribute('class', 'diagram-column');
		divColumn.style.width = '50px';

		let label = document.createElement('label');
		label.innerText = array[i].value + '%';

		let divColorBlock = document.createElement('div');
		divColorBlock.style.backgroundColor = array[i].color;
		divColorBlock.style.height = array[i].value + 'px';

		divColumn.appendChild(label);
		divColumn.appendChild(divColorBlock);

		diagram.appendChild(divColumn);
	}
}


var data1 = [{color: '#D99998', value: 70}, {color: '#989DD4', value: 50}, {color: '#8FE29E', value: 30}, {color: '#DDDD9F', value: 100}, {color: '#E1C699', value: 90}, {color: '#9ADDDC', value: 60}, {color: '#D697D4', value: 10}, {color: '#AE98E0', value: 35}];
buildDiagram(data1, '#diagram1');

var data2 = [{color: '#D697D4', value: 10}, {color: '#AE98E0', value: 35}, {color: '#FF0000', value: 100}, {color: '#989DD4', value: 50}, {color: '#97DEDA', value: 20}, {color: '#DE9797', value: 70}, {color: '#97DEDA', value: 20} ];
buildDiagram(data2, '#diagram2');


/*
	2 задание

	Напишите функцию, которая изображает в теге HTML картинку по данным, представляющим из себя двумерный массив закрашенных точек.

	var points = [
		[3, 4, 5],
		[2, 3, 9, 16],
		[1, 2, 9, 10, 15, 16],
		...
	];
*/
function getMaxWidth(pointsData) {
	let max = pointsData[0][0];
	for (let i in pointsData) {
		for (let j in pointsData[i]) {
			if (pointsData[i][j] > max) {
				max = pointsData[i][j];
			}
		}
	}
	return max;
}

function doDrawing(pointsData) {
	let table = document.createElement('table'),
		maxWidth = getMaxWidth(pointsData);

	table.style.borderCollapse = 'collapse';
	table.align = 'center';

	for (let i = 0; i < pointsData.length; i++) {
		let tr = document.createElement('tr');

		for (let j = 1; j < maxWidth + 1; j++) {
			let td = document.createElement('td');

			td.style.width = '15px';
			td.style.height = '15px';

			if (pointsData[i].indexOf(j) !== -1) {
				td.style.backgroundColor = 'black';
			}

			tr.appendChild(td);
		}

		table.appendChild(tr);
	}

	document.body.appendChild(table);
}

var points = [
	[3, 4, 5, 24, 25, 26, 27, 31, 32, 33, 34, 35],
	[2, 3, 9, 16, 25, 26, 30, 31, 32, 33, 34, 35, 36],
	[1, 2, 9, 10, 15, 16, 25, 26, 29, 30, 31, 35, 36, 37],
	[1, 2, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 25, 26, 29, 30, 31],
	[1, 2, 4, 5, 6, 7, 9, 12, 13, 16, 25, 26, 29, 30, 31],
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 16, 25, 26, 30, 31, 32, 33, 34],
	[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 25, 26, 32, 33, 34, 35, 36],
	[2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 25, 26, 35, 36, 37],
	[2, 3, 4, 7, 8, 12, 13, 19, 20, 21, 25, 26, 35, 36, 37],
	[2, 3, 7, 8, 20, 21, 22, 24, 25, 26, 29, 30, 31, 35, 36, 37],
	[2, 3, 4, 5, 7, 8, 9, 21, 22, 23, 24, 25, 30, 31, 32, 33, 34, 35, 36],
	[2, 3, 4, 5, 7, 8, 9, 22, 23, 24, 31, 32, 33, 34, 35]
];

doDrawing(points);