
// podminekovy vyraz (boolean)
let a = 5

// typ boolean = bud true alebo false
let podmienka = a > 4 && a > 1

console.log("vypis cisla od 10 po 0")
// while = kod bude sa opakovať kym podmienka je splnena
// vypis cisla od 0 do 10
let x = 10
while (x >= 0) {
    console.log(x)
    x--
    // x = x + 1
    // x += 1
    // x++
    // 
}

console.log("ale s for")

// for (definicia premennej a zaciatocna hodnota; podmienka; konecny prikaz)
for (let i = 0; i < 10; i++) {
    
    if (i == 5) {
        continue // preskoc na dalsiu hodnotu cyklu
    }
    
    console.log("for: i= " + i)

    // if (i == 5) {
    //     break // vyskoc z cyklu prec
    // }
}

let t = 0
while (t < 5) {
    console.log("T = " + t)
    for (let i = 0; i < t; i++) {
        if (t == 3) {
            break
        }
        console.log(i)
    }
    t++
}

