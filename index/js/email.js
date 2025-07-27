document.getElementById('newsletter-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email-input').value;
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        document.getElementById('newsletter-form').reset();
    } else {
        alert('Please enter a valid email address.');
    }
});
