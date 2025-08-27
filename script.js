// Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();
  
        if (!name || !email || !message) {
          alert("Please fill in all required fields.");
          return;
        }
  
        if (!/\S+@\S+\.\S+/.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
  
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
      });
    }
  
    // Scroll Animations
    const animatedElements = document.querySelectorAll('.animated, .skills h2, .skills-grid .skill-card, .projects h2, .projects p, .projects-grid .project-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    animatedElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      observer.observe(el);
    });
  });