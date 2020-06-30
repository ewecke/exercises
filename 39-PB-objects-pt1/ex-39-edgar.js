"use strict";
//Q1
console.log("**1. Object Person.**");

const person = { 
    firstName: "John", 
    lastName: "Smith", 
    age: 11,
    job: "Designer",
    city: "Berlin",
 }

for (const myKey in person) {
    //console.log(`${myKey} : ${person[myKey]}`);
    console.log(myKey); 
}

console.log(Object.values(person));


//Q2
console.log("**2. Get Values.**");

function getObjectValues (arr) {
    let myValues = Object.values(arr);
    return myValues;
}

console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}));



//Q3
console.log("**3. Add A Method.**");

const person2 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",
    method: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} livin in ${this.city}`;
    }
}
console.log(person2.method());

//Bonus Questions 1
console.log("**1. Convert keys and values into an array.**");