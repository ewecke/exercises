"use strict";

//Q1
console.log("Q1");

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let anotherVariable = euroCities[1];
console.log(anotherVariable);

//Q2
console.log("Q2");
euroCities[0] = ("Berlin");
//euroCities.unshift ("Berlin");
console.log(euroCities);

//Q3
console.log("Q3");
console.log(euroCities.length);

//Q4
console.log("Q4");
euroCities.pop();
console.log(euroCities);

//Q5
console.log("Q5");
euroCities.unshift("Budapest");
console.log(euroCities);

//Q6
console.log("Q6");
euroCities.splice(1, 2); // from position (1)two, for two positions  
console.log(euroCities);

//Q7
console.log("Q7");
const asianCities = ["Tokio", "Shanghai", "Taipei", "Kuala Lumpur", "Jakarta"];
console.log(asianCities);

//Q8
console.log("Q8");

//Q9
console.log("Q9");
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

//Q10
console.log("Q10");
worldCities.reverse();
console.log(worldCities);

//Q11
console.log("Q11");
worldCities[2] = ("Toronto");
console.log(worldCities);

//Q12
console.log("Q12");

//Q13 
console.log("Q13");

//Bonus 1 
function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substring(1)) + str.charAt(0);
}
console.log(reverseString("Hello World"));

//Extra Practice