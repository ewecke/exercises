`use strict`;

//Q-1
let color = `asdasd`;

switch (color) {
    case `red`:
        console.log(`Red`);
        break;
    case `blue`:
        console.log(`blue`);
        break;
    case `green`:
        console.log(`green`);
        break;
    case `yellow`:
        console.log(`yellow`);
        break;
    default:
        console.log("Its an error case! Something went wrong");
}

//Q-2
let gradeStars = 5;
switch (gradeStars) {
    case 1:
        console.log(`stars *`);
        break;
    case 2:
        console.log(`stars **`);
        break;
    case 3:
        console.log(`stars ***`);
        break;
    case 4:
        console.log(`stars ****`);
        break;
    case 5:
        console.log(`stars *****`);
        break;
    default:
        console.log("Its an error case! Something went wrong");
}

//Q-3
let fruit = `Banana`;
switch (fruit) {
    case `Banana`:
        console.log(`${fruit} 3.99€ / Kg`);
        break;
    case `Apple`:
        console.log(`${fruit} 5.99€ / Kg`);
        break;
    case `Ananas`:
        console.log(`${fruit} 1.99€ / Kg`);
        break;
    case `Orange`:
        console.log(`${fruit} 6.49€ / Kg`);
        break;
    default:
        console.log("Its an error case! Something went wrong");
}
//Q-4
let percentageComplete = 65;
let transToSiwitch = 0;

if (percentageComplete === 100) {
    transToSiwitch = 5;
} else if (percentageComplete > 80) {
    transToSiwitch = 4;
} else if (percentageComplete > 50) {
    transToSiwitch = 3;
} else if (percentageComplete > 30) {
    transToSiwitch = 2;
} else if (percentageComplete > 0) {
    transToSiwitch = 1;
} else {

}

switch (transToSiwitch) {
    case 1:
        console.log(`${percentageComplete}% Complete: Still a long way to go`);
        break;
    case 2:
        console.log(`${percentageComplete}% Complete: Slowly getting there`);
        break;
    case 3:
        console.log(`${percentageComplete}% Complete: You can do it!`);
        break;
    case 4:
        console.log(`${percentageComplete}% Complete: This is the last push!`);
        break;
    case 5:
        console.log(`${percentageComplete}% Complete: You're there. Well done!`);
        break;
    default:
        console.log("Its an error case! Something went wrong");
}

/* Q-5 - When should you use a switch statement versus an `if else` statement. Comment your answer in your js file?
switch statement is good for simple thinks when we dont have to use mutiple variebles or multiple comparisons and or multiple conditions  */