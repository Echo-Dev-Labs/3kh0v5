fetch('games.json')
    .then(response => response.json())
    .then(games => {
        games.sort((a, b) => a.name.localeCompare(b.name));

        const container = document.querySelector('.g-container');
        container.innerHTML = '';
        const gamecdn = "https://glcdn.githack.com/kaioxdev/legacy-assets/-/raw/main/"

        games.forEach(game => {
            const link = document.createElement('a');
            link.className = 'g';
            //link.href = gamecdn + game.root + "/" + game.file;
            link.href = "play/index.html";
            const img = document.createElement('img');
            img.src = gamecdn + game.root + "/" + game.img;

            const h3 = document.createElement('h3');
            h3.textContent = game.name;

            link.addEventListener('click', () => {
                localStorage.setItem('game', JSON.stringify(game));
            });

            link.appendChild(img);
            link.appendChild(h3);

            container.appendChild(link);
        });
    })
    .catch(error => console.error('Error:', error));
