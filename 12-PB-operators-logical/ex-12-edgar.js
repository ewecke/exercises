`use strict`;
//Q1
let a = true;
let b = false;

console.log( a && b ? `a AND b = true` : `a AND b = false`);
console.log(a || b ? `a or b = true` : `a or b = false`);
console.log(!a && !b ? `a not b = true` : `a not b = false`); // i'm not sure  

//Q2
let x = 11;
let y = 13;
let z = 17;
    //Q3a
    console.log((x > z) && (x > y) ? `x is greater than z AND x is greater than y ? yes it is` : `x is greater than z AND x is greater than y ? no it is not`);
    //Q3b
    console.log((x !== y) ? `x is not equal to y` : `x is equal to y`);
    //Q3c
    console.log((z < y ) || ( z > x) ? `z is less than y OR z is greater than x` : `z is not less than y OR z is not greater than x`);
    //Q3d
    console.log((x === z) || (x !== y) ? `x is equal to z OR x is NOT equal to y.` :`x is not equal to z OR x is equal to y.`);
    //Q3e
    console.log(((x >= 10) && (y <= 10)) ? `x is greater than or equal to 10 AND y is less than or equal to 10` : `x is not greater than or equal to 10 AND y is not less than or equal to 10`);
    //Q3f
    console.log(((x * z) < 100) || ((x * y) > 100) ? `x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100` : `x multiplied by z is not less than 100 OR nether x multiplied by y is greater than 100` );
    //Q4 && = and || = or  
