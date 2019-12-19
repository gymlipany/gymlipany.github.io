let b = 0
let a = 0
function setup() {
    createCanvas(1366, 600)
}
function draw() {
    stroke(200, 0, 0)
    line(2000, 0, 0, b*0.9)
    a++
    b += a/0.6
}
$("#1").click(setup)