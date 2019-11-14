let vyraz = 1 == 2
console.log("vyraz 1==2 je " + vyraz)

// pretypuj 3 do "3"
let str_trojky = String(3)

// pretypuj true do "true"
console.log("1==1 je " + String(1==1))


let a = 6
let b = 5
let a_vacsie_jak_b = a > b
console.log(a_vacsie_jak_b)

// AND
let h = a > 6 && b < 4 // bude true ked a > 6 a zaroven b < 4

// OR
let j = a > 6 || b < 4 // bude true ked a > 6 ALEBO b < 4

/*
ak toto plati ta urob hento
*/

// PODMIENKY, ich vyuzivanie sa vola vetvenie programu
// graficky nacrt/zapis programu sa vola
// vývojový diagram

// () = podmienka, ide tam boolean (true/false)
// medzi {} je kod, ktory sa spusti ak je podmienka true
if (h) {
    console.log("PLATI!!!!!")
}


if (a == b) {
    console.log("a je rovne b")
}
else {
    console.log("a nie je rovne, teda je vacsie alebo menise")
}

/*
mamcislo p, vypis ci je p rovne 0,
p vacsie ako 0, alebo p mensie ako 0
*/

p = 4
if (p == 0) {
    console.log("Rovne 0.")
}
else if (p > 0) {
    console.log("Vacsie ako 0.")
}
else { // p < 0 !!!
    console.log("Mensie ako 0.")
}

/*
CVICENIE podmienky
Popytajte cislo od pouzivatela (aj naparsujte/pretypujte)
pouzite if a zistite ci sa rovna 0
vypiste alert ROVNA SA alebo NEROVNA SA
*/

/* let cislo = parseInt(prompt("Zadaj cislo."))

if (cislo == 0) {
    alert("ROVNA SA")
} else {
    alert("NEROVNA SA")
} */

// undefined = nič to nie je, ani to nič nemá byť
// null = nič tam nie je

if (0) {
    console.log("NULA")
}

if (-1) {
    console.log("-1")
}

if (undefined) {
    console.log("unde")
}

if (null) {
    console.log("null")
}

if ("niečo") {
    console.log("niečo")
}


