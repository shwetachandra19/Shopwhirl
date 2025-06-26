 // Wishlist icon toggle
document.addEventListener("DOMContentLoaded", () => {
  const wishlistIcons = document.querySelectorAll(".wishlist-icon");

  wishlistIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("active");
    });
  });
});
 


// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const sortSelect = document.querySelector(".sort-select");
  const fashionCards = document.querySelectorAll(".fashion-card");
  const fashionGrid = document.querySelector(".fashion-grid");

  // FILTER FUNCTION
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedCategory = button.textContent.trim();

      fashionCards.forEach(card => {
        const categories = card.getAttribute("data-category").split(" ");

        if (selectedCategory === "All" || categories.includes(selectedCategory)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // SORT FUNCTION
  sortSelect.addEventListener("change", () => {
    const sortValue = sortSelect.value;
    const cardsArray = Array.from(fashionCards);

    const sortedCards = cardsArray.sort((a, b) => {
      const priceA = parseFloat(a.getAttribute("data-price"));
      const priceB = parseFloat(b.getAttribute("data-price"));

      if (sortValue === "low-high") {
        return priceA - priceB;
      } else if (sortValue === "high-low") {
        return priceB - priceA;
      } else {
        return 0; // Default
      }
    });

    // Clear and re-add cards
    fashionGrid.innerHTML = "";
    sortedCards.forEach(card => {
      fashionGrid.appendChild(card);
    });
  });

  // NAV HIGHLIGHT FUNCTION
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});
