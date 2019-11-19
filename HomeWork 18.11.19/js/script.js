//'use strict';

function Figure (x, y, color = 'white') {
	x = x;

	this.draw = (ctx) => {
		ctx.beginPath();

		ctx.fillStyle = color;
		ctx.strokeStyle = color;
	}
}

function Line(x, y, x2, y2, color) {
	Figure.call(this, x, y, color);

	let _parentDraw = this.draw;
	this.draw = function(ctx) {
		_parentDraw.call(this, ctx);		

		ctx.moveTo(x, y);
		ctx.lineTo(x2, y2);
		ctx.stroke();

		ctx.strokeStyle = null;
	}		
}

function Circle(x, y, r, color) {
	Figure.call(this, x, y, color);

	let _parentDraw = this.draw;
	this.draw = function(ctx) {
		_parentDraw.call(this, ctx);

		ctx.arc(x, y, r, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();
	}		
}

function QuarterCircle(x, y, r, color, degreeStart, degreeEnd) {
	Figure.call(this, x, y, color);

	let _parentDraw = this.draw;
	this.draw = function(ctx) {
		_parentDraw.call(this, ctx);

		ctx.moveTo(x, y);
		ctx.arc(x, y, r, degreeStart, degreeEnd, false);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}		
}

function Rect(x, y, width, height, color) {
	Figure.call(this, x, y, color);

	let _parentDraw = this.draw;
	this.draw = function(ctx) {
		_parentDraw.call(this, ctx);

		ctx.fillRect(x, y, width, height);
	}		
}

function Text(text, x, y, color, font, degree) {
	Figure.call(this, x, y, color);

	let _parentDraw = this.draw;
	this.draw = function(ctx) {
		_parentDraw.call(this, ctx);

		ctx.font = font;
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(degree);
		ctx.fillText(text, 0, 0);
		ctx.restore();
	}		
}

function Canvas (id, width, height) {
	let canvas = document.querySelector('#' + id);

	if (!canvas) {
		canvas = document.createElement('canvas');
		canvas.setAttribute('id', id);
		document.body.appendChild(canvas);
	}

	if (width) {
		canvas.width = width;
	}

	if (height) {
		canvas.height = height;
	}

	let ctx = canvas.getContext('2d');

	this.add = function() {
		for (let i = 0; i < arguments.length; i++) {
			arguments[i].draw(ctx);
		}
	}
}

let getRandomColor = () => ( 'rgb(' 
		+ parseInt(Math.random() * 255) + ', ' 
		+ parseInt(Math.random() * 255) + ', ' 
		+ parseInt(Math.random() * 255) + ')');

var drawArea = new Canvas('canvasID', 600, 450);

drawArea.add( new Rect(0, 0, 600, 450, '#001a33') );


for (let x = 0; x < 600; x += 15) {
	drawArea.add( new Line(x, 0, x, 450, getRandomColor()) );
}

for (let y = 0; y < 450; y += 15) {
	drawArea.add( new Line(0, y, 600, y, getRandomColor()) );
}


drawArea.add( new Circle(300, 225, 204, 'silver') );
drawArea.add( new Circle(300, 225, 200, 'black') );
drawArea.add( new Circle(300, 225, 138, 'silver') );
drawArea.add( new Circle(300, 225, 134, 'black') );

drawArea.add(new Text('B', 170, 157, 'white', '70px arial', -Math.PI / 3.4));
drawArea.add(new Text('M', 271, 82, 'white', '70px arial'));
drawArea.add(new Text('W', 395, 115, 'white', '70px arial', Math.PI / 3.4));

drawArea.add( new QuarterCircle(300, 225, 127, '#0073e6', 0, Math.PI / 2) );
drawArea.add( new QuarterCircle(300, 225, 127, '#f2f2f2', Math.PI / 2, Math.PI) );
drawArea.add( new QuarterCircle(300, 225, 127, '#0073e6', Math.PI, Math.PI * 1.5) );
drawArea.add( new QuarterCircle(300, 225, 127, '#f2f2f2', Math.PI * 1.5, 0) );
drawArea.add( new Rect(296, 96, 8, 260, 'black') );
drawArea.add( new Rect(170, 221, 260, 8, 'black') );