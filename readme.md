# Flappy Fish

## Overview

**Flappy Fish** is a simple, addictive browser game inspired by the classic Flappy Bird, but with an underwater twist! Guide your fish through a series of pipes, avoiding obstacles and aiming for the highest score. The game is built as a Progressive Web App (PWA), allowing users to install and play offline on both desktop and mobile devices.

---

## Key Features

- **Addictive Gameplay:** Easy to play, hard to master—just tap or press space to swim!
- **Progressive Web App:** Installable on devices for offline play.
- **Responsive Design:** Optimized for both desktop and mobile screens.
- **Sound & Music:** Engaging background music and sound effects.
- **Score Tracking:** Displays your current and final score.
- **Restart & Mute:** Easily restart the game or mute sounds.
- **Install Prompt:** Users can install the game as an app from supported browsers.

---

## Installation Guide

### Play Online

URL: https://corpuzz.github.io/Corpuz-finalexam-fluffyfish/ 

[Play Flappy Fish](https://corpuzz.github.io/Corpuz-finalexam-fluffyfish/)

### Install as a PWA

1. Open the game in a supported browser (Chrome, Edge, etc.).
2. When prompted, click the **Install Game** button.
3. Alternatively, use your browser's install option (usually in the address bar).

### Local Setup

1. **Clone or Download** this repository.
2. Ensure all files are in the same directory structure.
3. Open `index.html` in your browser.
4. For full PWA features (like offline play), serve the folder with a local server (e.g., `npx serve .` or using VS Code Live Server).

---

## Gameplay Instructions

- **Start the Game:** Click the **Start Game** button.
- **Control the Fish:**  
  - **Desktop:** Press the **Spacebar** or click anywhere to make the fish swim upward.
  - **Mobile:** Tap anywhere on the screen.
- **Objective:** Swim through the gaps between pipes without hitting them or the ground.
- **Game Over:** If you hit a pipe or the ground, the game ends and your score is displayed.
- **Restart:** Click the **Restart** button to play again.
- **Mute:** Click the mute button to toggle sound.

---

## Technology Stack

- **HTML5** & **CSS3** (with Bootstrap for layout)
- **JavaScript** (Vanilla JS for game logic)
- **Service Worker** (for offline support)
- **Web App Manifest** (for PWA installability)
- **FontAwesome** (for icons)
- **Google Fonts** (for retro game font)

---

## Project Structure

```
/
├── assets/
│   ├── icons/                # App icons for PWA
│   ├── img/                  # Game images (fish, pipes, backgrounds)
│   └── sounds/               # Sound effects and background music
├── css/
│   ├── all.min.css           # FontAwesome CSS
│   ├── bootstrap.min.css     # Bootstrap CSS
│   └── styles.css            # Custom styles
├── js/
│   ├── background-music.js   # Handles background music
│   ├── collision.js          # Collision detection logic
│   ├── fish.js               # Fish movement and controls
│   ├── game.js               # Main game loop and logic
│   ├── gameover.js           # Game over screen logic
│   ├── global.js             # Global variables and setup
│   ├── install.js            # PWA install prompt logic
│   ├── pipe.js               # Pipe generation and movement
│   ├── score.js              # Score tracking and display
│   ├── service-worker.js     # Service worker for offline support
│   ├── sound.js              # Sound effects
│   └── start.js              # Start screen logic
├── index.html                # Main HTML file
├── manifest.json             # Web App Manifest for PWA
```

---

## Game Mechanics

- **Fish Movement:**  
  The fish is affected by gravity and can swim upward when the player taps or presses space. The fish tilts up when swimming and down when falling.

- **Pipes:**  
  Pipes move from right to left. Each pipe pair has a random gap. The player must guide the fish through these gaps.

- **Collision Detection:**  
  If the fish collides with a pipe or the ground, the game ends.

- **Scoring:**  
  The score increases by one each time the fish successfully passes through a pair of pipes.

- **Game Over:**  
  When the game ends, the final score is displayed, and the player can restart or install the game if not already installed.

