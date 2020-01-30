/*

Urobte triedu Kruh, ktora nam bude vraciat Kruhy.
Konštruktor bude brať x, y, farba.
classy help: Sebu/js/11_class/main.js

Kazdy Kruh má:
  - number x
  - number y
  - string farba

Vytvorte hore prázdne pole, budeme do neho ukladať Kruhy.
V setup() do poľa pridajte 3x kruh s inými hodnotami.
V draw() vykreslite všetky kruhy, ktoré su teraz v poli.
*/


class Kruh {
  constructor(xSuradnica, ySuradnica, farbaKruhu, r ) {
    this.x = xSuradnica // number
    this.y = ySuradnica // number
    this.farba = farbaKruhu // string, "red", "green", "blue"
    this.r = r
  }
}

let kruhy = []
let hrac
let v = { x: 0, y: 0 }
let d = 1

function setup() {
  createCanvas(600, 300)

  console.log("sirka = " + width)
  console.log("vyska = " + height)

  for (let i = 0; i <= 10; i++) {
    let x = 10 + (width-20)*Math.random()
    let y = 10 + (height-20)*Math.random()
    kruhy.push(new Kruh(x, y, "red", 10))
  }

  hrac = {
    x: width/2,
    y: height/2,
    r: 20,
    farba: "yellow"
  }

}

function draw() {


  hrac.x += v.x
  hrac.y += v.y

  background(0)

  // vykresli kruhy
  for (let k of kruhy) {
    fill(k.farba)
    circle(k.x, k.y, k.r*2)
  }

  // vyhresli hraca
  fill(hrac.farba)
  circle(hrac.x, hrac.y, hrac.r)
}

// tuto funkciu hlada p5ka, p5ka nam ju spusti ked stlacime klaves
function keyPressed() {
  if (keyCode == UP_ARROW) {
    v.y = -d
  }
  else if (keyCode == DOWN_ARROW) {
    v.y = d
  }
  else if (keyCode == LEFT_ARROW) {
    v.x = -d
  }
  else if (keyCode == RIGHT_ARROW) {
    v.x = d
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW) {
    v.y = 0
  }
  else if (keyCode == DOWN_ARROW) {
    v.y = 0
  }
  else if (keyCode == LEFT_ARROW) {
    v.x = 0
  }
  else if (keyCode == RIGHT_ARROW) {
    v.x = 0
  }
}