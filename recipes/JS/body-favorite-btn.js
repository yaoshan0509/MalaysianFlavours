document.querySelectorAll('.favorite-btn').forEach(function(btn) {
    // Add a click event listener to each favorite button
    btn.addEventListener('click', function() {
        // Toggle the active class on the button
        btn.classList.toggle('active');

        // Toggle between showing the outlined and filled hearts
        let outlineIcon = btn.querySelector('.outline');
        let filledIcon = btn.querySelector('.filled');

        if (btn.classList.contains('active')) {
            outlineIcon.classList.add('d-none'); // Hide the outlined heart
            filledIcon.classList.remove('d-none'); // Show the filled heart
        } else {
            outlineIcon.classList.remove('d-none'); // Show the outlined heart
            filledIcon.classList.add('d-none'); // Hide the filled heart
        }
    });
});