class Kruh{
  constructor(x, y, farba){
    this.x = x
    this.y = y
    this.farba = farba
  }
}

let pl = []

function setup() {
  createCanvas(800, 600)

  let k1  = new Kruh(90, 80, "blue")
  let k2  = new Kruh(120, 35, "red")
  let k3  = new Kruh(150, 95, "green")

  pl.push(k1)
  pl.push(k2)
  pl.push(k3)  
}

function draw() {
  background(0)
  for(let konKruh of pl){
    fill(konKruh.farba)
    circle(konKruh.x, konKruh.y, 80)
  }

}
