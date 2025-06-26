// splash screen auto-hide
 window.addEventListener('load', () => {
  const splash = document.querySelector('.splash-screen');
  const main = document.querySelector('.main-content');

  if (splash && main) {
    setTimeout(() => {
      splash.style.display = 'none';
      main.style.display = 'block';
    }, 2000); // Show splash for 2 seconds
  }
});


 
  // ✅ About section scroll animation
  const about = document.querySelector('.about');
  if (about) {
    const top = about.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      about.classList.add("animate");
    }
  }
 
// Highlight active nav link based on URL
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});  
  


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".shop-section");

  sections.forEach(section => {
    const filterButtons = section.querySelectorAll(".filter-btn");
    const sortSelect = section.querySelector(".sort-select");
    const grid = section.querySelector(".fashion-grid");
    const originalCards = Array.from(grid.children); // Save original order

   // FILTER
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.textContent.trim().toLowerCase();
    const cards = section.querySelectorAll(".fashion-card");

    cards.forEach(card => {
      const cardCategory = card.dataset.category.trim().toLowerCase();
      if (category === "all" || category === cardCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


    // SORT
    sortSelect.addEventListener("change", () => {
      const value = sortSelect.value;
      let cards = Array.from(section.querySelectorAll(".fashion-card")).filter(card => card.style.display !== "none");

      if (value === "low-high") {
        cards.sort((a, b) => a.dataset.price - b.dataset.price);
      } else if (value === "high-low") {
        cards.sort((a, b) => b.dataset.price - a.dataset.price);
      } else if (value === "newest") {
        cards.reverse(); // Simulate newest last
      } else {
        // Default: restore original order (only visible ones)
        cards = originalCards.filter(card => card.style.display !== "none");
      }

      // Append in new order
      cards.forEach(card => grid.appendChild(card));
    });
  });
});

// === Show Only Selected Shop in Product Page (like men.html) ===
document.addEventListener("DOMContentLoaded", () => {
  const shopParam = new URLSearchParams(window.location.search).get("shop");

  if (shopParam) {
    const allShopSections = document.querySelectorAll(".shop-section");
    allShopSections.forEach(section => {
      if (section.id !== shopParam) {
        section.style.display = "none";
      }
    });
  }
});

