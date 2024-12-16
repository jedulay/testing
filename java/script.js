document.getElementById('clickableImage').addEventListener('click', function() {
    const flash = document.getElementById('flash');
    flash.classList.add('flash-animation');

    // Wait for the animation to complete before navigating
    setTimeout(() => {
        window.location.href = "home"; // Replace with your target page URL
    }, 500); // Match the duration of the flash animation
});

document.getElementById('clickableImage').addEventListener('click', function() {
    const flash = document.getElementById('flash');
    flash.classList.add('flash-animation');

    // Wait for the animation to complete before navigating
    setTimeout(() => {
        window.location.href = 'home2.html'; // Replace with your target page URL
    }, 3000); // Match the duration of the flash animation (3 seconds)
});

