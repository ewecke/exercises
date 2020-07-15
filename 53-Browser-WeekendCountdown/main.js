let main= [...document.querySelectorAll("main")];
let h3= document.querySelector("h3");
let button= document.querySelector("button"); 
let inp= document.querySelector("input");

main.forEach(element => {
    element.style.padding = "50px"
    element.style.width = "65%"
    element.style.margin = "auto"
});

h3.style.margin = "20px 0px 40px 0px";

let today = new Date();
const options = { weekday: 'long'};
let wceDay = today.toLocaleDateString('en-DE', options);

const optionsN = { weekday: 'long'};
let daysLeftToWe = 6 - (today.getDay()+1);

//event handler
function handler(event){
    h3.innerHTML="Hello " + inp.value + " today is " + wceDay + " Only " + daysLeftToWe + " days left until the weeckend!"
    inp.value=""
   /*  button.innerHTML="changed" */
}

//attaching event listener on button
button.addEventListener("click",handler)