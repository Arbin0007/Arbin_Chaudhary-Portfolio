// Responsive Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll (optional, for animation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const details = document.querySelector('.about-details');
  function checkVisibility() {
    const rect = details.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      details.classList.add('visible');
      window.removeEventListener('scroll', checkVisibility);
    }
  }
  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});

