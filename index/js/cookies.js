document.addEventListener('DOMContentLoaded', (event) => {  
  // Check if the user has already accepted the cookies  
  let cookieAccepted = localStorage.getItem('cookieAccepted');  

  if (!cookieAccepted) {  
    // Show the cookie popup after the preloader  
    setTimeout(() => {  
      document.getElementById('cookie-consent-popup').style.display = 'flex';  
    }, 1000);  

    // Add event listeners to the cookie buttons  
    document.getElementById('accept-cookies').addEventListener('click', () => {  
      acceptCookies();  
    });  
 
  } else {  
    // Hide the cookie popup if the user has already accepted the cookies  
    document.getElementById('cookie-consent-popup').style.display = 'none';  
  }  
});  

function acceptCookies() {  
  // Set a cookie to indicate that the user has accepted the cookies  
  localStorage.setItem('cookieAccepted', 'true');  

  // Hide the cookie popup  
  document.getElementById('cookie-consent-popup').style.display = 'none';  
}