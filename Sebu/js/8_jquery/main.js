// $  altgr + vedľa lka tlačitko
// # altgr + x
$("#tlacidlo").text("Ahoj")
console.log($("#tlacidlo").text())

// udalosť, binding, event
// callback = funkcia, ktorú volá počítač, nie ty


// callback
/*
function kedKliknem() {
    console.log("YEET")
}
*/

// .click ( f )
// $("#tlacidlo").click(kedKliknem)

/*
$("#tlacidlo").click(
    function() {
        console.log("Anonymna juchu")
    }
)

*/


let x = 0

// najpouzivajensie

let poKliknuti = () => {
    console.log("XD")
}
$("#pocitadlo").mouseup(poKliknuti)


