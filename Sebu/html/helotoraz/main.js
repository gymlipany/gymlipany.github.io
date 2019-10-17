let cierna, ruzova
let x, y, r

function setup() {
    createCanvas(windowWidth, windowHeight)
    
    cierna = color(0, 0, 0)
    ruzova = color(255, 0, 255)
    x = 100
    y = 100
    r = 30
}

function draw() {
    background(cierna)
    fill(ruzova)

    ellipse(x, y, r, r)
}