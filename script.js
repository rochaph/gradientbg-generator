var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var defaultColor1 = "#00ff00"
var defaultColor2 = "#ff0000"

css.textContent = body.style.background;

window.addEventListener("load", startup, false);


function startup() {
    color1.value = defaultColor1;
    color2.value = defaultColor2;
    setColor();
}

function setColor () {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", " 
    + color2.value 
    + ")";
    
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);
