var searchContainers = document.getElementsByClassName('search-container');

for (let i = 0; i < searchContainers.length; i++) {
    searchContainers[i].addEventListener('click', function() {
        let searchInputs = this.getElementsByClassName('search-input');
        if (searchInputs.length > 0) {
            searchInputs[0].focus();
        }
    });
}
