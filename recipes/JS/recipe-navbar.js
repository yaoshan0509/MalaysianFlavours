window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const navbar = document.getElementById('navbar');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 200) { // Adjust the value 100 to when you want to trigger the minimization
      header.classList.add('minimized');
      navbar.classList.add('minimized');
  } else {
      header.classList.remove('minimized');
      navbar.classList.remove('minimized');
  }
});
