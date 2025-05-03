let gameOver = false;

function handleGameOver(score) {
  gameOver = true;
  playCollisionSound(); // Add this line to play sound on collision

  // Display score in Game Over screen
  document.getElementById("finalScore").innerText = score;

  // Show Game Over screen
  document.getElementById("gameOverScreen").classList.remove("d-none");
  document.getElementById("scoreDisplay").classList.add("d-none");
}

function restartGame() {
  location.reload(); // Simple reset
}

// Attach event listener to restart button
document.addEventListener("DOMContentLoaded", () => {
  const restartBtn = document.getElementById("restartBtn");
  if (restartBtn) {
    restartBtn.addEventListener("click", restartGame);
  }
});
