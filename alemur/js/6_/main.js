function setup() {
    createCanvas(800, 600)
}

function draw() {

}

$("#tacidlo").text("Ahoj")
console.log($("#tlacidlo").text())

$("#tlacidlo").click(() => {
    x++
    $("#pocitadlo").text(x)
})

