let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let changeButton = document.querySelector(".change-color");
let body = document.getElementById("gradient");

css.textContent = body.style.background;

window.addEventListener("load", setColor(), false);

function changeColor() {
    aux = color1.value;
    color1.value = color2.value;
    color2.value = aux;
    setColor();
}

function setColor() {
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

changeButton.addEventListener("click", changeColor);