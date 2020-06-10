`use strict`
//# Function Scope
//Q1
console.log(`Q-1`);
const myFuncition = (x, y) => {
    if ((typeof x !== "number") || (typeof y !== "number")) {
        console.log(`(${x}) or (${y}) is not a Number`);     
    } else {
        let result = 0;
        for (let counter = 1; counter <= y; counter++) {
            result = x ** counter;
            console.log(result);
        }
    }
}
myFuncition(3, 5);

//Q2
console.log(`Q-2`);
let favoriteFruit =`Mango`;
const printFavoriteFruit = (favoriteFruit) => {
    fruit =`My favorite fruit is: ${favoriteFruit}`
    console.log(fruit);
}
printFavoriteFruit(`Banana`);

//Q3
console.log(`Q-3`);
const exponent = (a, b) => {
    let result = null;
    for (let counter2 = 1; counter2 <= b; counter2++) {
       result = (result) + (a * a); 
       console.log(result);
    }  
}
exponent(3, 5);

//console.log(result);

// ** ReferenceError: result is not defined 
// is not possible access a variable defined inside a function from out of the funtion it is defined.