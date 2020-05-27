`use strict`;
//Q1
console.log(`Q1`);
let integerValueOne = 12;
let integerValueTwo = 60;
if (integerValueOne >= 50 && integerValueOne <= 99 || integerValueTwo >= 50 && integerValueTwo <= 99) {
    console.log(true);
} else {
    console.log(false);
}

//Q2
console.log(`Q2`);
let integerValueThree = 10;
if (integerValueOne >= 50 && integerValueOne <= 99 || integerValueTwo >= 50 && integerValueTwo <= 99 || integerValueThree >= 50 && integerValueThree <= 99) {
    console.log(true);
} else {
    console.log(false);
}

//Q3
console.log(`Q3`);
let a = 135;
let b = 71;
let c = 338;
if (a > b && a > c) {
    console.log('A has the largest value');
} else if (b > a && b > c) {
    console.log('B has the largest value');
} else {
    console.log('C has the largest value');
}

//Q4 (pyerog is also a Dumpling like us)  
console.log(`Q4`);
let myPyString = `Py`;
let myString = myPyString + `erog`;
if (myString.includes `Py`)
    console.log(myString);

//Q5
console.log(`Q5`);
let numberOne = 20;
let numberTow = 35;
let mySom = numberOne + numberTow;
if (mySom >= 50 && mySom <= 80) {
    console.log(65);
} else
    console.log(80);

//Q6
console.log(`Q6`);
let interNumberOne = 14;
let interNumberTwo = 4;
if (interNumberOne + interNumberTwo === 8 || interNumberOne - interNumberTwo === 8 || interNumberTwo - interNumberOne === 8) {
    console.log(true);
} else
    console.log(false);

//Q7
console.log(`Q7`);
let myInterNumberOne = 10;
let myInterNumberTwo = 5;
if (myInterNumberOne === 15 || myInterNumberTwo === 15 || myInterNumberOne + myInterNumberTwo === 15) {
    console.log(true);
} else
    console.log(false);

//Q8
console.log(`Q8`);
let intergersOne = 31;
let intergersTwo = 86;
if (intergersOne % 7 === 0 || intergersOne % 11 === 0 || intergersTwo % 7 === 0 || intergersTwo % 11 === 0) {
    console.log(true);
} else
    console.log(false);

//Q9
console.log(`Q9`);
let myIntergersOne = 31;
let myIntergersTwo = 31;
let myIntergersSom = myIntergersOne + myIntergersTwo;
if (myIntergersOne === myIntergersTwo) {
    console.log(myIntergersSom * 3);
} else
    console.log(`not same value`);

//Q10
console.log(`Q10`);
let specifiedNumber = 11;
let myDifference = specifiedNumber - 19;
if (specifiedNumber > 19) {
    console.log(myDifference * 2);
} else
    console.log(`specified number is not bigger than 19`);

//Q11
console.log(`Q11`);
let firstName = `Edgar`;
let age = 40;
if (age < 13) {
    console.log(`${firstName} is a child`);
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young adult`);
} else
    console.log(`${firstName} is a adult`);

//Q12 is there a more efficient way of writing your code? 
//Good questions 