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

// 1. -> vypis Daliborove oblubene jedla pod seba
// 2. -> vypis rozdiel Igorovej a Daliborovej vysky
