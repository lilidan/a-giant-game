document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const startButton = document.getElementById('start-button');

    // Function to start the game
    function startGame() {
        // Clear the game board
        gameBoard.innerHTML = '';

        // Create a giant element (e.g., a large circle)
        const giantElement = document.createElement('div');
        giantElement.classList.add('giant-element');
        giantElement.style.width = '100px';
        giantElement.style.height = '100px';
        giantElement.style.backgroundColor = '#ffff00';
        giantElement.style.borderRadius = '50%';
        giantElement.style.position = 'absolute';
        giantElement.style.left = '50%';
        giantElement.style.top = '50%';
        giantElement.style.transform = 'translate(-50%, -50%)';

        // Append the giant element to the game board
        gameBoard.appendChild(giantElement);

        // Add event listener to move the giant element
        gameBoard.addEventListener('mousemove', (event) => {
            const rect = gameBoard.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            giantElement.style.left = `${x}px`;
            giantElement.style.top = `${y}px`;
        });
    }

    // Event listener for the start button
    startButton.addEventListener('click', startGame);
});