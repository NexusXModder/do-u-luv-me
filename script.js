const moveRandomButton = document.getElementById('move-random');
const container = document.querySelector('.container');

// Function to generate a random number within a specified range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to calculate and apply a new random ABSOLUTE position
function applyRandomPosition() {
    // 1. Get the current size of the container and button.
    const containerRect = container.getBoundingClientRect();
    const buttonRect = moveRandomButton.getBoundingClientRect();
    
    // 2. Define padding/offset from the edge of the container
    const offset = 20; // Matches the 20px padding in .container
    
    // 3. Calculate the maximum safe movement range inside the container.
    // Max movement is container size minus button size and padding offset.
    const maxMoveX = containerRect.width - buttonRect.width - (2 * offset);
    const maxMoveY = containerRect.height - buttonRect.height - (2 * offset);
    
    // 4. Generate new random ABSOLUTE positions.
    const newLeft = getRandomNumber(offset, maxMoveX);
    const newTop = getRandomNumber(offset, maxMoveY);

    // 5. CRITICAL FIX: Apply the new position using style.left and style.top.
    // This forces an absolute jump, fixing the issue where it stopped moving.
    moveRandomButton.style.left = newLeft + 'px';
    moveRandomButton.style.top = newTop + 'px';
    
    // 6. Clear conflicting properties (like the initial 'right' and 'transform')
    moveRandomButton.style.right = 'auto'; 
    moveRandomButton.style.transform = 'none'; 
}

// Attach the event listener to the "No" button
moveRandomButton.addEventListener('mouseenter', applyRandomPosition);

// Set an initial random position when the page loads to prevent the initial "glitch"
window.addEventListener('load', applyRandomPosition);
