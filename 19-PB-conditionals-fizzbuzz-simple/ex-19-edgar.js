`use strict`;
//Programming Basics: Fizzbuzz

let givenNumber = 33;

if (givenNumber % 3 === 0 && givenNumber % 5 === 0) {
    console.log(`FizzBuzz`);

} else if (givenNumber % 5 === 0) {
    console.log(`Buzz`);

} else if (givenNumber % 3 === 0) {
    console.log(`Fizz`);
} else {
    console.log(givenNumber);
}