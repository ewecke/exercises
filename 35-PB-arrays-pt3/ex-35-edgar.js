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

function amplify(number) {

}

console.log(amplify(4));
console.log(amplify(3));
console.log(amplify(25));



//Q4
console.log("**4. One is not like the others...**");

function unique(numbers) {
    let result;
    for (let i = 1; i < numbers.length - 1; i++) {
        for (let b = 0; b < numbers.length; b++) {
            if (numbers[i] !== numbers[b]) {
                result = numbers[b];
            }
        }
    }
    return result;
}

console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([1, 0, 0, 0, 0, 1, 8]));
console.log(unique([1, 1, 1, 2, 2, 3, 3, 3, 0, 0, 5]));


//Q5
console.log("**5. Word Ranking.**");

function wordRank(str) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    function alphabetScore (score) {
        for (let i = 0; i > alphabet.length; i++);
        score = [ ]
    }
}

console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Today is Wednesday."));

//Q6
console.log("**6. c4n y0u r34d th15?**");

function hackerSpeak (str){

}
console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));


//Q - Bonus
console.log("## Bonus Questions");