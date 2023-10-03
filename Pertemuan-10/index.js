// const money = (a, b, c, d ) => {
//     const array = [a, b, c, d]
//     let total = 0
//     array.forEach((item) => {
//         total = total + item;
//     });
//     console.log(total);
// };

// money(1, 2, 3, 4);

// rest parameter
// const money = (...params) => {
//     let total = 0
//     params.forEach((item) => {
//         total = total + item;
//     });
//     console.log(total);
// };

// money(1, 2, 3, 4, 5, 6,7 ,8);

// rest parameter (divided)
// const money = (a, b,c,...params) => {
//     let total = 0
//     params.forEach((item) => {
//         total = total + item;
//     });
//     console.log(total);
// };

// money(1, 2, 3, 4, 5, 6,7 ,8);

// spread operator
const array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(...array1);

let array2 = [array1];
console.log('Array1 : , ')