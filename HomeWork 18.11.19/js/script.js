//'use strict';

function Figure (x, y, color = 'white') {
	this.beginX = x;
	this.beginY = y;
	this.color = color;

	this.draw = (ctx) => {
		ctx.beginPath();

		ctx.fillStyle = this.color;
		ctx.strokeStyle = this.color;
	}
}

function Line(x1, y1, x2, y2, color) {
	Figure.call(this, x1, y1, color);
	this.endX = x2;
	this.endY = y2;

	let _parentDraw = this.draw;
	this.draw = function(ctx) {
		_parentDraw.call(this, ctx);		

		ctx.moveTo(this.beginX, this.beginY);
		ctx.lineTo(this.endX, this.endY);
		ctx.stroke();

		ctx.strokeStyle = null;
	}		
}

function Circle(x, y, r, color) {
	Figure.call(this, x, y, color);
	this.r = r;

	let _parentDraw = this.draw;
	this.draw = function(ctx) {
		_parentDraw.call(this, ctx);

		ctx.arc(this.beginX, this.beginY, this.r, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();
	}		
}

function QuarterCircle(x, y, r, color, degreeStart, degreeEnd) {
	Figure.call(this, x, y, color);
	this.r = r;
	this.degreeStart = degreeStart;
	this.degreeEnd = degreeEnd;

	let _parentDraw = this.draw;
	this.draw = function(ctx) {
		_parentDraw.call(this, ctx);

		ctx.moveTo(this.beginX, this.beginY);
		ctx.arc(this.beginX, this.beginY, this.r, this.degreeStart, this.degreeEnd, false);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}		
}

function Rect(x, y, w, h, color) {
	Figure.call(this, x, y, color);
	this.w = w;
	this.h = h;

	let _parentDraw = this.draw;
	this.draw = function(ctx) {
		_parentDraw.call(this, ctx);

		ctx.fillRect(this.beginX, this.beginY, this.w, this.h);
	}		
}

function Text(text, x, y, color, font, degree) {
	Figure.call(this, x, y, color);
	/*this.degree = degree;
	this.text = text;
	this.font = font;
	this.translateX = translateX;
	this.translateY = translateY;*/

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

function getRandomColor() {
	return 'rgb(' 
		+ parseInt(Math.random() * 255) + ', ' 
		+ parseInt(Math.random() * 255) + ', ' 
		+ parseInt(Math.random() * 255) + ')';
}

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