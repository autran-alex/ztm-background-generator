// A few things you can try:

// 1. Write code so that the colour inputs match the background generated on the first page load.

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad-bg");

// Random HEX formula from CSS Tricks, I am guessing it is 0 to 1 times 256*256*256 to generate a large number, floor it and then convert to String.
function randomHEX() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);   
};

// Define Color Pickers' Inputs

function randInitial() {
    color1.value = randomHEX();
    color2.value = randomHEX();
}

function setBackground() {
    body.style.background =
        "linear-gradient(to top right, " + color1.value + ", " + color2.value + ") no-repeat center center fixed";

    button1.style.background = color1.value;
    button2.style.background = color2.value;

    css.textContent = color1.value + " " + color2.value;
};

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);
button1.addEventListener("click", function() {
    color1.value = randomHEX();
    setBackground();
});
button2.addEventListener("click", function() {
    color2.value = randomHEX();
    setBackground();
});
buttonall.addEventListener("click", function() {
    randInitial();
    setBackground();
});

// Randomizes first colors
//   Interesting: I initially placed it after matching BG
// and it didn't work as planned.
// >> PAY ATTENTION TO ORDER <<
randInitial();

// Matches BG and Color Pickers
setBackground();