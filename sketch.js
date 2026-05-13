// ============================================================
// Week 1 Example 1: Images and Shapes
// ============================================================

// Variables declared outside of setup() and draw() are
// accessible everywhere in the sketch (global scope).
let controllerImg;

// ------------------------------------------------------------
// preload()
// Runs once before setup(). Always load images and sounds here
// so they are ready before the sketch tries to use them.
// If you load images inside setup() they may not appear.
// ------------------------------------------------------------
function preload() {
  // loadImage() takes a file path relative to index.html
  // The image is stored in the variable so we can use it later
  jengaImg = loadImage("assets/images/jenga.png");
  exit8Img = loadImage("assets/images/exit8.jpg");
  controllerImg = loadImage("assets/images/controller.png");
}

// ------------------------------------------------------------
// setup()
// Runs once at the very start of the sketch.
// Use it to set up your canvas and draw things that
// only need to appear once (not animated).
// ------------------------------------------------------------
function setup() {
  // createCanvas(width, height) sets the size of your canvas in pixels
  createCanvas(1600, 900);

  // background() fills the canvas with a colour
  // A single number = greyscale (0 is black, 255 is white)
  background(exit8Img);

  // ----------------------------------------------------------
  // SECTION 1: TEXT
  // ----------------------------------------------------------
  // --- Controller body ---
  // stroke() sets the outline colour — stroke(r,g,b) or a single greyscale value
  // strokeWeight() sets how thick the outline is in pixels
  // fill() sets the inside colour of the shape
  stroke(80);
  strokeWeight(2);
  fill(210);

  // rect(x, y, width, height, cornerRadius)
  // x, y = TOP-LEFT corner of the rectangle
  // The last argument rounds all four corners by that many pixels
  rect(width / 3, height / 4 + 15, 500, 100, 12);

  // fill() sets the colour used for shapes AND text
  // Three numbers = red, green, blue (each 0–255)
  fill(0, 0, 0); // white

  // textAlign() controls how text is anchored to its x position
  // CENTER means the x coordinate is the middle of the text
  textAlign(CENTER);
  textSize(30);

  // width and height are built-in p5.js variables that
  // always hold the canvas width and height

  text("Play Jenga with the anomaly!", width / 2, height / 3);

  // ----------------------------------------------------------
  // SECTION 2: DISPLAYING AN IMAGE
  // ----------------------------------------------------------

  // image(img, x, y, width, height) draws a loaded image
  // x and y are the TOP-LEFT corner of the image
  // The last two arguments resize the image to fit that space
  // HEREEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  image(jengaImg, 600, 400);
}

// ------------------------------------------------------------
// draw()
// Runs repeatedly in a loop after setup() finishes.
// Anything you want to animate or update goes here.
// This sketch has nothing to animate, so draw() is empty.
// ------------------------------------------------------------
function draw() {
  // Nothing here for now — everything is drawn once in setup()
}

// ------------------------------------------------------------
// mousePressed()
// A built-in p5.js event function.
// Automatically called once every time the mouse is clicked.
// mouseX and mouseY hold the current mouse position.
// ------------------------------------------------------------
function mousePressed() {
  // Draw a random-coloured circle wherever the user clicks
  fill(random(255), random(255), random(255));
  noStroke();
  circle(mouseX, mouseY, 40);
}

// ------------------------------------------------------------
// keyPressed()
// A built-in p5.js event function.
// Automatically called once every time a key is pressed.
// The key variable holds the character that was pressed.
// ------------------------------------------------------------
function keyPressed() {
  // Press "k" to log the current mouse position to the Chrome console.
  // This is a handy debug tool — use it to find coordinates when
  // placing shapes or images on the canvas.
  if (key === "k") {
    console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
  }
}
