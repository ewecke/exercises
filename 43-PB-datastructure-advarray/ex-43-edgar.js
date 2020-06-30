"use strict";

//1. Get total orders
console.log("1. Get total orders");

const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

let totalAmount = 0;
for (const amountValues of orders) {
    totalAmount += +[...Object.values(amountValues)];
}

console.log(totalAmount);

//2. Increment by 1
console.log("2. Increment by 1");


const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const arrayOfNumbersPlusOne = arrayOfNumbers.map((value) => {
    return value + 1;
});
console.log(arrayOfNumbers);
console.log(arrayOfNumbersPlusOne);


//3. Filter Evens
console.log("3. Filter Evens");

function filterEvens(arr) {
    const result = arr.filter(function (evens) {
        return evens % 2 === 0;
    });
    return result;
}

console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]


//4. Filter Friends
console.log("4. Filter Friends");
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterItems(friends, letters) {
    const newFriends = friends.filter(function (friends) {
        return friends.includes(letters);
    });
    return newFriends;
}

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];


//5. Sum Up
console.log("5. Sum Up");

function sum(arr) {
    const sum = arr.reduce(function (prev, curr) {
        return prev + curr;
    });
    return sum;
};

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));

//6. Square Root
console.log("6. Square Root");

const arrSquare = [9, 25, 900, 100, 4, 1000030000];
const arrayNumbersSquare = arrSquare.map((value) => {
    return Math.sqrt(value);
});

console.log(arrayNumbersSquare);
console.log(arrSquare);