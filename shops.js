document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link based on URL
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  // Shop data
  const shops = [
    {
      name: "TrendSetters",
      floor: "1st Floor",
      category: "Men’s Fashion",
      image: "banner/men-mall.jpeg",
      link: "men.html?shop=trend-setters"
    },
    {
      name: "Glamorista",
      floor: "2nd Floor",
      category: "Women’s Fashion",
      image: "banner/women-mall.jpeg",
      link: "women.html?shop=glamorista"
    },
    {
      name: "KiddieWorld",
      floor: "3rd Floor",
      category: "Kids & Toys",
      image: "banner/kid-mall.jpeg",
      link: "kids.html"
    },
    {
      name: "Blush & Bloom",
      floor: "Ground Floor",
      category: "Beauty & Cosmetics",
      image: "banner/beauty-mall.jpeg",
      link: "beauty.html"
    },
    {
      name: "Urban Vogue",
      floor: "2nd Floor",
      category: "Women’s Fashion",
      image: "banner/women-mall2.jpeg",
      link: "women.html?shop=urban-vogue"
    },
    {
      name: "Dapper Den",
      floor: "1st Floor",
      category: "Men’s Fashion",
      image: "banner/men-mall2.jpeg",
      link: "men.html?shop=dapper-den"
    }
  ];

  // Render shop cards
  const shopContainer = document.getElementById("shopContainer");

  shops.forEach(shop => {
    const card = document.createElement("div");
    card.classList.add("shop-card");

    card.innerHTML = `
      <img src="${shop.image}" alt="${shop.name}" class="shop-image" />
      <h3>${shop.name}</h3>
      <p>📍 ${shop.floor}</p>
      <p>🛒 ${shop.category}</p>
      <button class="view-btn" onclick="location.href='${shop.link}'">View Shop</button>
    `;

    shopContainer.appendChild(card);
  });
});
