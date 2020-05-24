`use strict`;
//Q1
console.log(Math.min(-1, 4) + ` is the lowest number`);
console.log(Math.max(-1, 4) + ` is the highest number`);
//Q2
    //Variebles
let numberOne = 3321.32321;
let numberTwo = 326.76;
let numberThee = 76788.7;
let numberFour = -9.78;
let numberFive = 43.342;
let numberSix = 28.329;  
    // Round up numbers 
console.log(numberOne + ` ` + `Round up ==> ` + Math.ceil(numberOne));
console.log(numberTwo + ` ` + `Round up ==> ` + Math.ceil(numberTwo));
console.log(numberThee + ` ` + `Round up ==> ` + Math.ceil(numberThee));
console.log(numberFour + ` ` + `Round up ==> ` + Math.ceil(numberFour));
console.log(numberFive + ` ` + `Round up ==> ` + Math.ceil(numberFive));
    // Round down numbers
console.log(numberOne + ` ` + `Round down ==> ` + Math.floor(numberOne));
console.log(numberTwo + ` ` + `Round down ==> ` + Math.floor(numberTwo));
console.log(numberThee + ` ` + `Round down ==> ` + Math.floor(numberThee));
console.log(numberFour + ` ` + `Round down ==> ` + Math.floor(numberFour));
console.log(numberSix + ` ` + `Round down ==> ` + Math.floor(numberSix));
//Q3
let dice = Math.random();
let bigger = dice * 5 + 1;
let biggerRouded = Math.round(bigger);
console.log(`Your rolled dice ==> ` + biggerRouded);

