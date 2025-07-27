
$('#search-button').click(function() {  
  searchQuery = $('#search-input').val() || 'Malaysian';  
  currentPage = 0;  
  loadRecipes(searchQuery, sortBy);  
});