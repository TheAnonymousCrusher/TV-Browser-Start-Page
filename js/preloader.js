// Wait for the window to load completely
function preload() {
    // Set a variable to represent the preloader element
    var preloader = document.querySelector(".preloader");

    // Use CSS transitions to fade out the preloader
    preloader.style.transition = "opacity 1s";

    // Hide the preloader after a delay (1 second in this case)
    setTimeout(function () {

        preloader.style.opacity = "0";

        // After the fade out, hide the preloader completely
        setTimeout(function () {
            preloader.style.display = "none";

        }, 1000); // You can adjust the delay here if needed
    }, 1000);
}