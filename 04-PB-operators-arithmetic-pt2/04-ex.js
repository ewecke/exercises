"use strict";

//Q1
let ticketPrice = 15;
let totalSalles = 6450;
let ticketQuant = totalSalles / ticketPrice;
console.log("//Q1 Tickets sold = " + ticketQuant);

//Q2
let silviaSalary = 500;
let silviaYearIncome = silviaSalary * 52.143;
console.log("//Q2 Sylvia\'s Year Income = " + silviaYearIncome);

//Q3
let numberOne = 17;
let numberTow = 30;
let percetageOneTow = (numberOne / numberTow) * 100;
console.log("//Q3 Percentage of 17/30 = " + percetageOneTow + "%");

//Q4
let squarSide = 4.75;
let squarePerimeter = squarSide * 4;
console.log("//Q4 Square perimeter = " + squarePerimeter);


//Q5
let baseOne = 5;
let baseTwo = 6;
let baseThree = 7;
let triagulePerimeter = baseOne + baseTwo + baseThree;
console.log("//Q5 Triangule perimeter = " + triagulePerimeter);

//Q6
let squareTowSide = 5;
let squareTowArea = squareTowSide * squareTowSide;
console.log("//Q6 Square Area = " + squareTowArea);

//Q7
let triagleSideOne = 5;
let triagleSideTwo = 6;
let triagleSideThree = 7;
let triaguleArea = Math.sqrt(triagulePerimeter * (triagulePerimeter - triagleSideOne) * (triagulePerimeter - triagleSideTwo) * (triagulePerimeter - triagleSideThree));
console.log("//Q7 Triangle Area = " + triaguleArea);

//Q8
let myCubeSide = 9;
let cubeVolume = (myCubeSide * myCubeSide) * myCubeSide;
console.log("//Q8 Cube Volume = " + cubeVolume);

//Q9
let billOne = 22.35;
let billOneTip = (billOne / 100) * 10;
console.log("//Q9 - A - Bill = " + billOne + " Tip " + billOneTip);
let billTwo = 26.67;
let billTwoTip = (billTwo / 100) * 15;
console.log("//Q9 - B - Bill = " + billTwo + " Tip " + billTwoTip);
let billThree = 35.92;
let billThreeTip = (billThree / 100) * 20;
console.log("//Q9 - C - Bill = " + billThree + " Tip " + billThreeTip);

//Q10
let dayOne = 8;
let dayTwo = 6;
let dayThree = 5;
let dayFour = 9;
let dayFive = 8;
let daySix = 2;
let daySeven = 1;
let dayEight = 8.5;
let dayNine = 7;
let dayTen = 4;
let totalTimeWorked = dayOne + dayTwo + dayThree + dayFour + dayFive + daySix + daySeven + dayEight + dayNine + dayTen;
let averageTime = totalTimeWorked / 10;
console.log("//Q10 Noemy\'s average hours worked per day = " + averageTime);


//Q11
let testOne = 75;
let testTwo = 70;
let testThree = 85;
let testFour = 90;
let testFive = 100;
let totalBeforeTestSix = testOne + testTwo + testThree + testFour + testFive;
let testAvergeAfterSix = 85;
let testSix = testAvergeAfterSix * 6 - totalBeforeTestSix;
console.log("//Q11 Score on the sixth test = " + testSix + "cc");

//Q12

let minimumNeeds = ((((80 * 9) / 100) - ((78 * 8) / 100)) * 100);
console.log("//Q12 James needs a minimum of = " + minimumNeeds + "%");