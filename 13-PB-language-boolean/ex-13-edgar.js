`use strict`;
//Q1
console.log(3 == "3" ? true : false );//compare values of the variable and not the type.
console.log(3 === "3" ? true : false );//compare values and type.
// What would happen if we were to use `=`? we assign a value to the variable.
//Which comparison operator should we generally use? Why? === is the better becouse it compare values and type 
//Q2
let a = true;
console.log(!a ? true : false);

//Q3
let firstName, givenName; //opening empty variables

firstName = 'Stacey'; // assign a value of `Stacey` to the varieble (firstName) 
let name = givenName || firstName || 'John';// assign a value of (givenName or firstName or 'John'), becouse (firstName) is the first with value = true, js stop looking to the other elements and it is the new value of (name).
console.log(name); // it is only printing on the console the log of the varible name.