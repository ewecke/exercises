"use strict";
//Q1
console.log("Q1 - ");

const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    method: function () {
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}`;
    }
 }
 console.log(student.method());

//Q2
console.log("Q2 - ");

const person = { 
    firstName: "John", 
    lastName: "Smith", 
    age: 11,
    job: "Designer",
    city: "Berlin",
    method: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} livin in ${this.city}`;
    }
 }
 console.log(person.method());

 //Q3
 console.log("Q3 - ");

 console.log(Object.keys(person).length);

 
 