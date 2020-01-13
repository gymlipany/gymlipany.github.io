// symboly policiek
/* pre buducu generaciu
const mX = 10 // modre X
const cX = 11 // cervene X

const mO = 20 // modre O
const cO = 21 // cervene O
*/

const X = 1
const O = 2

const novaDoska = () => [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]


W = 300
let a = W/3 // strana stvorca = nasa jednotka dlzky v celej hre
let terazPrvyHrac = true

let doska = novaDoska()

function setup() {
    createCanvas(800, 600)
}

// render
function draw() {
    background(0)
    nakresliPozadie()
    vykresliDosku()

    if (terazPrvyHrac) {
        noFill()
        stroke(0, 255, 0)
        text("TERAZ IDE HRAC 1 = O", 350, 50)
    } else {
        noFill()
        stroke(255, 0, 0)
        text("TERAZ IDE HRAC 2 = X", 350, 50)
    }
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
            
            if (policko == X) {
                stroke(255, 0, 0)
                line(x, y, x + a, y + a)
                line(x, y+a, x+a, y)
            }
            
            if (policko == O) {
                stroke(0, 255, 0)
                circle(x+a/2, y+a/2, a-30)
            }
        }
    }
}

function nakresliPozadie() {
    // nakresli plochu
    noFill() // vypln stvorca
    stroke(255) // okraj
    square(0, 0, W)

    
    line(a, 0, a, 3*a)
    line(2*a, 0, 2*a, 3*a)
    line(0, a, 3*a, a)
    line(0, 2*a, 3*a, 2*a)
}


// chce indexy
function poKliknuti(xi, yi) {
    console.log("kilkolsi na " + xi + " " + yi)
    
    if (doska[yi][xi] == 0) {
        if (terazPrvyHrac) {
            doska[yi][xi] = O
        } else {
            doska[yi][xi] = X
        }
    }
    
    terazPrvyHrac = !terazPrvyHrac
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
    
    // ak nijeje vnutriii, RESTAERAT!
    else {
        doska = novaDoska()
    }
}

function vyhralNiekto() {
    // vracaj: 0 - ked nie
    // 1 - ked prvy hrac
    // 2 - ked druhy hrac
    // skratka
    const d = doska

    // treba lepsi napad
    let 
        r1 = d[0][0] + d[0][1] + d[0][2],
        r2 = d[1][0] + d[1][1] + d[1][2],
        r3 = d[2][0] + d[2][1] + d[2][2],

        s1 = d[0][0] + d[1][0] + d[2][0],
        s2 = d[0][1] + d[1][1] + d[2][1],
        s3 = d[0][2] + d[1][2] + d[2][2],

        dia1 = d[0][0] + d[1][1] + d[2][2],
        dia2 = d[2][0] + d[1][1] + d[0][2]

    
}