function showNotifi(time, duration, color, title, message) {
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        background-color: ${color};
        font-size: 0.75em; 
        animation-duration: ${duration * 0.1}s;
    `;

    var notificationTitle = document.createElement('h2');
    notificationTitle.textContent = title;
    notification.appendChild(notificationTitle);

    var notificationMessage = document.createElement('p');
    notificationMessage.textContent = message;
    notification.appendChild(notificationMessage);

    var durationBar = document.createElement('div');
    durationBar.className = 'duration-bar';
    durationBar.style.animationDuration = `${duration}s`;
    durationBar.classList.add('decrease');
    notification.appendChild(durationBar);

    document.body.appendChild(notification);

    notification.classList.add('show');

    setTimeout(function() {
        notification.classList.add('hide');
        durationBar.classList.remove('decrease');
    }, duration * 1000);

    setTimeout(function() {
        notification.style.animationName = 'fadeOut';
        setTimeout(function() {
            document.body.removeChild(notification);
        }, (time - duration) * 1000);
    }, (time - 0.5) * 1000);
}
