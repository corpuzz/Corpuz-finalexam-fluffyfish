
  
  function startGame() {
    gameRunning = true;
    gameLoop();
  }
  
  // Game loop: Update and Draw
  function update() {
    // Update fish movement
    updateFish(); // This function is defined in fish.js
    // Update pipe positions
    updatePipes(canvasWidth, canvasHeight);

    if (checkCollision(fish, pipes, canvasHeight)) {
      handleGameOver(score);
      return;
    }
    updateScore(fish, pipes, pipeWidth); // score.js
  }

  function draw() {
    //console.log("Draw function start");
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas each frame
    drawPipes(ctx, canvasHeight);  // Draw the pipes
    // Draw the fish
    drawFish(ctx); // This function is defined in fish.js
   
  }

  function gameLoop() {
    if (gameOver) return; // Stop the game loop if the game is over
  
    update();
    draw();
    requestAnimationFrame(gameLoop);// Recursively call the game loop
  }

