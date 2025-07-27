// Function to show the modal with the clicked image
function showImageModal(src) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = src;
}

// Function to close the modal
function closeImageModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
