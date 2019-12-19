function poStlaceni() {
    let meno= $("#meno").val()
    let pozdrav= "Ahoj, "+ meno
    $("#OK").text("Ahoj, "+ meno)
}
$("#tlacidlo").click(poStlaceni)