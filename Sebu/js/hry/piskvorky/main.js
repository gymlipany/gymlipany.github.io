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

// -----------------------------------------------------------

// X má symbolickú hodnotu 1 a O hodnotu -1
// v celom kóde ak napíšeme X, tak tym myslíme vlastne 1, ak napíšeme O tak vlastne myslíme -1
// je to preto, lebo počítač nerozumie čo je X a O, ale rozumie čo je 1 a -1
const X = 1
const O = -1

// táto funkcia nam vráti novú KÓPIU dosky (dvojrozmerné pole)
function novaDoska() {
    return [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]
}

// nastavím šírku celej hracej plochy v pixeloch (je tvaru štvorca)
W = 300
let a = W/3 // strana stvorca = naša jednotka dlzky v celej hre
let terazO = true // prvy hrac je O, nastavíme boolean terazO, ak bude true tak ide O, ak false tak ide X

let doska = novaDoska() // deklarujeme hraciu dosku a pridáme do nej novú kópiu
let infoSprava = "Vitajte, začína O." // ak tento string zmenime, zmeni sa aj na obrazovke
let koniecHry = false // ak je koniec hry, po dalsom kliknuti treba restartovat hru


// funkcia setup je funkcia, ktorú nam knižnica p5 automaticky spustí iba raz pri spustení programu
function setup() {
    // vytvor kresliace plátno s dano šírkou a výškou (w, h)
    createCanvas(W, W + 200)
}

// funkcia, ktoru p5 spustí 60x za sekundu, je určená na vykresľovanie
function draw() {
    background(0, 0, 0) // nastavime pozadie čiernej farby

    // vykresli dosku a na nu čapni hraciu dosku (políčka)
    noFill() // stvorce odteraz budu bez vyplne
    nakresliPozadie() // osobitna funkcia na vykreslenie pozadia
    vykresliDosku() // nad to pozadie este vykreslime dosku (Xká a Očká)

    // teraz sa bude vykresľovať text info správy...

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

    // veľkosť textu
    textSize(20)
    
    // nakoniec vykresli aj správu (sprava, x, y)
    text(infoSprava, 10, a*3 + 40)
}

function vykresliDosku() {
    // prechádzanie cez dvojrozmerne pole
    for (let yi = 0; yi < doska.length; yi++) {
        for (let xi = 0; xi < doska[yi].length; xi++) {
            // pre kazde jedno policko v doske urob, že:

            // pole[y][x]
            // xi aj yi zacinaju od 0 !!!!
            // yi je y-suradnica (index) v poli 0 - 2
            // xi je x-suradnica (index) v poli 0 - 2

            let policko = doska[yi][xi] // hodnota policka - X, O, alebo 0 pre prazdne policko
            let x = xi*a
            let y = yi*a
            
            // vykresli X ak toto konkretne policko je X (má hodnotu X)
            if (policko == X) {
                stroke(255, 255, 0)
                line(x, y, x + a, y + a)
                line(x, y+a, x+a, y)
            }
            
            // napodobne...
            else if (policko == O) {
                stroke(0, 255, 255)
                circle(x+a/2, y+a/2, a-30)
            }
        }
    }
}

// funkcie na vykreslenie pozadia = mriežky čiar
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

// po kliknuti mysi na obrazovku nám p5 automaticky samo spustí túto funkciu mousePressed, 
function mousePressed() {

    // prepocitaj suradnice obrazovky na suradnice dosky
    // tieto suradnice dosky su od 0, 1, 2
    let xi = Math.floor(mouseX/a) // fcia Math.floor zokruhli cislo nadol a vráti len cele cislo
    let yi = Math.floor(mouseY/a)
    
    // ak hrac klikol vnutri dosky, hraj dalej = zapni funkciu poKliknuti
    if (xi <= 2 && yi <= 2) {
        poKliknuti(xi, yi)
    }
    
    // ak sme neklikli vnutriii hracej dosky, vždy RESTARTuj hru!
    else {
        // resetujeme vsetky hodnoty ako na zaciatku
        koniecHry = false
        terazO = true
        infoSprava = "Vitajte, začína O."
        doska = novaDoska()
    }
}

// toto je funkcia podobná ako mousePressed, ibaže sa spustí len vtedy, keď hráč klikne do vnútra hracej plochy
function poKliknuti(xi, yi) {
    console.log("kilkolsi na " + xi + " " + yi) // zapiseme si x,y pre okrasu do konzoly
    
    // ak klikol na nieco ine ako prazdne policko (teda ak klikol na X alebo O),
    // ignoruj cele kliknutie (vypni funkciu, vykopni sa z nej), pretoze nechceme prepísať už označené políčko
    if (doska[yi][xi] != 0) {
        return
    }

    // ak teda naozaj je prázdne (pretože funkcia pokračuje, neboli sme z nej pred 4 riadkami vykopnutí),
    // nastav X alebo O podla toho kto je na rade
    if (terazO) {
        doska[yi][xi] = O
    } else {
        doska[yi][xi] = X
    }
    terazO = !terazO // prepni hraca tak, že prevrátime true na false a naopak a priradíme do premennej terazO

    // nastav spravu ze kto je teraz na rade
    if (terazO) {
        infoSprava = "Teraz ide O"
    } else {
        infoSprava = "Teraz ide X"
    }

    // detekujeme vyhru a ulozime vysledok do konštanty vyhral
    const vyhral = detekujVyhru()

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

    // ak nie, normalne pokračuj...
}

function detekujVyhru() {
    // vracaj: 0 - ked este hra neskoncila
    // X - ked prvy hrac vyhral
    // O - ked druhy hrac vyhral
    // 10 - ak je remiza

    // je to iba skratka, v skutočnosti nedojde ku kópii lebo doska je objekt a objekty sa v JS samy od seba nekopírujú
    const d = doska

    const sumyCiar = [
        // d[y][x] -> vypocitam sumy riadkov
        d[0][0] + d[0][1] + d[0][2], // y = 0
        d[1][0] + d[1][1] + d[1][2], // y = 1
        d[2][0] + d[2][1] + d[2][2], // y = 2

        // d[y][x] -> vypocitam teraz sumy stlpcov
        d[0][0] + d[1][0] + d[2][0], // x = 0
        d[0][1] + d[1][1] + d[2][1], // x = 1
        d[0][2] + d[1][2] + d[2][2], // x = 3

        // spocitam teraz uhlopriecky
        d[0][0] + d[1][1] + d[2][2], // zhora dolu [\]
        d[2][0] + d[1][1] + d[0][2]  // zdola hore [/]
    ]

    // prejdeme kazdou sumou moznych vyhernych ciar
    for (let s of sumyCiar) {
        // 3 X za sebou (1 + 1 + 1 = 3)
        if (s == 3) {
            return X // vyhod z funkcie X lebo vyhralo
        }

        // inak ak 3 O za sebou (-1 + -1 + -1 = -3)
        if (s == -3) {
            return O // vyhod z funkcie O lebo vyhralo
        }
    }


    // ak nikto nevyhral, tak potom je mozne ze je remiza, alebo este hra neskoncila
    // naivne predpokladajme ze je remiza
    let remiza = true

    // prejdeme vsetky policka v doske
    for (let riadok of doska) {
        for (let x of riadok) {

            // ak najdeme aspon jedno prazdne policko,
            if (x == 0) {
                remiza = false // tak hra potom musi pokracovat, a teda to urcite remiza nebude
            }
        }
    }

    if (remiza) {
        return 10 // ak ta remiza teda je, vrat cislo pre remizu 10
    } else {
        return 0 // ale ak hra este ma pokracovat, vrat 0
    }
}