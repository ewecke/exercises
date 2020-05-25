`use strict`;
//Q1)
    //QA1) What does NaN stand for?  Not a Number 
    //QA2) 
        console.log(isNaN`3`);  //no it is false
    //QA2) 
        console.log(isNaN`"hello"`); //yes it is true
    //QA3)  
        console.log(typeof NaN); //type of = number 
//Q2
let taskTwo = 0.1 * 0.2;
taskTwo = taskTwo.toFixed(2); 
taskTwo = parseFloat(taskTwo);
console.log(taskTwo);
//Q3
console.log(Infinity / 0); // Infinity / 0 ==> Infinity
console.log(Infinity / Infinity); // Infinity / Infinity ==> NaN
console.log(1 / 0); // 1 / 0 ==>  Infinity
