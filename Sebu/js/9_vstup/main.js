// let vstup = $("#vstup")
// vstup.text("xd")

// h.val() = vráti value
// h.val("kys") = nastaví value na "kys"

// ked stlacim ok, zober vstupy, prekovertuj na 2 cisla
// a spocitaj

function vyries() {
    let text1 = $("#vstup").val()
    let text2 = $("#vstup2").val()

    // prekonvertuj na cisla
    let a = parseInt(text1)
    let b = parseInt(text2)

    let vysledok = a + b

    $("#vysledokSpan").text(String(vysledok))
}

$("#okButton").click(vyries)