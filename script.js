const moveRandomButton = document.getElementById('move-random');
const container = document.querySelector('.container');

// Function to generate a random number within a specified range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to calculate and apply a new random position
function applyRandomPosition() {
    // 1. Get the current size and position of the container and button
    const containerRect = container.getBoundingClientRect();
    const buttonRect = moveRandomButton.getBoundingClientRect();
    
    // 2. Define padding/offset from the edge of the container
    const offset = 20; // Matches the padding in .container
    
    // 3. Calculate the maximum safe movement range.
    // Ensure the button stays within the container's inner bounds (excluding padding).
    const maxX = containerRect.width - buttonRect.width - (2 * offset);
    const maxY = containerRect.height - buttonRect.height - (2 * offset);
    
    // 4. Generate new random X and Y positions within the safe range
    // Start from the offset to avoid touching the container edges
    const newX = getRandomNumber(offset, maxX);
    const newY = getRandomNumber(offset, maxY);

    // 5. Apply the new position using CSS transform (smoother than left/top)
    moveRandomButton.style.transform = `translate(${newX}px, ${newY}px)`;
}

// Fix 1: Attach the event listener to the "No" button
moveRandomButton.addEventListener('mouseenter', applyRandomPosition);

// Fix 2: Set an initial random position when the page loads
// This ensures the button doesn't start from a fixed position, preventing the initial glitch.
// We delay it slightly to ensure the CSS and layout have fully loaded.
window.addEventListener('load', () => {
    // Reset transform to 0,0 first to get accurate size
    moveRandomButton.style.transform = 'translate(0px, 0px)';
    // Apply the random position immediately
    applyRandomPosition();
});
