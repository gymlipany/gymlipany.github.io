function poKliknuti (){
    let text1 = $("#meno").val()

    
    
    $("#pozdrav").text("Ahoj " + text1)
    
}
$("#tlacitko").click(poKliknuti)

