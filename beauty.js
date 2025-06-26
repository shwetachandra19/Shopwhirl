document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromURL = urlParams.get("category");

  if (categoryFromURL) {
    filterProductsByCategory(categoryFromURL);
  }

  // Your existing filter logic (optional: make this reusable)
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.textContent.trim();
      filterProductsByCategory(category);
    });
  });

  function filterProductsByCategory(category) {
    const allCards = document.querySelectorAll(".fashion-card");

    allCards.forEach(card => {
      const productCategory = card.getAttribute("data-category");
      if (category === "All" || productCategory === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Optional: highlight the filter button
    filterButtons.forEach(btn => {
      btn.classList.toggle("active", btn.textContent.trim() === category);
    });
  }
});
