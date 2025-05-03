let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show the install button
    installBtn.classList.remove('d-none');
});

installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) {
        return;
    }
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // We've used the prompt, and can't use it again, discard it
    deferredPrompt = null;
    // Hide the install button
    installBtn.classList.add('d-none');
});

window.addEventListener('appinstalled', () => {
    // Hide the install button
    installBtn.classList.add('d-none');
    deferredPrompt = null;
});