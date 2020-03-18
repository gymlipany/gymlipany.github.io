// Potrebujeme
// - JSON
// - Promise
// - async/await

// let abc = ["ahoasdasdasdasdj", "ahoj", "eys"]
// let prvy = abc[3]
// console.log(prvy)

let obj = {
  meno: "Igor",
  vyska: 170,
  priezvisko: "Mätovič",
  oblubeneJedla: ["Meso", "Marchva"],
  kamarat: {
    meno: "Dalibor",
    vyska: 150,
    priezvisko: "Mätovič",
    oblubeneJedla: ["Kolbasy", "Meso", "Marchva"],
  }
}

// meno objektu?
console.log(obj.meno)

// meno kamarata?
console.log(obj.kamarat.meno)

// for (let j of ???) {
//  vypis(j)
// }

// 1. -> vypis Daliborove oblubene jedla pod seba, BONUS za 10 bodov pre chrabromlyn = pouzite pri tom for co som napsal hore
for (let j of obj.kamarat.oblubeneJedla) {
  console.log(j)
}

let dlzka = obj.kamarat.oblubeneJedla.length
console.log(dlzka)

// 2. -> vypis rozdiel Igorovej a Daliborovej vysky
console.log(obj.vyska - obj.kamarat.vyska)

// JSON = jazyk pre vyjadrovanie dat / format dát
// cez internet sa daju posielat len stringy, nie objekty z js
// js objekt -> string -> posle -> objekt

// altgr+7 = viac riadkove uvodzovky
let ss = `{
  "meno": "Joooojo",
  "vek": 170
}`

// ekvivalentne zapis stringu
let a = "ahoj"
let b = 'ahoj'
let c = `ahoj`

let osoba = {
  meno: "John",
  vek: 18
}

// konvertuj js objekt do JSON string
let jsonOsoby = JSON.stringify(osoba)
console.log("Json osoby: " + jsonOsoby)

// konvertuj json do js objektu
let objektSSka = JSON.parse(ss)
console.log(objektSSka)

let jsonArrayu = `["Pes", "macka", "kotleba"]`
console.log(JSON.parse(jsonArrayu))

// 1. -> ulozte do premennej json string objektu, ktory ma nejake x a y
// 2. -> prekonvertujte ten json na objekt, vypiste len x


let einstein = `{
  "vyska": 150,
  "IQ": 160
}`

let jsonEinstein = JSON.parse(einstein.IQ)
console.log(jsonEinstein)