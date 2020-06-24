"use strict"; 

//Q1
console.log("Q1");

function pattern () {
    let result = "";
    for (let i = 0; i < 5 ; i++) {
        for (let j = 0; j < 1; j++) {
            result += "*";
        }
        result += " ";
        console.log(result);
    }
}
pattern();


//Q2 
console.log("Q2");

let arr = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27], 
    [7, 4, 28, 14], 
    [3, 10, 26, 7]
];

function print (array) { 
    for (let i = 0; i < array.length; i++) {
        console.log("row", i);
        for (let j = 0; j < array[i].length; j++) {
            console.log(" " + array[i][j]);          
        }
    }
}
print(arr);


//Q3
console.log("Q3");
function myNumbers () {

}

myNumbers();