// Name : Siregar, Hizkia
// Desc : Exercise 2
// Date : 23 August 2023

// IIFE
(function  () {
    let num1 = 300
    let num2 = 350
    const hasil = num1 > num2 ? num1 : num2
    console.log("Nilai Terbesar adalah " + hasil)
})()

// Callback Function
function bigNumber(Num1, Num2, callback) {
    const large = Num1 > Num2 ? Num1 : Num2;
    callback(large);
}

function hasil(result) {
    console.log("Nilai Terbesar adalah " + result);
}

bigNumber(80, 70, hasil)


