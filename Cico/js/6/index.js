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
  constructor(x, y, farba) {
    this.x = x // number
    this.y = y // number
    this.farba = farba // string, "red", "green", "blue"
  }
}

let kruhy = []

function setup() {
  createCanvas(800, 600)
  kruhy.push(new Kruh(200, 500, "red"))
  kruhy.push(new Kruh(500, 70, "green"))
  kruhy.push(new Kruh(70, 100, "blue"))
}

function draw() {
  background(0)
  
  for (let k of kruhy) {
    fill(k.farba)
    circle(k.x, k.y, 69)
  }
}