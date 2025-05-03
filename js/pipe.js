// Once the image is loaded, set pipeImageLoaded to true
pipeImage.onload = () => {
  pipeImageLoaded = true;
  console.log("Pipe image loaded successfully.");
};

pipeImage.onerror = () => {
  console.error("Failed to load pipe image.");
};


// Generate new pipes every few frames
let pipeFrameCount = 0;
const pipeFrequency = 120; // Frequency of pipe generation (in frames)

// Update pipe positions and generate new pipes
function updatePipes(canvasWidth, canvasHeight) {
  if (pipeFrameCount % pipeFrequency === 0) {
    // Random gap size between minPipeGap and maxPipeGap
    const pipeGap = Math.floor(Math.random() * (maxPipeGap - minPipeGap + 1)) + minPipeGap;

    // Random height for the top pipe, ensuring there is a gap between top and bottom pipe
    const topHeight = Math.floor(Math.random() * (canvasHeight - pipeGap));  // Random height for top pipe
    const bottomY = topHeight + pipeGap; // Bottom pipe's Y position should be just below the top pipe + gap

    // Push new pipe objects (top and bottom pipe) into the pipes array
    pipes.push({
      x: canvasWidth,  // Start pipes offscreen on the right
      top: topHeight,
      bottomY: bottomY
    });
  }

  // Move pipes leftward
  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].x -= pipeSpeed;  // Move the pipe to the left

    // Remove pipe if it moves off the left side of the canvas
    if (pipes[i].x + pipeWidth < 0) {
      pipes.splice(i, 1);
    }
  }

  
  pipeFrameCount++;
}

// Draw pipes on canvas (top and bottom)
function drawPipes(ctx, canvasHeight) {
  if (!pipeImageLoaded) return;  // Ensure the image has loaded before drawing

  pipes.forEach(pipe => {
    const topHeight = pipe.top;
    const bottomY = pipe.bottomY;

    // Draw top pipe (flipped)
    ctx.save();
    ctx.translate(pipe.x + pipeWidth / 2, topHeight);
    ctx.scale(1, -1);  // Flip the pipe vertically
    ctx.drawImage(pipeImage, -pipeWidth / 2, 0, pipeWidth, topHeight);
    ctx.restore();

    // Draw bottom pipe
    const bottomPipeHeight = canvasHeight - bottomY; // Calculate height of bottom pipe
    ctx.drawImage(pipeImage, pipe.x, bottomY, pipeWidth, bottomPipeHeight);
  });
}
