// Save the user's shopping cart to local storage  
function saveCartToLocalStorage(cart) {  
    localStorage.setItem("cart", JSON.stringify(cart));  
  }  
  
  // Retrieve the user's shopping cart from local storage  
  function getCartFromLocalStorage() {  
    const cartString = localStorage.getItem("cart");  
    return cartString ? JSON.parse(cartString) : [];  
  }  
  
  // Save the user's quiz progress to session storage  
  function saveQuizProgressToSessionStorage(progress) {  
    sessionStorage.setItem("quizProgress", JSON.stringify(progress));  
  }  
  
  // Retrieve the user's quiz progress from session storage  
  function getQuizProgressFromSessionStorage() {  
    const progressString = sessionStorage.getItem("quizProgress");  
    return progressString ? JSON.parse(progressString) : {};  
  }