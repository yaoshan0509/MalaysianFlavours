const shareButton = document.querySelector('.share-btn-fixed');
const shareOptions = document.querySelector('.share-options');

// Add click event listener to the share button
shareButton.addEventListener('click', function() {
    // Toggle the active class on the share button
    shareButton.classList.toggle('active');

    if (shareButton.classList.contains('active')) {
        // Show the share options
        shareOptions.style.opacity = '1';
        shareOptions.style.transform = 'scale(1)';
    } else {
        // Hide the share options, moving them back to the button
        shareOptions.style.opacity = '0';
        shareOptions.style.transform = 'scale(0)';
    }
});