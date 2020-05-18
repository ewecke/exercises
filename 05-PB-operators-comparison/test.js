"use strict";
//Q0
let x = 20;
let y = 30;
//Q1
console.log("x and y are equal = " + (x === y));
//Q2
console.log("x and y are *not* equal = " + (x !== y));
//Q3
console.log("x is greater than y = " + (x > y));
//Q4
console.log("x is less than or equal to y = " + (x <= y));
//Q5
console.log("y is greater than x = " + (y > x));
//Q6
let z = 5;
console.log((z * x) > (z + y) ? "z * x is greater" : "z + y is greater");
//Q7
console.log((x - z) < (y / z) ? "x - z is less than y / z" : "x - z is more than y / z");
//Q8
console.log("Are z, x and y equal ? " + ( z === x === y));
//Q9
console.log("Are remainder of x / z and y / z  equal : " + ((x % z) === (y % y)));
//Q10 is (not working 100%)
console.log("Is z + x is greater than y minus z ? " + ((z + x) > (y - z)) ? "z + x is greater than y - z" : x+++ + "+ 1 and now it is");
//Q11
//Done