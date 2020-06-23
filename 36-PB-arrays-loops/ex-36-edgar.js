"use strict";

//Q1
console.log("**sumOfNumbers.**");

function sumOfNumbers(myArray) {
    let array = [];

    return myArray;
}
console.log(sumOfNumbers([3, 4, 6]));
console.log();


//Q2 
console.log("**Hello Frien**");

function helloFriend(hello) {
    let myFriends = "";
    for (let i = 0; i < hello.length; i++) {
        myFriends += "*Hello " + hello[i] + "! " + hello[i] + " is at index " + (i + 1) + " of my friends array, ";
    }
    return myFriends;
}
console.log(helloFriend(["Germana", "Mauro", "Petria", "Thiago", "Giuliano", "Christian", "Daniel"]));
console.log();

//Q3
console.log("**City Names.**");

const cityNames = ["Berlin", "Sao Paulo", "Tokio", "Manaus", "Macau", "Santa Rita Do Passa Quatro"];

function strCityNames() {

    let strCities = "";

    for (let i = 0; i < cityNames.length; i++) {
        strCities += cityNames[i] + ", ";
    }

    return strCities;
}
console.log(strCityNames());
console.log();

//Q4
console.log("**Odds and Evens.**");

function oddsAndEvens(myArray) {
    const result = [];

    for (let i = 0; i < myArray.length; i++) {

        if (myArray[i] % 2 === 0) {
            result.push(myArray[i] - 1);
        } else {
            result.push(myArray[i] + 1);
        }
    }

    return result;
}
console.log(oddsAndEvens([3, 5, 2, 4]));
console.log(oddsAndEvens([6, 9, 10, 20]));
console.log();

//Q5 
console.log("**Capitalize.**");

function capitalize (myArray) {

    const result = [];

    for (let i = 0; i < myArray.length; i++) {
        result.push(myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1));
    }

    return result;
}

console.log(capitalize(["matt", "sara", "lara"]));
console.log(capitalize(["samuel", "MARIA", "luke", "mary"]));
console.log(capitalize(["Cynthia", "Karen", "Jane", "Carrie"]));
console.log();

