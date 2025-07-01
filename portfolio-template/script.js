// Log on load
console.log("Portfolio Loaded");

// Scroll-to-top button logic (if you add one)
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "↑ Top";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  background: #2575fc;
  color: white;
  border: none;
  border-radius: 5px;
  display: none;
  cursor: pointer;
  z-index: 999;
`;

scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

// Animate section on scroll into view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((sec) => {
  observer.observe(sec);
});
