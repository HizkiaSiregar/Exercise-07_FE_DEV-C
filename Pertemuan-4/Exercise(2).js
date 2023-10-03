// Name : Pattinaja, Andreas

//metode IIFE
(function() {
    const findMax = function(a, b) {
        return a > b ? a : b;
    };
    const num1 = 50;
    const num2 = 123;
    const maxNumber = findMax(num1, num2);
    console.log("Nilai terbesar (IIFE):", maxNumber);
})();

//METODE CALLBACK
function findMax(a, b, callback) {
    const max = a > b ? a : b;
    callback(max);
}
const num1 = 10;
const num2 = 20;
findMax(num1, num2, function(maxNumber) {
    console.log("Nilai terbesar adalah:", maxNumber); 
});