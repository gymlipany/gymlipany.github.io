class Kruh {
    constructor(x, y, farba) {
        console.log()
        this.x = x
        this.y = y 
        this.farba = farba  

    }
}


let pole = []


function setup() {
    createCanvas(800, 600)

    let k1 = new Kruh ( 100, 120, "blue")
    let k2 = new Kruh ( 15, 14, "green")
    let k3 = new Kruh ( 200, 200, "red")


    pole.push(k1)
    pole.push(k2)
    pole.push(k3)




function draw() {

for(let blud of pole){
    circle(blud.x, blud.y, 30)
    } 

}
}