// array = po slovensky pole

// altgr+f / altgr+g
let arr = ["3", 3, -1, 0.5, "Ahoj"]

console.log("dlzka = " + arr.length)

// ziskanie prvku
let prvok1 = arr[1]
console.log(arr[4])

// zmena prvku
arr[2] = "H"

console.log(arr)

// spojenie 2 poli = concat
// a.concat(b)
console.log(  [1, 2].concat([3, 4, 5])  )

let pole1 = ["a", "b"]
let pole2 = [1, 2 ,3]
let spojene = pole1.concat(pole2)
console.log(spojene)






// ----- skratene for pre pole -----------
pl = [4, 2, 3]

for (let x of pl) {
    // x = kazdy prvok
    console.log(x)
}

for (let i in pl) {
    // i = kazdy index
    console.log(i)
    console.log("hodnota " + pl[i])
}