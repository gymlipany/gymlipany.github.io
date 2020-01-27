

class Kruh {
  constructor(x, y, farba){
    this.x = x
    this.y = y
    this.farba= farba
  }
}

let rrs = []

function setup() {
  createCanvas(800, 600)
  let k1 = new Kruh(12, 34, "red" )
  let k2 = new Kruh(22, 66, "green")
  let k3 = new Kruh(11, 12, "blue")
  rrs.push(k1)
  
  rrs.push(k2)
  
  rrs.push(k3)
}

function draw() {
  background(0)

  for (let krKruh of rrs){
    fill(krKruh.farba)
    circle(krKruh.x,krKruh.y, 30)
    
  }
}
