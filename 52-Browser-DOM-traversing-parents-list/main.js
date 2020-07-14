"use strict";
//list of all parents Elements
let target = document.querySelector("cite");
let currentTarget = target;
let parentList= [];

while(currentTarget.parentElement) {
    parentList.push(currentTarget.parentElement.nodeName.toLowerCase())
    currentTarget = currentTarget.parentElement
};

let list = [...parentList.reverse()].join(" > ");
let printTarget = list + " > " + target.nodeName.toLowerCase();
console.log(printTarget);
//console.log(typeof(printTarget));




