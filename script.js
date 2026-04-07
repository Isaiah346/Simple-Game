console.log("Script started");
let currentSize = 50;
let timeLeft = 20;
let interValid = 0;

// Start the game
function start() {
    createSquare(50, "red");
    createSquare(60, "green");
    createSquare(70, "blue")
    createSquare(80, "orange");
     console.log(Math.random() * 1000);
     setTimeout(updateTimer, 1000);
     setInterval(updateTimer, 1000);
}

function updateTimer() {
    let timer = document.getElementById("timer");
    timeLeft = timeLeft - 1;
    timer.innertext = timeLeft + "s";
    if (timeLeft <= 0) {
        alert("Game over");
    }
}

// Creates a square 
function createSquare(size, color) {
    // Create a element (div)
   let square = document.createElement("div");

    // Set some styles to make it a square 
    square.style.background = color;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.borderRadius = "16px";
    square.style.top = getRandomY() + "px";
    square.style.left = getRandomX() + "px";

    // Add it to thh page
    document.body.appendChild(square);

    // Add click event 
    square.addEventListener("click", handleClick);
}

// Generate a random x cordinate
function getRandomX() {
    let randX = Math.random() * window.innerWidth;
    return randX;
}

// Generate a random y cordinate 
function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}

// Handle the player clicking a square
function handleClick(event) {
    let square = event.target;
    console.log(square.style.width);
    if (square.style.width == currentSize + "px"){
        console.log("first square");
        square.remove();
        currentSize = currentSize + 10; 
    }
    
}