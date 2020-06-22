"use strict";

//Q1 
console.log("**1. Where Have My Four Letter Words Gone?**");

function isFourLetters(str) {
    let myArray = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length === 4) {
            myArray.push(str[i]);
        }
    }
    return myArray;
}

console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer", "Four", "tre"]));

//Q2
console.log("**2. Months.**");

function monthName(monthNumber) {

    if (monthNumber < 1 || monthNumber > 12) {
        return "it is not a month !!!"
    };

    let arrayName = ["January.", "February.", "March.", "April.", "May.", "June.", "July.", "August.", "September.", "October.", "November.", "December."];
    return arrayName[monthNumber - 1];
}

console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));
console.log(monthName(0));
console.log(monthName(16));


//Q3
console.log("**3. Amplify the Multiples of 4.**");


//Q4
console.log("**4. One is not like the others...**");

function unique(numbers) {

    let result = 0;

    for (let i = 0; i < numbers.length; i++) {

        for (let b = 1; b < numbers.length; b++) {
            if (numbers[i] !== numbers[b]) {
                result = numbers[b];
            }
        }

    }
    return result;
}

console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([1, 1, 1, 2, 2, 3, 1, 1]));

//Q5
console.log("**5. Word Ranking.**");

//Q6
console.log("**6. c4n y0u r34d th15?**");

//Q - Bonus
console.log("## Bonus Questions");