"use strict";
//Q1-1
let aleezaGame1 = 89;
let aleezaGame2 = 120;
let aleezaGame3 = 103;
let lizGame1 = 116;
let lizGame2 = 94;
let lizGame3 = 200;
//Q1-a
let allezaAverage = (aleezaGame1 + aleezaGame2 + aleezaGame3) / 3;
let lizAverage = (lizGame1 + lizGame2 + lizGame3) / 3;
//Q1-b
console.log(`Alleza Average last three games = ${allezaAverage}`);
console.log(`Liz Average last three games = ${lizAverage}`);

if (allezaAverage > lizAverage) {
    console.log(`Alleza's team Average score Wins`);
} else if (lizAverage > allezaAverage) {
    console.log(`Liz's team Average score Wins`);
} else {
    console.log(`It is a draws Liz's team and Alleza's team have the same average score on the last three games`);
}

console.log(`Mary is in the house`);
let maryGame1 = 97;
let maryGame2 = 134;
let maryGame3 = 105;

let maryAverage = (maryGame1 + maryGame2 + maryGame3) / 3;

console.log(`Mary Average last three games = ${maryAverage}`);

if (allezaAverage > lizAverage && allezaAverage > maryAverage) {
    console.log(`Alleza's team Average score Wins`);
} else if (lizAverage > allezaAverage && lizAverage > maryAverage) {
    console.log(`Liz's team Average score Wins`);
} else if (maryAverage > allezaAverage && maryAverage > lizAverage) {
    console.log(`Mary's team Average score Wins`);
} else {
    console.log(`It is a draws Liz's team, Alleza's team and Mary's team have the same average score on the last three games`);
}