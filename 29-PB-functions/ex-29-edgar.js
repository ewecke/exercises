`use strict`
//1. Add Up.
console.log(`1. Add Up.`);
const addUp = (a) => {
    let result = null;
    for (let i = 1; i <= a; i++) {
        result += i;
    }
    return result;
}
console.log(addUp(10));
console.log(addUp(4));
console.log(addUp(3));
console.log(addUp(2));

//2. Cubed.
console.log(`2. Cubed.`);
const sumOfCubes = (a, b, c) => {
    let result = a ** 3 + b ** 3 + c ** 3;
    console.log(result);
}
sumOfCubes(1, 5, 9);

//3. String Check.
console.log(`3. String Check.`);
const stringCheck = (wordStart, word) => {
    if (word.startsWith(`${wordStart}`)) {
        return true;
    } else {
        return false;
    }
}
console.log(stringCheck("bu", "button"));
console.log(stringCheck("tri", "triplet"));
console.log(stringCheck("beau", "pastry"));

//4. Less Than or Equal to Zero?
console.log(`4. Less Than or Equal to Zero?`);

const lessThanOrEqualToZero = (a) => {
    if (a <= 0) { // i tried Ternary but did not work :( 
        return true;
    } else {
        return false;
    }
}
console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-4));
console.log(lessThanOrEqualToZero(10));

//5. Count Occurrences.
console.log(`5. Count Occurrences.`);
const countOccurrences = (word, letter) => {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            counter++;
        }
    }
    return console.log(`the letter "${letter}" is present ${counter} times on the word "${word}"`);
}
countOccurrences(`banana`, `b`);

//6 X To The Power of X.
console.log(`6 X To The Power of X.`);
const powerOfX = (baseNumber, exponentNumber) => {
    console.log(baseNumber ** exponentNumber);
}
powerOfX(5, 5);
powerOfX(10, 10);
powerOfX(3, 3);

//7. Dog Years.
console.log(`7. Dog Years.`);
const dogYears = (dogoAge) => {
    let covertedAge = dogoAge * 7;
    console.log(`the dog's age ${dogoAge} years is ${covertedAge} years in human years.`);
}
dogYears(7);
//8. A Lifetime Supply...
console.log(`8. A Lifetime Supply...`);
const calcSupply = (years, dailyConsumption, item) => {
    let totalConsupition = dailyConsumption * (years * 365);
    console.log(`You will need ${totalConsupition} ${item} (${dailyConsumption} a day) to last you til the age of 80.`);
}
calcSupply(40, 2, `bars of chocolate`);
calcSupply(40, 3, `packets of crisps`);

//9. Where's Waldo?
console.log(`9. Where's Waldo?`);
const waldoisfound = (isWaldoHere) => {
    if (isWaldoHere === `is there wal here ?`) {
        console.log(false);
    } else if (isWaldoHere === `I found you Waldo!`) {
        console.log(true);
    } else if (isWaldoHere === `is wally here?`) {
        console.log(true);
    } else if (isWaldoHere === `waldo is here`) {
        console.log(true);
    } else {
        console.log(`what ?`);
    }
}
waldoisfound(`is there wal here ?`);
waldoisfound(`I found you Waldo!`);
waldoisfound(`is wally here?`);
waldoisfound(`waldo is here`);
waldoisfound(`is today monday`);

//10. Pie.
console.log(`10. Pie.`);

//11. XO.
console.log(`11. XO.`);

//12. isPrime?.
console.log(`11. XO.`);

//13. Validate Email.
console.log(`13. Validate Email.`);