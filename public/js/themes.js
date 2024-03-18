function changeTheme() {
    const selectedOption = document.getElementById('themeSelector').value;
    fetch('/themes.json')
        .then(response => response.json())
        .then(themes => {
            const theme = themes[selectedOption];
            applyTheme(theme);
            localStorage.setItem('theme', JSON.stringify(theme));
        })
        .catch(error => console.error('Error fetching themes:', error));
}

function applyTheme(theme) {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
    });
}

window.addEventListener('storage', function (e) {
    if (e.key === 'theme') {
        const newTheme = JSON.parse(e.newValue);
        if (newTheme) {
            applyTheme(newTheme);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme) {
        const parsedTheme = JSON.parse(theme);
        applyTheme(parsedTheme);
        document.getElementById('themeSelector').value = parsedTheme;
    }
});