// function setup() {
// 	let cnv = createCanvas(window.innerWidth, window.innerHeight)
// 	cnv.parent('background')
// 	background(0, 0, 40)
// 	stars = new Array(40)
// 	for (var i = 0; i < stars.length; i++) {
// 		stars[i] = new Star()
// 	}
// 	// frameRate(2)
// }

// let stars

// function draw() {
// 	background(0, 0, 40)
// 	for (var i = 0; i < stars.length; i++) {
// 		stars[i].show()
// 	}
// }

// class Star {
// 	constructor() {
// 		this.pos = createVector(random(width), random(height))
// 		this.vel = createVector(0, 0)
// 		this.acc
// 		this.r = random(5, 10)
// 	}
// 	show() {
// 		this.acc = p5.Vector.random2D()
// 		this.vel.add(this.acc)
// 		this.vel.setMag(1)
// 		this.pos.add(this.vel)
// 		this.pos.x %= width
// 		this.pos.y %= height
// 		fill(0, 0, 200)
// 		ellipse(this.pos.x, this.pos.y, this.r)
// 	}
// }