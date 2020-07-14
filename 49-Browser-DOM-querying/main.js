let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let header = [...document.getElementsByClassName("title")];
let main = [...document.getElementsByClassName("main")];

let foodCategory = [...document.getElementsByClassName("food-category")];

let allergyWarning = [...document.getElementsByClassName("allergy-warning")];
let warning = document.getElementById("warning");
let allergies = [...document.getElementsByClassName("allergies")];
let allergyInfo = [...document.getElementsByClassName("allergy-info")];
let even = document.querySelectorAll(".allergies li:nth-child(even)");

let footer = [...document.getElementsByClassName("footer")];
let foodDesc = [...document.getElementsByClassName("food-desc")];
let category = [...document.getElementsByClassName("category")];

const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor
}

body.style.fontFamily = "Arial, Helvetica, sans-serif"
h1.style.textAlign = "center"



main.forEach(element => {
    element.style.display = "flex"
    element.style.flexWrap = "wrap"
    element.style.justifyContent = "center"
});

warning.style.textAlign = "center"

allergies.forEach(element => {
    element.style.width = "25%"
    element.style.margin = "auto"
    element.style.listStyleType = "none"
    element.style.padding = "0"
    element.style.minWidth = "250px"
});

even.forEach(element => {
    element.style.background = "#2525ff"
});

foodCategory.forEach(element => {
    element.style.width = "25%"
    element.style.minWidth = "250px"
    element.style.padding = "15px"
    element.style.margin = "10px"
    element.style.paddingLeft = "40px"
    element.style.backgroundColor = setBg();
    element.style.border = "1px solid gray"
});


category.forEach(element => {
    element.style.fontSize = "20px"
    element.style.color = "red"
    element.style.fontStyle = "italic"
    element.style.textShadow = "2px 0px 2px #cccccc"
});

footer.forEach(element => {
    element.style.margin = "20px"
    element.style.display = "flex"
    element.style.flexWrap = "wrap"
    element.style.justifyContent = "center"

});

foodDesc.forEach(element => {
    element.style.boxSizing = "border-box"
    element.style.border = "5px solid yellow"
    element.style.borderRadius = "50%"
    element.style.width = "120px"
    element.style.height = "120px"
    element.style.textAlign = "center"
    element.style.paddingTop = "23px"
    element.style.margin = "25px"
});