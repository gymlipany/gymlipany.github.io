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

// 1. -> ulozte do premennej json string objektu, ktory ma x=4 a y=3
// 2. -> prekonvertujte ten json na objekt, vypiste len x

//1.)
let object = {
  x: "harabin",
  y: 1111
}
let utvar = JSON.stringify(object)

//2.)
let vysledok = JSON.parse(utvar)
console.log(vysledok.x)

console.log("======== ULOHA NA DOMA =============")
// obedy je json string, ale ked date parse vam vypluje array
let OBEDY = `[
  {
    "den": "Pondelok",
    "datum": "9. 3. 2020",
    "jedla": [
      "Polievka karfiolová so zeleninou",
      "Pasta sciutta/špagety s mletým mäsom/",
      "Čaj čierny"
    ]
  },
  {
    "den": "Utorok",
    "datum": "10. 3. 2020",
    "jedla": [
      "Polievka pórová so zemiakmi ",
      "Bravčový guláš segedínsky",
      "Knedľa kysnutá ",
      "Voda s ovocným sirupom s najmenej 50% ovocnej zložky",
      "Pomaranče"
    ]
  },
  {
    "den": "Streda",
    "datum": "11. 3. 2020",
    "jedla": [
      "Polievka fazuľová s fliačkami",
      "Hovädzia pečienka znojemská ",
      "Zemiaky",
      "Šalát z čínskej kapusty s kukuricou",
      "Ovocný nápoj "
    ]
  }
]`

// 1. -> vypiste, ake je prve jedlo v pondelok
// 2. -> vypiste, aky je datum v Stredu
// 3. -> pre kazdy den (for let of), vypiste array jediel v tento den (mozete aj najprv vypisat ze o aky den sa jedna)

