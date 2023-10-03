// //stiring litteral
// let fullname = "john doe";
// let age = 33;
// let address = "Manado"

// //halo nama saya john doe, umur saya 33 tahun
// //dan saya tinggal di manada
// let kalimat5 = "halo nama saya" + fullname + ",umur saya" + age + "Tahun dan saya tinggal di" + address;


// let kalimat6 = `Halo nama saya${fullname}, umur saya ${age},tahun dan saya tinggal di ${address}`;


// console.log(kalimat5)
// console.log(kalimat6)


//arrow function
//-------------------

// function sayGreetings6(){
//     return`Hello world`;
// }
// console.log(sayGreetings5());


// const sayGreetings6 = (name)=> {
//     return `hello ${name}`
// }

// console.log(sayGreetings6());

// implicit return value
// const sayGreetings6 = (name) => `hello ${name}`;

// // Pada IIFE
// let output1 =({} => 'hello')();
// console.log(output1)
// // Pada Callback
// const nymber = (1, 2, 3, 4, 5)
// let output2 = number.map({item} => item);
// console.log(output2)

const sayGreetings5 = (fullName) => {
    if (fullName === undefined) {
        fullName = "JOhn Doe"
    }
    console.log('Hello ${fullName}')
}

sayGreetings5();