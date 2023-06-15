const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;

// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show the install button
  butInstall.style.display = 'block';
});

// Click event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Show the installation prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
    // Hide the install button
    butInstall.style.display = 'none';
  }
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('The app was installed.');
});
