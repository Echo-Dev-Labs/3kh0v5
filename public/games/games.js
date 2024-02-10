// Fetch the JSON file
fetch('games.json')
    .then(response => response.json())
    .then(games => {
        // Get the container to display the games
        const container = document.querySelector('.g-container');

        // Clear the container
        container.innerHTML = '';

        // Loop through the games
        games.forEach(game => {
            // Create a new link element
            const link = document.createElement('a');
            link.className = 'g';
            link.href = game.url;

            // Create a new image element
            const img = document.createElement('img');
            img.src = game.image;

            // Create a new heading element
            const h3 = document.createElement('h3');
            h3.textContent = game.name;

            // Append the image and heading to the link
            link.appendChild(img);
            link.appendChild(h3);

            // Append the link to the container
            container.appendChild(link);
        });
    })
    .catch(error => console.error('Error:', error));