/*

Urobte stranku, kde bude 1 textove pole, jedno tlacidlo
a jeden span pod sebou (dajte medzi ne <br>).

Pouzivatel bude do pola pisat svoje meno.
Urobte, ze ked stlaci tlacidlo, tak ten span sa zmeni
na text "Ahoj, Jurko." (podla mena pouzivatela).

- 1. urob funkciu, ktoru potom dame tlacidlu, v nej:
    -> ziskaj meno
    -> vytvor pozdrav
    -> nastav pozdrav ako .text() spanu
- 2. túto funkciu podstrč funkciožrútovi click, ktorý patrí
  tlačidlu

*/

$("#btnOk").click(() => {
    $("#span").text(
        "Ahoj, " + $("#meno").val() + "."
    )
})