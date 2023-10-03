// 1. Destruction (Array)
const months = ["January", "february", "March"];
const [firstMonth, secondMonth, thirdMonth] = months;
console.log(months)
console.log(firstMonth)
console.log(secondMonth)
console.log(thirdMonth)

// 1. Destruction (Object)
const s_Info = {nama: "Johanson Doe", age: "18", major: "Math"};
const {nama, age, major} = s_Info;
console.log(s_Info)
console.log(nama)
console.log(age)
console.log(major)

// 2. Destructuring dengan mengambil sebagian item (Array)
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const [first, second, third, fourth, fifth, sixth, seventh] = days;
console.log(days)
console.log(first)
console.log(second)
console.log(fourth)
console.log(fifth)
console.log(sixth)

// 2. Destructuring dengan mengambil sebagian item (Object)
const w_Info = {w_nama: "Bobby Brown", w_age: "37", fields: "Medicine"};
const {w_nama, w_age, fields} = w_Info;
console.log(w_Info)
console.log(w_nama)
console.log(fields)