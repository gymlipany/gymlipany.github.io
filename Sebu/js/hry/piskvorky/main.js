/*
     POZOR, v programovani nikdy nepouzivame medzery a diakritiku (makčene etc)
     -> len v komentároch môžeme.

     pri názvok premenných medzeru vynecháme teda napr:
        farba kocky => farbaKocky
*/

// symboly policiek
/* pre buducu generaciu
const mX = 10 // modre X
const cX = 11 // cervene X

const mO = 20 // modre O
const cO = 21 // cervene O
*/

 // funkcia stroke() ktora berie hodnoty (cervenej, zelenej, modrej) a zhotovi farbu a nastavi ju ako farbu pera / okrajov
 // tieto hodnoty su v intervale <0, 255>
 // teda napr. biela farba je stroke(255, 255, 255)

 // funkcia fill robi to iste iba ze nastavuje výplň a nie okraje

const X = 1
const O = -1

const novaDoska = () => [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]


W = 300
let a = W/3 // strana stvorca = nasa jednotka dlzky v celej hre
let terazO = true // prvy hrac O

let doska = novaDoska()
let infoSprava = "Vitajte, začína O."
let koniecHry = false

function setup() {
    createCanvas(W, W + 200)
}

// render
function draw() {
    background(0)

    // vykresli dosku a na nu čapni hraciu dosku (políčka)
    noFill()
    nakresliPozadie()
    vykresliDosku()

    // teraz sa bude vykresľovať text info správy

    // nastav farbu správy podla hraca
    if (terazO) {
        fill(0, 255, 255)
        stroke(0, 255, 255)
    } else {
        fill(255, 255, 0)
        stroke(255, 255, 0)
    }

    // ak je koniec hry, tak nastav farbu spravy radšej na peknu cervenu
    if (koniecHry) {
        fill(255, 0, 100)
        stroke(255, 0, 100)
    }

    textSize(20)
    
    text(infoSprava, 10, a*3 + 40)
}

function vykresliDosku() {
    // iteracie cez dvojrozmerne pole
    // pre kazde jedno policko v doske...
    for (let yi = 0; yi < doska.length; yi++) {
        for (let xi = 0; xi < doska[yi].length; xi++) {
            // pole[y][x]
            // xi aj yi zacinaju od 0 !!!!
            // yi je y-suradnica (index) v poli 0 - 2
            // xi je x-suradnica (index) v poli 0 - 2
            let policko = doska[yi][xi]
            let x = xi*a
            let y = yi*a
            
            // vykresli 
            if (policko == X) {
                stroke(255, 255, 0)
                line(x, y, x + a, y + a)
                line(x, y+a, x+a, y)
            }
            
            if (policko == O) {
                stroke(0, 255, 255)
                circle(x+a/2, y+a/2, a-30)
            }
        }
    }
}

function nakresliPozadie() {
    // nakresli plochu
    noFill() // vypln stvorca
    stroke(255) 
    square(0, 0, W) // okraj

    // čiary vnútri do kríža
    line(a, 0, a, 3*a)
    line(2*a, 0, 2*a, 3*a)
    line(0, a, 3*a, a)
    line(0, 2*a, 3*a, 2*a)
}


// chce indexy
function poKliknuti(xi, yi) {
    console.log("kilkolsi na " + xi + " " + yi)
    
    if (doska[yi][xi] != 0) return // ak neklikol na prazdno, ignoruj cele kliknutie (vypni funkciu, vykopni sa z nej)
    
    // ak je prazdne, nastav X alebo O podla toho kto je na rade
    if (terazO) {
        doska[yi][xi] = O
    } else {
        doska[yi][xi] = X
    }
    terazO = !terazO // prepni hraca

    // nastav spravu ze kto ide
    if (terazO) {
        infoSprava = "Teraz ide O"
    } else {
        infoSprava = "Teraz ide X"
    }

    const vyhral = vyhralNiekto()

    // skontrolujme ci niekto vyhral a nastavme koniecHry ak hej
    if (vyhral == X) {
        infoSprava = "Vyhráva X !!!0 \n(Klikni tu pre novú hru)"
        koniecHry = true
    } else if (vyhral == O) {
        koniecHry = true
        infoSprava = "Vyhráva O !!! \n(Klikni tu pre novú hru)"
    } else if (vyhral == 10) {
        koniecHry = true
        infoSprava = "Remíza !!! \n(Klikni tu pre novú hru)"
    }
}

function mousePressed() {
    // mouseX, mouseY = suradnice na obrazovke
    //console.log(mouseX, mouseY)


    // prepocitaj suradnice obrazovky na indexy a spusti ich do poKliknuti
    let xi = Math.floor(mouseX/a) //  floor oreze desatinne miesta a drbne ako cele cislo
    let yi = Math.floor(mouseY/a)
    
    // ak vnutri, hraj dalej = kilk
    if (xi <= 2 && yi <= 2) {
        poKliknuti(xi, yi)
    }
    
    // ak sme neklikli vnutriii hracej dosky, RESTART!
    else {
        // resetujeme vsetky hodnoty ako na zaciatku
        koniecHry = false
        terazO = true
        infoSprava = "Vitajte, začína O."
        doska = novaDoska()
    }
}

function vyhralNiekto() {
    // vracaj: 0 - ked nie
    // X - ked prvy hrac
    // O - ked druhy hrac
    // 10 - ak remiza

    // skratka
    const d = doska

    // vypocita sumu cisel v poli
    const sumaPola = (l) => l.reduce((a,i) => a + i)

    const sumyCiar = [
        sumaPola( d[0] ), // prvy riadok 
        sumaPola( d[1] ), // ...
        sumaPola( d[2] ), // ...

        // d[y][x] -> vypocitam teraz sumy stlpcov
        d[0][0] + d[1][0] + d[2][0], // x = 0
        d[0][1] + d[1][1] + d[2][1], // x = 1
        d[0][2] + d[1][2] + d[2][2], // x = 3

        // sum diagonal
        d[0][0] + d[1][1] + d[2][2], // diag. zhora dolu [\]
        d[2][0] + d[1][1] + d[0][2] // zdola hore [/]
    ]

    // prejdeme kazdou sumou moznych vyhernych ciar
    for (let s of sumyCiar) {
        // 3 X za sebvou
        if (s == 3) {
            return X // vyhod z funkcie X lebo vyhralo
        }

        // inak ak 3 O za sebou
        if (s == -3) {
            return O // vyhod z funkcie O lebo vyhralo
        }
    }


    // ak nikto nevyhral, predpokladame ze je remiza
    let remiza = true

    // prejdeme vsetky policka v doske
    for (let riadok of doska) {
        for (let x of riadok) {

            // ak najdeme aspon jedno prazdne policko,
            if (x == 0) {
                remiza = false // urcite to remiza nebude
            }
        }
    }

    if (remiza) {
        return 10 // ak ta remiza naozaj je, vrat cislo pre remizu 10
    } else {
        return 0 // ak nikto nevyhral vrat 0
    }
}