
//1. Combining Arrays
console.log("1. Array Destructuring");

[fruit, vegetable, food] = [];
[...food] = ["bread", "cakes", "pizza"];
console.log(food);

//2.Object Destructuring
console.log("2.Object Destructuring");
"use strict";
const custome = {
    Fran,
    Maria,
    Martin
} = {
    Fran: "witch",
    Maria: "nurse",
    Martin: "Smurf"
};

console.log(custome(Fran, Maria, Martin));

//3. Parameters: Object Destructuring 
console.log("2.Object Destructuring");

const band = {
    nameOf,
    greatestHit,
    lastAlbum,
    nationality,
    genere
} = {
    nameOf: "Sepultura",
    greatestHit: "Territory",
    lastAlbum: "Quadra",
    nationality: "Brasilian",
    genere: "Industrial Metal"
};
function print (nameOfx, greatestHitx, lastAlbumx, nationalityx, generex) {
    return `${nameOf} ${greatestHit} ${lastAlbum} ${nationality} ${genere}`;
};
console.log(print(band));
