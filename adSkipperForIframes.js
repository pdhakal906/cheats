// First open the browser developer tools using only the keyboard: Ctrl + Shift + I (Google Chrome) 
// Then run this code in the developer tools console tab to skip annoying redirects when you try to switch to full screen view.
// Make sure the site has video inside a single <iframe> tag.

// The code gets the iframe by TagName and uses the Fullscreen API to make the video full screen,
// without one having to click on the full screen button, which triggers the redirect the to advertisement site.

const iframes = document.getElementsByTagName('iframe');
const iframe = iframes[0];
// Function to make the iframe fullscreen
function makeIframeFullscreen() {
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { // For Safari
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // For older IE/Edge
        iframe.msRequestFullscreen();
    } else {
        alert('Fullscreen API is not supported in your browser.');
    }
}

// Call the function immediately when the script runs
makeIframeFullscreen();
