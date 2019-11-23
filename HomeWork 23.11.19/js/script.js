'use strict';

/*
	1 задание

	Добавьте в прототип конструктора Date метод для форматирования даты по 
	определенному формату: Date.prototype.format. Символы форматирования 
	частей даты можете взять любые из существующих, в примере - отсюда: 
	(https://www.w3schools.com/php/func_date_date_format.asp)

	var d = new Date();
	d = d.format('Y-m-d');
	console.log(d); // 2018-09-10
*/

Date.prototype.format = function(format) {
	return format.toUpperCase().replace('Y', this.getFullYear())
		.replace('M', this.getMonth())
		.replace('D', this.getDate());
};


let d = new Date();

d = d.format('Y-m-d');

console.log(d);

/*
	2 задание

	Добавьте в прототип конструктора Array метод, позволяющий поменять 
	элементы массива местами по индексам. Метод изменяет исходный массив

	var data = ['a', 'c', 'b'];
	data = data.swap(1, 2);
	console.log(data); // ['a', 'b', 'c]
*/
Array.prototype.swap = function(index1, index2) {
	if (index1 && index2 && Math.max(index1, index2) < this.length) {
		let temp = this[index1];

		this[index1] = this[index2];
		this[index2] = temp;
	}

	return this;
};

let data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]

/*
	3 задание

	В прототипном стиле напишите класс Warrior для создания игроков “файтинга”.
	Игроки должны иметь свойство health - которое определяет базовые боевые 
	возможности игрока (выносливость), и power - сила удара. Оба свойства 
	определяются при создании экземпляра класса. Также игрок должен иметь 
	метод hit для нанесения удара другому игроку. При нанесении удара “жертва”
	теряет энергии (health) соответственно значению power игрока, который 
	наносит удар. Также все игроки имеют возможность лечиться - метод heal.

	Добавляйте другие методы и свойства на свое усмотрение - что считаете 
	нужным.

	Создайте несколько (минимум два) экземпляров класса Warrior с разными 
	способностями и возможностями. И напишите пример боя, используя 
	соответствующие методы и свойства.
*/
let gameLog = (value, textTag = 'p') => {
	//console.log(value);
	let div = document.querySelector('div#gameLog');

	if (!div) {
		div = document.createElement('div');
		div.setAttribute('id', 'gameLog');
		document.body.appendChild(div);
	}

	let p = document.createElement(textTag);
	p.textContent = value;//
	div.appendChild(p);
}

let getRandomNumber = (from, to) => {
	return Math.round(from + Math.random() * (to - from));
}

let player = {
	__defaultHealth: 100, 
	__defaultPower: 10,
	__unknownPlayerIndex: 0,

	getDefaultName() {
		return 'Player_' + ++this.__unknownPlayerIndex;
	},

	getHealthValue() {
		return this.__health;
	},

	setHealthValue(value) {
		this.__health = value;
	},

	getName() {
		return this.__name;
	},

	getPower() {
		return this.__power;
	},

	setPower(value) {
		this.__power = value;
	},

	run(enemy) {
		let variant = getRandomNumber(1, 10);

		if (variant > 8) {
			this.fail(enemy);
		} else {
			if (variant < 3) {
				this.heal();
			}

			if (variant === 1) {
				this.superPower(enemy);
			} else {
				this.hit(enemy);
			}
		}

		return Math.min( enemy.getHealthValue(), this.getHealthValue() ); 
	},

	hit(enemy) {
		enemy.setHealthValue( enemy.getHealthValue() - this.getPower() );

		if ( enemy.getHealthValue() > 0 ) {
			gameLog(`Игрок ${this.getName()} атаковал игрока ${enemy.getName()}`
				+ ` и нанёс ${this.getPower()} урона. У игрока ${enemy.getName()}`
				+ ` осталось ${enemy.getHealthValue()} ед. жизни.`);
		} else {
			gameLog(`Игрок ${this.getName()} добил игрока ${enemy.getName()}, `
				+ `нанеся ${this.getPower()} урона.`);
		}
	},

	heal() {
		let healValue = getRandomNumber(1, 10);

		this.setHealthValue( this.getHealthValue() + healValue );

		gameLog(`Игрок ${this.getName()} нашёл аптечку на ${healValue} ед.`
			+ ` и теперь у него ${this.getHealthValue()} ед. жизни`);
	},

	fail(enemy) {
		let failDamage = getRandomNumber(0, 10),
			failType = getRandomNumber(1, 3),
			failString;

		switch (failType) {
			case 1: {
				failString = 'подскользнулся на банановой кожуре и упал';
				break;
			}
			case 2: {
				failString = 'промахнулся и попал пальцем в розетку';
				break;
			}
			case 3: {
				failString = 'отвлекся на фанатку и ударился мизинцем';
				break;
			}
		}

		this.setHealthValue( this.getHealthValue() - failDamage );

		gameLog(`Игрок ${this.getName()} ${failString}, из-за чего пропускает ход` +
			(failDamage > 0 
				? ` и получает ${failDamage} ед. урона.` 
				: ', чудом не получив не урона.'));

		if ( this.getHealthValue() <= 0 ) {
			gameLog(`Игрок ${this.getName()} погибает. ${enemy.getName()} побеждает!`);
		}
	},

	superPower(enemy) {
		this.hit(enemy);
	}
};

function Warrior(health, power, name) {
	this.__health = health || this.__defaultHealth;
	this.__power = power || this.__defaultPower;
	this.__name = name || this.getDefaultName();
}

Warrior.prototype = player;

let json = new Warrior(150, 7, 'Джейсон Стетхем'),
	diesel = new Warrior(150, 7, 'Вин Дизель'),
	roundNumber = 1,
	players = [];

diesel.superPower = function(enemy) {
	gameLog(`${this.getName()} применяет суперсилу на один ход - двойной урон!`);

	this.setPower( this.getPower() * 2);
	this.hit(enemy);
	this.setPower( this.getPower() / 2);
};

json.superPower = function(enemy) {
	let healValue = getRandomNumber(7, 15);

	gameLog(`${this.getName()} применяет суперсилу на один ход: восстанавливает `
		+ `${healValue} ед. здоровья.`);

	this.setHealthValue( this.getHealthValue() + healValue );
};

gameLog(`${json.getName()} vs ${diesel.getName()}`, 'h2');
gameLog('Кидаем жребий...');

if (getRandomNumber(1, 2) > 1) {
	players.push(json, diesel);
} else {
	players.push(diesel, json);
}

gameLog(`Удача на стороне игрока ${players[0].getName()} - он атакует первым!`);

while (json.getHealthValue() > 0 && diesel.getHealthValue() > 0) {
	gameLog('Round ' + roundNumber, 'h3');

	if ( players[0].run(players[1]) <= 0 ) {
		continue;
	}

	if ( players[1].run(players[0]) <= 0) {
		continue;
	};

	roundNumber++;
};