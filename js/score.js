

// Initialize the score display
function resetScore() {
  score = 0;
  passedPipeIndices.clear();
  updateScoreDisplay();
}

function updateScore(fish, pipes, pipeWidth) {
    pipes.forEach((pipe) => {
      if (!pipe.passed && fish.x > pipe.x + pipeWidth) {
        pipe.passed = true;
        score++;
        updateScoreDisplay();
        playScoreSound(); // Add this line to play sound when scoring
      }
    });
  }
  
// Update the score shown on screen
function updateScoreDisplay() {
  const display = document.getElementById("scoreDisplay");
  if (display) {
    display.textContent = `Score: ${score}`;
  }
}

// Optional: get score for game over screen
function getScore() {
  return score;
}
