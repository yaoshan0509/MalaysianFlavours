// script.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const sidebarItems = document.querySelectorAll('.sidebar-content nav a');

    function toggleSidebar() {
        sidebar.classList.toggle('expanded');
    }

    toggleBtn.addEventListener('click', toggleSidebar);

    sidebarItems.forEach(item => {
        item.addEventListener('click', function () {
            console.log('Sidebar item clicked');
            if (sidebar.classList.contains('expanded')) {
                toggleSidebar(); // Collapse the sidebar
            }
        });
    });
});

//Go back to top
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
