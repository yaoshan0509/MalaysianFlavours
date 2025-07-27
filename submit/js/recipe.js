$(document).ready(function () {
    // Handle form submission
    $("#form").on("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Check if form is valid
        if (this.checkValidity() === false) {
            event.stopPropagation();
            $(this).addClass("was-validated");
            return;
        }

        // Gather form data
        var formData = new FormData(this);

        // Submit form data via AJAX
        $.ajax({
            url: "http://192.168.0.113:5500/submit/submit.html#form", // Change this to your actual submission URL
            type: "GET",
            data: formData,
            processData: false, // Prevent jQuery from processing the data
            contentType: false, // Prevent jQuery from setting content type
            success: function (response) {
                // Handle success
                alert("Your recipe has been submitted successfully!");
                // You can reset the form here if needed
                $("#form")[0].reset();
                $("#form").removeClass("was-validated");
            },
            error: function (xhr, status, error) {
                // Handle error
                alert("An error occurred while submitting your recipe: " + error);
            }
        });
    });
});
