document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    
    // Function to show preloader
    function showPreloader() {
        preloader.style.display = 'flex';
    }
    
    // Function to hide preloader
    function hidePreloader() {
        preloader.style.display = 'none';
        if (content) {
            content.style.display = 'block';
        }
    }
    
    // Show preloader initially
    showPreloader();
    
    // Wait for all resources to finish loading
    window.addEventListener('load', function() {
        // Delay time in milliseconds (e.g., 10000ms = 10 seconds)
        const delayTime = 3000;
        const startTime = Date.now();
        
        setTimeout(function() {
            const elapsedTime = Date.now() - startTime;
            if (elapsedTime >= delayTime) {
                hidePreloader();
            } else {
                setTimeout(hidePreloader, delayTime - elapsedTime);
            }
        }, delayTime);
    });

    // Show preloader before navigating to a new page
    document.addEventListener('click', function(event) {
        const target = event.target.closest('a');
        if (target && !target.getAttribute('href').startsWith('#') && !event.ctrlKey && !event.metaKey) {
            showPreloader();
        }
    });
});
