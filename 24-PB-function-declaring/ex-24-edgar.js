`use strict`;
//Q1
console.log(`Q1`);
function myFunction(a, b) {
    c = a * b;
    console.log(`${a} multiplied by ${b} = ${c}`);
}
myFunction(10, 20)
//Q2
console.log(`Q2`);
const multplyNumbers = function (a = 15, b = 10) {
    c = a * b;
    console.log(`${a} multiplied by ${b} = ${c}`);
}
multplyNumbers ();
//Q3

console.log(`Q3`);
const myArrowFunction = (a, b)=> {
    c = a * b;
    console.log(`${a} multiplied by ${b} = ${c}`);
} 
myArrowFunction(40, 10);
//Q4-a 
console.log(`Q4-a`);
function checkRemainder(a, b) {
    myRemainder = a % b;
    console.log(`The remainder of ${a} divide by ${b}  is = ${myRemainder}`);
}
checkRemainder(50, 25);
//Q4-b
console.log(`Q4-b`);
const checkRemainderQ4b = function (a, b) {
    myRemainderQ4b = a % b;
    console.log(`The remainder of ${a} divide by ${b}  is = ${myRemainderQ4b}`);
}
checkRemainderQ4b(200, 26);
//Q4-c
console.log(`Q4-c`);
const checkRemainderQ4c = (a, b)=> {
    myRemainderQ4c = a % b;
    console.log(`The remainder of ${a} divide by ${b}  is = ${myRemainderQ4c}`);
} 
checkRemainderQ4c(35, 10);