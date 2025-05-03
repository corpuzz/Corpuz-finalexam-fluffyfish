function checkCollision(fish, pipes, canvasHeight) {
    // Shrink the hitbox by trimming 10px from left/right and 10px from top/bottom
    const paddingX = 25;  // horizontal padding (left/right)
    const paddingY = 25;  // vertical padding (top/bottom)
  
    const fishHitbox = {
      left: fish.x + paddingX,
      right: fish.x + fish.width - paddingX,
      top: fish.y + paddingY,
      bottom: fish.y + fish.height - paddingY
    };
  
    for (let i = 0; i < pipes.length; i++) {
      const pipe = pipes[i];
  
      // Top pipe collision
      if (
        fishHitbox.right > pipe.x &&
        fishHitbox.left < pipe.x + pipeWidth &&
        fishHitbox.top < pipe.top
      ) {
        console.log("Game Over: Hit top pipe!");
        return true;
      }
  
      // Bottom pipe collision
      if (
        fishHitbox.right > pipe.x &&
        fishHitbox.left < pipe.x + pipeWidth &&
        fishHitbox.bottom > pipe.bottomY
      ) {
        console.log("Game Over: Hit bottom pipe!");
        return true;
      }
    }
  
    if (fish.y + fish.height >= canvasHeight) {
        fish.y = canvasHeight - fish.height;
        fish.velocity = 0;
        fish.angle = 90; // Face downward
        console.log("Game Over: Fish hit the ground!");
        return true;
      }
  
    return false;
  }
  