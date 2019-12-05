let y = 0
let x = 0 
function setup() {
    createCanvas(1366, 1300)
}
function draw() {
y += x*0.6
x++
    stroke(100, 0, 0)
    line(x, y, x*0.8, y*0.9)
}
