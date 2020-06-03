`use strict`;
//Q1
console.log(`1. **Addition.** `);

for (let i = 0, forSum = 0; i <= 20; i++) {
    forSum = i + forSum;
    console.log(forSum);
}

//Q2
console.log(`2. **There are i bottles of beer on the wall.** `);

for (let bottleNumber = 0; bottleNumber < 6; bottleNumber++) {

    if (bottleNumber === 1) {
        console.log(`There is one bottle of beer on the wall.`);
    } else if (bottleNumber === 2) {
        console.log(`There is two bottle of beer on the wall.`);
    } else if (bottleNumber === 3) {
        console.log(`There is three bottle of beer on the wall.`);
    } else if (bottleNumber === 4) {
        console.log(`There is four bottle of beer on the wall.`);
    } else if (bottleNumber === 5) {
        console.log(`There is five bottle of beer on the wall.`);
    } else {}
}

//Q3
console.log(`3. **The odd/even reporter.**`);

for (let q3Number = 0; q3Number < 21; q3Number++) {
    console.log(q3Number);
    if (q3Number % 2 === 0) {
        console.log(`is even`);
    } else {
        console.log(`is odd`);
    }
}

//Q4
console.log(`4. **Multiplication Tables.**`);

for (let index = 0; index <= 10; index++) {
    console.log(index);
    console.log(`${index} x 9 = ${index * 9}`);
}

//Q5
console.log(`5. **Fizz Buzz**`);

for (let numberQ5 = 0; numberQ5 < 101; numberQ5++) {
    if (numberQ5 % 3 === 0 && numberQ5 % 5 === 0) {
        console.log(`FizzBuzz`);
    } else if (numberQ5 % 3 === 0) {
        console.log(`Fizz`);
    } else if (numberQ5 % 5 === 0) {
        console.log(`Buzz`);
    } else {
        console.log(`${numberQ5}`);
    }
}

//Q6
console.log(`6. **Sum of Multiples**`);

let somQ6 = 0;
for (let numberQ6 = 0; numberQ6 < 1000; numberQ6++) {
    if (numberQ6 % 3 === 0 || numberQ6 % 5 === 0){
        somQ6 = somQ6 + numberQ6;
    }
}
console.log(`${somQ6}`);

//Q7
console.log(`**Bonus** `);
