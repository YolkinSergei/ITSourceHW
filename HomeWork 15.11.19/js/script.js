'use strict';

/*
	1 задание

	Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и
	методом start(), при вызове которого – coffeeMachine.start() – через 3 
	секунды появляется окно с сообщением, записанным в свойстве объекта message.
*/
let coffeeMachine = {
	message: 'Your coffee is ready!',
	start () {
		setTimeout(() => {alert(this.message)}, 3000);
	}
};

coffeeMachine.start();

/*
	2 задание

	Создайте объект calculator с методами:
	- read() запрашивает prompt для двух значений и сохраняет их как свойства 
	  объекта x, y
	- sum() возвращает сумму этих двух значений
	- multi() возвращает произведение этих двух значений
	- diff() возвращает разницу
	- div() возвращает частное
*/
let calculator = {
	x: null,
	y: null,

	read() {
		this.x = +prompt('Please enter X:');
		this.y = +prompt('Please enter Y:');
	},

	sum() {
		return this.x + this.y;
	},

	multi() {
		return this.x * this.y;
	},

	diff() {
		return this.x - this.y;
	},

	div() {
		return this.x / this.y;
	}
};

/*
	3 задание

	Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, 
	getDiv. Методы объекта ничего не реализуют, а только выводят в alert 
	сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все 
	методы используют функционал ранее созданного калькулятора.
*/
let me = {
	x: 1,
	y: 0,

	getSum() {
		return `${this.x} + ${this.y} = ${calculator.sum.call(this)}`;
	},

	getDiff() {
		return `${this.x} - ${this.y} = ${calculator.diff.call(this)}`;
	},

	getMulti() {
		return `${this.x} * ${this.y} = ${calculator.multi.call(this)}`;
	},

	getDiv() {
		return `${this.x} / ${this.y} = ${calculator.div.call(this)}`;
	}
};

alert(me.getSum());
alert(me.getDiv());

/*
	4 задание

	Создайте функцию hello(), которая выводит приветствие пользователю. 
	Создайте два объекта, содержащие поля firstname, lastname. Используя 
	метод call и функцию hello() приветствуйте каждого из пользователей 
	персонально.
*/
let hello = function() {
	console.log(`Hello, dear ${this.firstname} ${this.lastname}!`);
};

let user1 = {
	firstname: 'Sergey',
	lastname: 'Yolkin'
}, user2 = {
	firstname: 'Taras',
	lastname: 'Shevchenko'
};

hello.call(user1);
hello.call(user2);

/*
	5 задание

	Создайте объект counter с методами увеличения, уменьшения значения 
	счетчика и методом возврата текущего значения. Используйте концепцию 
	chaining для создания цепочки вызовов.

	var current = counter.inc().inc().dec().inc().dec().getValue();
	alert(current); // 1
*/
let counter = {
	value: 0,

	inc () {
		this.value++;

		return this;
	},

	dec () {
		this.value--;

		return this;
	},

	getValue() {
		return this.value;
	}
};

var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current);

/*
	6 задание

	Создайте объект array с методом инициализации начального значения массива,
	c методами добавления, удаления последнего элемента массива и методом 
	возврата текущего состояния массива. Используйте концепцию chaining для 
	создания цепочки вызовов.

	array
	.setValue([1])
	.push(2)
	.push(3)
	.push(3)
	.pop();

	var currentValue = array.getValue();
	console.log(currentValue); // [1, 2, 3]
*/
let array = {
	value: [],

	setValue(value) {
		this.value = value;

		return this;
	},

	push (value) {
		this.value.push(value);

		return this;
	},

	pop () {
		this.value.pop();

		return this;
	},

	getValue () {
		return this.value;
	}
};

array.setValue([1]).push(2).push(3).push(3).pop();

var currentValue = array.getValue();
console.log(currentValue); // [1, 2, 3]

/*
	7 задание

	Придумайте алгоритм расчета суммы всех фактических параметров функции 
	с использованием только рекурсии:

	console.log( sum(1, 2, 3, 4, 5) ); // 15
*/
function sum (a, ...b) {
	return (b.length === 1) ? (a + b[0]) : (a + sum(...b) );
}

console.log( sum(1, 2, 3, 4, 5) ); // 15

/*
	8 задание

	Есть следующий код:
	var country = {
	    name: 'Ukraine',
	    language: 'ukrainian',
	    capital: {
	        name: 'Kyiv',
	        population: 2907817,
	        area: 847.66
	    }
	};

	function format(start, end) {
	    console.log(start + this.name + end);
	}


	Допишите код, чтобы в консоли браузера появились строки, которые написаны
	в комментариях:


	format.call( Ваш код ); // Ukraine
	format.apply( Ваш код ); // [Ukraine]
	format.call( Ваш код ); // Kyiv
	format.apply( Ваш код ); // Kyiv
	format.apply( Ваш код ); // undefined

*/
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, '', '') // Ukraine
format.apply(country, ['', '']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply({}, ['', '']); // undefined

/*
	9 задание

	Создайте объект user с полем name. Создайте функцию format с параметрами 
	start и end:


	function format(start, end) {
	    console.log(start + this.name + end);
	}

	Привяжите функцию format() к объекту user таким образом, чтобы ее вызов 
	возвращал отформатированное имя пользователя


	userFormat('<<<', '>>>'); // <<<John>>>

	Реализуйте 2 версии текущего задания, используя:
	1. Анонимную функцию;
	2. Метод bind().
*/
// функция format у нас уже есть с прошлого задания
let user = {
	name: 'John'
};

// Через анонимную функцию
let userFormat = (start, end) => { format.call(user, start, end) };
userFormat('<<<', '>>>'); // <<<John>>>

// Через bind()
userFormat = format.bind(user);
userFormat('<<<', '>>>'); // <<<John>>>

/*
	10 задание
	Напишите функцию concat, которая соединяет две строки, разделенные 
	каким-то символом: разделитель и строки передаются в параметрах функции. 
	Используя карринг, создайте новую функцию hello, которая которая выводит 
	приветствие тому, кто передан в ее параметре:

	hello('World'); // Hello World
	hello('John'); // Hello John
*/
function concat(separator, str1, str2) {
	return str1 + separator + str2;
}

hello = concat.bind(null, ',', 'Hello');

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Level up /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/* 
	Эффект печатной машинки. 

	Создайте объект со свойством delay и методами appendTo и appendText. 
	Метод appendTo с помощью DOM API (Native JS) добавляет абзац в контейнер, 
	переданный в параметре метода. Метод appendText может дописывать текст в 
	добавленный элемент. Создайте массив строк и запустите цикл по этому 
	массиву. С периодичностью, определенной в свойстве delay, в текст 
	добавленного html-элемента добавляется соответствующий по порядку элемент 
	массива. Учтите, что для доступа к вашему элементу не должен производиться
	поиск по DOM-дереву.
*/
let typewriter = {
	delay: 0.05,
	pElement: null,
	commonCount: 0,

	appendTo(div) {
		let pElement = document.createElement('p');

		this.pElement = pElement;

		div.appendChild(this.pElement);
	},

	appendText(stringValue) {
		stringValue = stringValue.split('');

		for (let i = 0; i < stringValue.length; i++) {
			let pElement = this.pElement;

			setTimeout( () => {
				pElement.textContent += stringValue[i];
			}, this.commonCount * this.delay * 1000);	

			this.commonCount++;
		}
	}
};

let text = [
	'У лукоморья дуб зелёный;',
	'Златая цепь на дубе том:',
	'И днём и ночью кот учёный',
	'Всё ходит по цепи кругом;',
	'Идёт направо — песнь заводит,',
	'Налево — сказку говорит.',
	'Там чудеса: там леший бродит,',
	'Русалка на ветвях сидит;',
	'Там на неведомых дорожках',
	'Следы невиданных зверей;',
	'Избушка там на курьих ножках',
	'Стоит без окон, без дверей;',
	'Там лес и дол видений полны;',
	'Там о заре прихлынут волны',
	'На брег песчаный и пустой,',
	'И тридцать витязей прекрасных',
	'Чредой из вод выходят ясных,',
	'И с ними дядька их морской;',
	'Там королевич мимоходом',
	'Пленяет грозного царя;',
	'Там в облаках перед народом',
	'Через леса, через моря',
	'Колдун несёт богатыря;',
	'В темнице там царевна тужит,',
	'А бурый волк ей верно служит;',
	'Там ступа с Бабою Ягой',
	'Идёт, бредёт сама собой,',
	'Там царь Кащей над златом чахнет;',
	'Там русский дух… там Русью пахнет!',
	'И там я был, и мёд я пил;',
	'У моря видел дуб зелёный;',
	'Под ним сидел, и кот учёный',
	'Свои мне сказки говорил.'
];

let div = document.querySelector('#textContainer');

for (let i = 0; i < text.length; i++) {
	typewriter.appendTo(div);
	typewriter.appendText(text[i]);
}

typewriter.commonCount = 0;

/*
	Используя дескрипторы свойств создайте объект для описания местности со 
	свойствами latitude, longitude и title. Свойства latitude и longitude 
	могут содержать только цифры, все, что будет попадать в эти поля, 
	становится числом. Если при преобразовании к числу получается NaN, то в 
	качестве значения записывается null. То же для поля title, только все 
	данные будут преобразовываться к строке.
*/
var place = {
	_latitude: null,
	_longitude: null,
	_title: null
};

Object.defineProperty(place, 'latitude', {
	set(value) {
		value = +value;

		if (value != value) {
			value = null;
		}

		this._latitude = value;
	},

	get() {
		return this._latitude;
	}
});

Object.defineProperty(place, 'longitude', {
	set(value) {
		value = +value;

		if (value != value) {
			value = null;
		} 

		this._longitude = value;
	},

	get() {
		return this._longitude;
	}
});

Object.defineProperty(place, 'title', {
	set(value) {
		this._title =  '' + value;
	},

	get() {
		return this._title;
	}
});