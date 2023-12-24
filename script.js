// Initialize Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});

// Dynamic content loading
window.addEventListener('scroll', () => {
  const additionalContent = document.getElementById('additional-content');
  const distanceToTop = additionalContent.getBoundingClientRect().top;

  if (distanceToTop < window.innerHeight) {
    // Fetch and append more content here
    additionalContent.innerHTML += '<p>More dynamically loaded content.</p>';
  }
});
