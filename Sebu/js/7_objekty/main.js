// this = TENTO objekt

let ziak = {
    vek: 18,
    meno: "Sebo",
    pozdravSa: function() {
        console.log("Ahoj ja som " + this.meno)
    }
}


console.table(ziak)
ziak.pozdravSa()

let janko = {vek: 18}
let zuza = janko
zuza.vek = 4
console.log(janko.vek)

let h = [1, 2, 3, 4]
let l = h
l[0] = "X"


function zmenVek(obj) {
    obj.vek = 14
}

// kopiruju sa : Number, String, Boolean
// priamo sa pouzivaju: Object, Array

// kopia janka (objektu)
// uz su to 2 rozne objekty
let janko2 = {...janko}
