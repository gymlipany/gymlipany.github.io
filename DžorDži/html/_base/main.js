
let x
let y = 0
function setup() {
    createCanvas(300, 300)
}
function draw() {
    stroke(100, 0, 0)
    line(x, y, x*0.8, y*0.9)
for (x = 0; x < 300; x++) {
    if (x == 300) {
        console.log("jej")
    }
    if (x < 150) {
        console.log("cau")
    }
    if (x > 150) {
        console.log("ahoj")
    }
    }
y += x*0.6
