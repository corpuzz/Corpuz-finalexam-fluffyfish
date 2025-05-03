$(document).ready(function () {
  let gameStarted = false;

  console.log("asdfasd");
  // When the "Start Game" button is clicked
  $('#startBtn').click(function () {
    $('#startScreen').addClass('d-none');  // Hide the start screen
    gameStarted = true;

    startGame();  // Call the function to start the game
  });

  function startGame() {
    // Your game initialization and logic to start the game
    console.log("Game Started");

    // Call the game loop or initialization functions here
    gameLoop();  // Assuming you have a game loop defined elsewhere
  }
});
