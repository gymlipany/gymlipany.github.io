let x = 0
let y = 0

function setup() {
    createCanvas(1366, 650)
}
function draw() {
    stroke(100, 0, 0)
    line(x, y, x*0.8, y*0.9)
x++
y += x*0.6

}
if (x == 650){
    console.log("konec")
    }
else if (x > 650) {
    console.log("zaciatok")
}
else {
    
}
