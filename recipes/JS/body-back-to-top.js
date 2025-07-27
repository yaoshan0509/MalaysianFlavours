document.addEventListener("scroll", function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 1500) { // Show button after scrolling down 300px
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});