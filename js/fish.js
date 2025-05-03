
  fishImg.onload = () => {
    fishImageLoaded = true;
  };
  
  fishImg.onerror = () => {
    console.error("Failed to load fish image.");
  };
  

  // Function to update the fish's position
  function updateFish() {
    fish.velocity += fish.gravity;
    fish.y += fish.velocity;
  
  // Limit fall
  if (fish.y + fish.height > canvasHeight) {
    fish.y = canvasHeight - fish.height;
  }

  // Adjust angle based on velocity
  if (fish.velocity < 0) {
    fish.angle = -20; // Going up
  } else if (fish.velocity > 0) {
    fish.angle = Math.min(90, fish.angle + 2); // Falling
  }

    // Clamp fish position to canvas bounds
    fish.y = Math.max(0, Math.min(fish.y, fish.maxY - fish.height));

    // Calculate angle based on velocity (limit to -30° to +90°)
    const maxDownAngle = 90;
    const maxUpAngle = -30;

    fish.angle = Math.min(maxDownAngle, Math.max(maxUpAngle, fish.velocity * 5));
  }
  
  // Function to make the fish jump (when spacebar is pressed or mouse is clicked)
  function fishJump() {
    fish.velocity = fish.lift; // Apply the lift force to the fish
    fish.isJumping = true; // Set jumping flag to true
  }
  
  // Function to draw the fish on the canvas
  function drawFish(ctx) {
    if (fishImageLoaded) {
      //ctx.drawImage(fishImg, fish.x, fish.y, fish.width, fish.height);
      const centerX = fish.x + fish.width / 2;
      const centerY = fish.y + fish.height / 2;
    
      ctx.save();
      
      // Add glowing effect
      ctx.shadowColor = 'rgba(10, 10, 10, 0.5)';  // White glow
      ctx.shadowBlur = 25;  // Adjust the blur radius
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      
      ctx.translate(fish.x + fish.width / 2, fish.y + fish.height / 2);
      ctx.rotate((fish.angle || 0) * Math.PI / 180); // default to 0 if angle not set
      ctx.drawImage(fishImg, -fish.width / 2, -fish.height / 2, fish.width, fish.height);
      ctx.restore();
    } else {
      console.error("Fish image is not loaded yet.");
    }


  }
  
  // Event listener for user interactions (spacebar or mouse click)
  function initializeFishControls() {
    // Handle spacebar press
    document.addEventListener("keydown", (event) => {
      if (event.key === " " || event.key === "Spacebar") {
        fishJump(); // Make the fish jump when space is pressed
      }
    });
  
    // Handle mouse click
    document.addEventListener("click", () => {
      fishJump(); // Make the fish jump when mouse is clicked
    });
  }
  
  // Call the initialize function to set up event listeners
  initializeFishControls();
  