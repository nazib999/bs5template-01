// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    // Add click event listener to each nav link
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove("active"));
  
        // Add 'active' class to the clicked link
        this.classList.add("active");
      });
    });
  });

  // Wait for the document to fully load

      AOS.init();

      // JavaScript to add active class on scroll
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");

      window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 50; // Adjust for fixed navbar height
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
          }
        });
      });


