document.querySelectorAll('.showAllBtn').forEach(function(showAllButton) {
    showAllButton.addEventListener('click', function() {
        // Get the parent state-recipes container of the clicked button
        let stateRecipesContainer = this.closest('.states-container').querySelector('.state-recipes');
        
        // Show all hidden recipe cards within this container
        stateRecipesContainer.querySelectorAll('.recipe-card.d-none').forEach(function(card) {
            card.classList.remove('d-none');
        });

        // Hide the "Show All" button and display the "Show Less" button in this container
        this.classList.add('d-none');
        this.closest('.state-title').querySelector('.showLessBtn').classList.remove('d-none');
    });
});

document.querySelectorAll('.showLessBtn').forEach(function(showLessButton) {
    showLessButton.addEventListener('click', function() {
        // Get the parent state-recipes container of the clicked button
        let stateRecipesContainer = this.closest('.states-container').querySelector('.state-recipes');

        // Hide the extra recipe cards within this container, leaving only the first 3 visible
        stateRecipesContainer.querySelectorAll('.recipe-card:nth-child(n+4)').forEach(function(card) {
            card.classList.add('d-none');
        });

        // Hide the "Show Less" button and display the "Show All" button in this container
        this.classList.add('d-none');
        this.closest('.state-title').querySelector('.showAllBtn').classList.remove('d-none');
    });
});