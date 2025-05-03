const backgroundMusic = document.getElementById('backgroundMusic');
const muteBtn = document.getElementById('muteBtn');

// Global sound state
window.soundEnabled = true;

// Make sure audio is not muted by default
backgroundMusic.muted = false;


const soundOnIcon = `<img src="assets/img/soundon.png" alt="Sound On" width="24" height="24">`;
const soundOffIcon = `<img src="assets/img/soundoff.png" alt="Sound Off" width="24" height="24">`;

muteBtn.innerHTML = soundOnIcon;

// Function to handle audio play
const playAudio = () => {
    if (window.soundEnabled) {
        backgroundMusic.play()
            .then(() => {
                console.log('Audio playing successfully');
            })
            .catch(error => {
                console.log('Playback prevented:', error);
                document.addEventListener('click', () => {
                    backgroundMusic.play();
                }, { once: true });
            });
    }
};

// Try to play immediately
playAudio();

// Toggle all game sounds
muteBtn.addEventListener('click', () => {
    window.soundEnabled = !window.soundEnabled;
    backgroundMusic.muted = !window.soundEnabled;
    muteBtn.innerHTML = window.soundEnabled ? soundOnIcon : soundOffIcon;
    
    // If unmuting, ensure audio is playing
    if (window.soundEnabled && backgroundMusic.paused) {
        playAudio();
    }
});