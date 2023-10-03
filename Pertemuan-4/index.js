// // console.log(hello("Morgan"))  // argument

// // // function hello(){
// // //     return "Goodbye"
// // // }

// // // hello()

// const age = 17 // Global

// const hello = function(fullNAme) {   // parameter
//     console.log(age)
//     const job = "Preacher"
//     if (job === Preacher) {
//         const address = "Manado" // Block
//     }
//     console.log(address)
//     return "Suddenly Seymour";
// }

// console.log(job)
// console.log(hello("Morgan"))

// IIFE
// Anoymous Function
(function (){
    console.log("Hello IIFE");
})()

// Callback Function
// adalah function yang berada diparameter fungsi

function CG (name, callback) {
    const greeting = "Hello " + name
    callback (greeting)
}

function logCG(greeting){
    console.log(greeting)
}

CG("Josh", function(greeting){
    console.log(greeting)
})