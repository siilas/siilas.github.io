document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("header[id], section[id]");
  const navLinks = document.querySelectorAll(".toc-link");
  const mobileLabel = document.getElementById("mobile-current-chapter");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -65% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          const isMatch = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("active", isMatch);
          if (isMatch && mobileLabel) {
            mobileLabel.textContent = link.textContent;
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});