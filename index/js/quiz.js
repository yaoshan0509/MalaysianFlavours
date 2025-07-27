let selectedAnswer = null;  

// Add click event listeners to answer buttons  
document.querySelectorAll('.answer-btn').forEach(button => {  
  button.addEventListener('click', function() {  
    // Remove 'selected' class from all buttons  
    document.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('selected'));  
    // Add 'selected' class to clicked button  
    this.classList.add('selected');  
    selectedAnswer = this.id;  
  });  
});  

// Add click event listener to submit button  
document.getElementById('submit').addEventListener('click', function() {  
  if (selectedAnswer) {  
    if (selectedAnswer === 'answer1') {  
      alert('Correct! Coconut milk rice is the main ingredient in Nasi Lemak.');  
    } else {  
      alert('Sorry, that\'s incorrect. The main ingredient in Nasi Lemak is coconut milk rice.');  
    }  
  } else {  
    alert('Please select an answer before submitting.');  
  }  
});