// Hamburger Menu
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

// Fade-in Animation
const sections = document.querySelectorAll("section");
const options = { threshold: 0.2 };

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, options);

sections.forEach(sec => observer.observe(sec));

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");

  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
}

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if(window.scrollY > 50) {
    header.style.background = 'rgba(91, 136, 54, 0.8)';
  } else {
    header.style.background = 'rgba(91, 136, 54, 0.4)';
  }
});
