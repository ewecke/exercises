`use strict`;
//Q1
console.log(`Q1`);

function add(firstNumber) {
    return function sum(secondNumber) {
        return firstNumber + secondNumber;
    }
}
console.log(add(5)(6));

//Q2
console.log(`Q2`);

function multiplier(firstNumber2) {
    return function mult(secondNumber2) {
        return firstNumber2 * secondNumber2;
    }
}
let myFunction = multiplier(2);
console.log(myFunction(3));

//Q3
console.log(`Q3`);

(function (currentAge, retirementAge, monthlyWage, percentageSave) {
    if (currentAge > retirementAge) {
        console.log(`You\'re already retired!`);        
    } else {
        let mothsToSave = (retirementAge - currentAge) * 12 ;
        let moneyToSave = mothsToSave * (monthlyWage * percentageSave / 100);
        console.log(`You have to save ${moneyToSave} until retires`);
    }
})(40, 65, 2000, 5);