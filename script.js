console.log("Script started");

// Start the game
function start() {
    createSquare(50);
    createSquare(80);
    createSquare(90)
    createSquare(110);
     console.log(Math.random() * 1000);
}

// Creates a square 
function createSquare(size) {
    // Create a element (div)
   let square = document.createElement("div");

    // Set some styles to make it a square 
    square.style.background = "red";
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.borderRadius = "16px";
    square.style.top = getRandomY() + "px";
    square.style.left = getRandomX() + "px";

    // Add it to thh page
    document.body.appendChild(square);

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