window.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  // Floor card data (without electronics)
  const floors = [
    {
      icon: "bx bx-brush",
      floor: "Ground Floor",
      category: "Beauty & Cosmetics",
      description: "Explore top brands in makeup, skincare & fragrances.",
      link: "beauty.html"
    },
    {
      icon: "bx bx-male",
      floor: "1st Floor",
      category: "Men’s Fashion",
      description: "Stylish shirts, jeans, shoes & accessories for men.",
      link: "men.html"
    },
    {
      icon: "bx bx-female",
      floor: "2nd Floor",
      category: "Women’s Fashion",
      description: "Dresses, tops, shoes & elegant accessories.",
      link: "women.html"
    },
    {
      icon: "bx bx-child",
      floor: "3rd Floor",
      category: "Kids & Toys",
      description: "Clothing, toys, books & fun stuff for kids.",
      link: "kids.html"
    }
  ];

  const floorContainer = document.getElementById("floorContainer");

  if (floorContainer) {
    floors.forEach(floor => {
      const card = document.createElement("div");
      card.classList.add("floor-card");

      card.innerHTML = `
        <div class="floor-icon"><i class="${floor.icon}"></i></div>
        <h3>${floor.floor}</h3>
        <p class="category">${floor.category}</p>
        <p class="desc">${floor.description}</p>
        <button class="view-btn">View Category</button>
      `;

      card.addEventListener("click", () => {
        window.location.href = floor.link;
      });

      floorContainer.appendChild(card);
    });

    // Scroll animation
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".floor-card").forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          card.classList.add("visible");
        }
      });
    });
  }
});
