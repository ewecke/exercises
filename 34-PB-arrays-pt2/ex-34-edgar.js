"use strict"; 

//Q1
console.log("**1. The Greater Numbers.**");

function greaterNum(array, num) {
    let myArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            myArray.push(array[i]);
        }
    }
    return myArray;
}
console.log(greaterNum([3, 4, 5], 4));
console.log(greaterNum([10, 20, 30], 12));
console.log(greaterNum([0, 10, 3], 4));

//Q2
console.log( "** 2. For the longest word. **" );

/* function longestWord(myString) {
    let longestWord = myString.split(' ').sort(function (a, b) {
        return b.length - a.length;
    });
    return longestWord;
} */

//console.log(longestWord("this is a web development course"));

console.log("**3. Reverse.**");

function reverseNum(int) {
    int = int + "";
    return int.split("").reverse().join("");
}

console.log(reverseNum(34532));
console.log(reverseNum(98765));

//Q4
console.log("**4. AEIOU: Vowels.**");

function numberOfVowels (str) {
    const vowels = str.match(/[aeiou]/gi); // (match) is going to look to any part of the string (i) search case sensitive
    return vowels.length;
}
console.log(numberOfVowels ("this is AA  ee a is a string"));

//Q5
console.log("**5. Missing Number.**");


//Q6
console.log("**6. Cubed.**");

function sumOfCubes (myArray2) {
    let cube = 0;
    for (let i = 0; i < myArray2.length; i++){
        cube += Math.pow(myArray2[i], 3);
    } 
    return cube
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));

//Q7
console.log("**7. Dictionary.**");

function dictionary (str, myArray){
    const result = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].startsWith(str)) {
            result.push(myArray[i]);
        }
    }
    return result;
}
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

//Q8
console.log("**8. Even Number Generator.**");

function evenNums (myNumber) {
    const result = [];
    for (let i = 2; i <= myNumber; i+=2)
 //   if (i% 2 === 0) { 
        result.push(i)
//    }
    return result
}
console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));

//Q9

// .sort 
// 
