const moveRandomButton = document.getElementById('move-random');

// Function to generate a random number within a specified range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to calculate and apply a new random ABSOLUTE position
function applyRandomPosition() {
    // Generate new random positions using percentages (0% to 85% for a wide, safe move)
    // Using 5% to 85% ensures the button never moves completely off-screen.
    const newLeft = getRandomNumber(5, 85);
    const newTop = getRandomNumber(5, 85);

    // CRITICAL FIX: Apply the new position using style.left and style.top (in percentages).
    // This forces an absolute jump across the entire screen (viewport).
    moveRandomButton.style.left = newLeft + '%';
    moveRandomButton.style.top = newTop + '%';
    
    // Clear conflicting CSS properties
    moveRandomButton.style.right = 'auto'; 
    moveRandomButton.style.bottom = 'auto'; 
    moveRandomButton.style.transform = 'none'; 
}

// Attach the event listener to the "No" button
moveRandomButton.addEventListener('mouseenter', applyRandomPosition);

// Set an initial random position when the page loads
window.addEventListener('load', applyRandomPosition);
