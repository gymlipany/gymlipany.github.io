// funkcie
// podprogram
// procedúra

function pozdrav() {
    console.log("AHOJ!!!")
}

// () = volanie funkcie = poc tu a zrob co maš robic

pozdrav()
pozdrav()
pozdrav()

// parametre = co chceme dať funkcii
// return = čo chcem aby funkcia vrátila

function spocitaj(a, b) {
    return a + b
}

let g = spocitaj(3, 4)
console.log(g)
console.log("Sucet 2 a 6 je " + spocitaj(2, 6))

// console.log(x) = funkcia, ktora vypise x do konzoly


function vypis_a_vrat(x) {
    console.log(x)
    return x
}

let p = vypis_a_vrat(3)
console.log("p je " + p)

// premenne ktore sa dostanu do funkcie
// sa vzdy kopiruju, nie priamo pouzivaju

// toto medzi () su parametre
function zmen(cislo) {
    cislo = 19
    let zanikni = 4
    console.log("cislo vnutri funkcie = " + cislo)
    // na konci funkcie vsetky premenne
    // vnutri nej a jej parametre
    // zaniknu
}

// console.log(zanikni) // chyba lebo zanikni uz neexistuje
// preto existuje return !!

let l = 4
zmen(l)
console.log("lko po zmene = " + l)

// closure, závierka
let premenna // globálna premenná

function f() {
    // vsetky premenne a funkcie pred definiciou funkcie
    // sa daju vnutri nej pouzit

    // "premenna" vnutri funkcie je zachytena
    // závierkou (captured by closure)
    premenna = 13
    console.log(premenna)

    let t = 4 // lokálna premenná
    // zanikne po skončení funkcie
    // = prem. ktora bola definovana vnutri funkcie
}

f()
console.log(premenna)

