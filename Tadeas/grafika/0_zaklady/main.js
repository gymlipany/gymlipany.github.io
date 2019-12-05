let x = 0
let y = 0
let z = 0

function setup() {
    createCanvas(300, 300)
}

function draw() {
stroke(x%255, y%255, y%255)
line(0, x, x, 100)

stroke(z%255, x%255, y%255)
line(x, x, x*2, x**2)

x++
z += 0.2*x
y += 0.5
}