const moveRandomButton = document.getElementById('move-random');
const container = document.querySelector('.container');

// Function to generate a random number within a specified range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Attach the event listener to the "No" button
moveRandomButton.addEventListener('mouseenter', function() {
    // 1. Get the current size and position of the container and button
    const containerRect = container.getBoundingClientRect();
    const buttonRect = moveRandomButton.getBoundingClientRect();

    // 2. Calculate the maximum safe movement range.
    // Subtract the button's dimensions to ensure it stays fully visible inside the container.
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    // 3. Generate new random X and Y positions within the safe range
    const newX = getRandomNumber(0, maxX);
    const newY = getRandomNumber(0, maxY);

    // 4. Apply the new position using CSS transform (smoother than left/top)
    // This requires the button to be styled with 'position: absolute' and the container with 'position: relative' in style.css.
    moveRandomButton.style.transform = `translate(${newX}px, ${newY}px)`;
});
