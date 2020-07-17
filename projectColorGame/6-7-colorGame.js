// Mode: easy or hard; default value is 6
var mode = 6;

var colors = [];
generateRandomColors(mode);
// Set picked color
var pickedColor = pickColor();

// Display the rgb number in h1
var pickedColorContent = document.querySelector("#pickedColor");
pickedColorContent.textContent = pickedColor;

// Set color and event listener for each square
var squares = document.querySelectorAll(".square");
// Set instruction about result
var messageDisplay = document.querySelector("#message")

// Button of "play again" or "new colors"
var newColors = document.querySelector("#newColors");

// Easy mode button and hard mode button
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");

// Easy and hard mode translation
easybtn.addEventListener("click", function () {
    // Change the background color
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    // Change mode
    mode = 3;
    // Generate colors and pick color
    generateRandomColors(mode);
    pickedColor = pickColor();
    pickedColorContent.textContent = pickedColor;
    for (var i = 0; i < mode; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    for (var i = 3; i < squares.length; i++) {
        squares[i].style.display = "none";
    }
    document.querySelector("h1").style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    newColors.textContent = "New Colors";

});

hardbtn.addEventListener("click", function () {
    // Change the background color
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    // Generate colors and pick color
    mode = 6;
    generateRandomColors(mode);
    pickedColor = pickColor();
    pickedColorContent.textContent = pickedColor;
    for (var i = 0; i < mode; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    document.querySelector("h1").style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    newColors.textContent = "New Colors";

});

//Assign eventlistener to each square and test if it's the picked color
for (var i = 0; i < squares.length; i++) {
    // Add initial color
    squares[i].style.backgroundColor = colors[i];
    // Add event listener
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeAllColor(pickedColor);
            newColors.textContent = "Play Again?"
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeAllColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    document.querySelector("h1").style.backgroundColor = color;
};

function pickColor() {
    return colors[Math.floor(Math.random() * mode)];
};

function generateRandomColors(num) {
    for (var i = 0; i < num; i++) {
        var rgb = [];
        for (var j = 0; j < 3; j++) {
            rgb.push(Math.floor(Math.random() * 256));
        }
        colors[i] = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    }
}

//Realize the function of generate new colors or play again
newColors.addEventListener("click", function () {
    //Generate random colors
    generateRandomColors(mode);
    //Assign colors to squares
    for (var i = 0; i < mode; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    //Pick a color and change the color display message
    pickedColor = pickColor();
    pickedColorContent.textContent = pickedColor;
    //reset h1 background color
    document.querySelector("h1").style.backgroundColor = "steelblue";
    // Change the button content to "New colors" whether it used to be "New colors" or "Play again"
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
});