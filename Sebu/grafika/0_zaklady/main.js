
let x = 0
let y = 0
let z = 0

// iba pri spupsteni sa zavola
function setup() {

    // platno s 300, 300
    createCanvas(300, 300)
}

// 60 krat za sekundu sa vola
function draw() {
    // biela
    stroke(x%255, y%255, z%255)
    line(0, x, x, 100)

    // biela
    //     R  G    B
    stroke(z%255, x%255, y%255)
    line(x, x, x*2, x**2)

    x++
    z += 0.2*x
    y += 0.5
}