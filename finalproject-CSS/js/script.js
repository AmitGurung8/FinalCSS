// Call the function when the page loads
window.onload = function() {
    showSlides(); // This function is not defined in the provided code
};

// Function to play or close the trailer
function playTrailer() {
    var trailer = document.getElementById('trailer'); // Get the trailer element
    var trailerBtn = document.querySelector('.btn-watch'); // Get the trailer button
    if (trailer.style.display === 'block') { // If the trailer is currently displayed
        trailerBtn.textContent = 'Watch Trailer'; // Change button text to "Watch Trailer"
        trailer.style.display = 'none'; // Hide the trailer
        return; // Exit the function
    }
    // If the trailer is not displayed
    trailerBtn.textContent = 'Close Trailer'; // Change button text to "Close Trailer"
    trailer.style.display = 'block'; // Display the trailer
}

// Function to handle form submission
function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Show "Thank you" message in an alert box
    alert('Thank you for the feedback!');
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect(); // Get the bounding rectangle of the element
    return (
        rect.top >= 0 && // Check if the top of the element is visible
        rect.left >= 0 && // Check if the left side of the element is visible
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && // Check if the bottom of the element is visible
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) // Check if the right side of the element is visible
    );
}

// Function to add animation class when features section is in viewport
function animateFeatures() {
    const featuresSection = document.querySelector('.features'); // Get the features section element
    if (isInViewport(featuresSection)) { // If the features section is in viewport
        featuresSection.classList.add('animate-left-to-right'); // Add animation class to trigger animation
        // Remove the event listener after animation is triggered to prevent multiple animations
        window.removeEventListener('scroll', animateFeatures);
    }
}

// Add event listener to trigger animation when user scrolls
window.addEventListener('scroll', animateFeatures);

// Trigger animation on page load if features section is initially in viewport
animateFeatures();
