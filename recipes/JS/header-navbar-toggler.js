let navbarToggler = document.getElementById('navbar-toggler');
let navbarMenu = document.getElementById('navbar-menu');
let closeBtn = document.getElementById('close-btn');

// Toggle menu visibility when navbar-toggler is clicked
navbarToggler.addEventListener('click', function() {
    // Toggle the 'active' class on the overlay menu
    navbarMenu.classList.toggle('active');
});

// Close the menu when the close button is clicked
closeBtn.addEventListener('click', function() {
    // Remove the 'active' class to hide the menu
    navbarMenu.classList.remove('active');
});