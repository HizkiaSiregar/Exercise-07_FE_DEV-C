// Variabel 
// len & const (Appear in java 6)
// first letter are small, but letter is a bigger alphabet
// ; is optional

// control + / or ?

// let first_Name = "Morgan LeStrange"

// let firstName;
// firstName = "JOhnny Ohio" // strings
// let age = 30;  // Numbers
// let grade = 90.2; // Numbers
// let isActive = false; // Boolean

// age = "Tiga Puluh" //

// console.log(firstName);
// console.log(age);
// console.log(grade);
// console.log(isActive);

//const gender = 'Male';
//gender = 'female';

// Operators
// let num1 = 5
// let num2 = 10

// let hasil = num1 + num2

// console.log(hasil)
// console.log(num1 + num2)

// num1++
// console.log(num1)
// num1 += 2
// num1 = num1 + 2
// console.log(num1)

// Strings operator
let firstName = "Lizzie"
let lastName = "Dwyer"

// let fullName = firstName + lastName
// console.log(fullName)

// console.log("Hello my name is " + firstName + " " + lastName)

// Relationship Oeprators
// let num1 = "5"
// let num2 = 5
// console.log(num1 == num2)

// == cheking -- === more secure checking

// Termarry Oeprators
let age = 17
let isEligible = age >= 17 ? true : false
console.log(isEligible)

// JS funtion

function greetings (){
    //console.log("Hello world")
    return "Hello world"
}

let output = greetings()
console.log(output)

console.log(greetings())
//greetings()

function greetings (fullName){
    //console.log("Hello world")
    return "Hello" + fullName
}

console.log(greetings("Vinky Tuuk"))
