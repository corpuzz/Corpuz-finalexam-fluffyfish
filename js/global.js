const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define canvas dimensions
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const pipeImage = new Image();
pipeImage.src = "./assets/img/pipe.png";  // Ensure this path is correct

let pipeImageLoaded = false;

// Define the minimum and maximum gap between pipes
const minPipeGap = 100; // Minimum gap size
const maxPipeGap = 200; // Maximum gap size
const pipeWidth = 50;   // Width of the pipe
const pipeSpeed = 1.5;  // Speed at which the pipes move

let score = 0;
let passedPipeIndices = new Set();

let pipes = []; // Array to hold pipes
pipes.push({ passed: false  });

// Fish object and behavior
const fish = {
    x: 50,          // Horizontal position of the fish
    y: 150,         // Vertical position of the fish
    width: 80,      // Width of the fish
    height: 70,     // Height of the fish
    velocity: 0,    // Speed at which the fish moves vertically (affected by gravity and lift)
    gravity: 0.5,   // Gravity force that pulls the fish down
    lift: -6,       // Upward force applied when spacebar or mouse is clicked
    angle: 0,       // fish tilt angle in degrees
    isJumping: false, // Flag to check if the fish is jumping
    maxY: 480,      // Max Y (canvas height), to prevent fish from moving out of bounds
    minY: 0         // Min Y (top of canvas), to prevent fish from going above
  };
  
// Load the fish image
const fishImg = new Image();
fishImg.src = "assets/img/fish3.gif";  // Ensure the correct path for your fish image

// Flag to check if the fish image has been loaded
let fishImageLoaded = false;


