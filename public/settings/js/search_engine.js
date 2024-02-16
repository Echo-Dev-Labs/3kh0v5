function selectSearchEngine(value) {
    localStorage.setItem('searchEngine', value);
    document.getElementById('uv-search-engine').value = value;
}
