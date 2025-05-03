// Initialize all game sounds
const swimSound = new Audio('assets/sounds/jumpsound.mp3');
const scoreSound = new Audio('assets/sounds/point.mp3');
const collisionSound = new Audio('assets/sounds/die.mp3');

// Function to play the swim sound
function playSwimSound() {
    if (window.soundEnabled) {
        swimSound.currentTime = 0; // Rewind to start
        swimSound.play();
    }
}

// Function to play score sound
function playScoreSound() {
    if (window.soundEnabled) {
        scoreSound.currentTime = 0;
        scoreSound.play();
    }
}

// Function to play collision sound
function playCollisionSound() {
    if (window.soundEnabled) {
        collisionSound.currentTime = 0;
        collisionSound.play();
    }
}

// Listen for keydown events
document.addEventListener('keydown', function (e) {
    // Check if the pressed key is the spacebar
    if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault(); // Prevent default behavior like page scrolling
        playSwimSound();
    }
});

// Listen for touch/click events
document.addEventListener('click', function () {
    playSwimSound();
});
/*
    // Initialize the swim sound
    const swimSound = new Audio('assets/sounds/jumpsound.mp3');
    
    // Function to play the swim sound
    function playSwimSound() {
    swimSound.currentTime = 0; // Rewind to start
    swimSound.play();
    }


    // Listen for keydown events
    document.addEventListener('keydown', function (e) {
    // Check if the pressed key is the spacebar
    if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault(); // Prevent default behavior like page scrolling
        playSwimSound();
        // Add your swim logic here
    }
    });

    // Listen for touch/click events
    document.addEventListener('click', function () {
    playSwimSound();
    // Add your swim logic here
    });

   
*/