var panickey = document.getElementById('panic-key-input');
var panicwebsite = document.getElementById('panic-website-input');

function selectSearchEngine(searchvalue) {
    localStorage.setItem('searchEngine', searchvalue);
    //document.getElementById('uv-search-engine').value = searchvalue;
    showNotifi(3, 3, 'green', 'Success', 'Settings saved successfully!');
}

function setPanicKey() {
    var panickey = document.getElementById('panic-key-input').value;
    var panicwebsite = document.getElementById('panic-website-input').value;
    if (panicwebsite.includes('http://') || panicwebsite.includes('https://')) {
        localStorage.setItem('panicKey', panickey);
        localStorage.setItem('panicWebsite', panicwebsite);
        showNotifi(3, 3, 'green', 'Success', 'Settings saved successfully!');
    } else {
        localStorage.setItem('panicKey', panickey);
        localStorage.setItem('panicWebsite', 'http://' + panicwebsite);
        showNotifi(3, 3, 'green', 'Success', 'Settings saved successfully! \n Tip: Please put http:// or https:// before the website next time!');
    }
}
panickey.setAttribute('value', localStorage.getItem('panicKey'));
panicwebsite.setAttribute('value', localStorage.getItem('panicWebsite'));
document.getElementById('searchEngineSelect').setAttribute('value', localStorage.getItem('searchEngine'));