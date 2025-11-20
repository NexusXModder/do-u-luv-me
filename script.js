const moveRandomButton = document.getElementById('move-random');

// Function to generate a random number within a specified range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to calculate and apply a new random ABSOLUTE position
function applyRandomPosition() {
    // 1. Get the button's size (getBoundingClientRect is fine for this)
    const buttonRect = moveRandomButton.getBoundingClientRect();
    
    // 2. Define offset (padding from the edge of the window)
    const offset = 20; 
    
    // 3. Calculate the maximum safe movement range based on the window size.
    // This is the entire window size minus the button's size and the offset.
    const maxMoveX = window.innerWidth - buttonRect.width - (2 * offset);
    // We limit the vertical movement to keep it generally in the lower 70% of the screen
    // This prevents it from blocking the main text/GIF.
    const maxMoveY = window.innerHeight * 0.7 - buttonRect.height - (2 * offset); 
    
    // 4. Generate new random ABSOLUTE positions (Left and Top).
    const newLeft = getRandomNumber(offset, maxMoveX);
    const newTop = getRandomNumber(offset, maxMoveY);

    // 5. CRITICAL FIX: Apply the new position using style.left and style.top.
    // This forces an absolute jump across the entire screen.
    moveRandomButton.style.left = newLeft + 'px';
    moveRandomButton.style.top = newTop + 'px';
    
    // 6. Clear conflicting properties
    moveRandomButton.style.right = 'auto'; 
    moveRandomButton.style.bottom = 'auto'; // Clear bottom property
    moveRandomButton.style.transform = 'none'; 
}

// Attach the event listener to the "No" button
moveRandomButton.addEventListener('mouseenter', applyRandomPosition);

// Set an initial random position when the page loads
window.addEventListener('load', applyRandomPosition);
