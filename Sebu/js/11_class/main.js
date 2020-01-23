
/*
let clovek = {
    meno: "Sebo",
    vek: 18,
    vyska: 180
}

clovek.vyska = clovek.vyska + 100
console.log(clovek.meno + " má výšku " + clovek.vyska)
*/

/*
 Trieda je recept na vytváranie objektov.
 Je to premenná tiež.
 Ale, je to premenná, ktorá je schopná vytvárať objekty podľa svojho predpisu.
 Je v nej predpis, ako ma objekt vyzerat, ako sa ma vytvarat a ako sa ma spravat.
 */
// triedy sa píšu s veľkým

class Osoba {

    constructor(meno, vek) {
        console.log(meno + " sa vytvoril.")
        // this -> symbolizuje TENTO KONTKRETNY OBJEKT
        // vnutri triedy

        this.vek = vek
        this.meno = meno
        this.farbaOci = "zelena"
    }

    pozdravSa() {
        console.log("Ahoj, ja som " + this.meno + " a mám " + this.vek + " rokov." + " Farbu oci mam " + this.farbaOci)
    }

    zostarni(oKolkoRokov = 1) {
        this.vek += oKolkoRokov
    }

}

// trieda vytvori novy objekt pomocou slova new
let peter = new Osoba("Peter", 18)
let jano = new Osoba("Jano", 69)

peter.pozdravSa()
peter.zostarni()
peter.pozdravSa()