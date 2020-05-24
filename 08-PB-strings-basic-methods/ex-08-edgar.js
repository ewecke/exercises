`use strict`;
//Q1
let taskOne = `I can walk in the park all day!`;
console.log(taskOne.substring(18, 22));
//Q2 
let taskTwo = `Hello World`;
console.log(taskTwo.toUpperCase());
//Q3
let taskThree = `Hello Earthling`;
console.log(taskThree.toLowerCase());
//Q4
let taskFour = `JavaScript`;
console.log(taskFour.substring(3, 6));
//Q5 not working 
let taskFive = `nice shoes`;
console.log(taskFive.includes(`l`, `n`) ? `it does contains the letter l or n ` : `it does not contains the letter l or n `);
//Q6
let taskSix = `Bannanas`
let taskSixB = `${taskSix[0]}${taskSix}${taskSix[0]}`;
console.log(`${taskSix} ==> ${taskSixB}`);
//Q7
let taskSeven = `Scritch`;
let taskSevenTch = `${taskSeven.substring(taskSeven.length -3, taskSeven.length)}`;
console.log(`${taskSeven} ==> ${taskSevenTch}${taskSeven}${taskSevenTch}`);
//Q8
let taskEight = `BoogieWoogie`;
let taskEightB = taskEight[0];
let taskEightE = `${taskEight[taskEight.length -1]}`;
console.log(`${taskEight} ==> ${taskEightE}${taskEight.substring(1,[taskEight.length -1])}${taskEightB}`);
//Q9
let firstName = `Edgar`;
let city = `Berlin`;
let planet = `Earth`;
console.log(`My Name is. ${firstName}. I live in. ${city}. I come from a planet called. ${planet}.`);
//Q10
let taskTen = `the quick brown fox`;
console.log(taskTen[0].toUpperCase() + taskTen.substring(1, [taskTen.length]));