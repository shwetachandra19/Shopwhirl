localStorage.removeItem("wishlist");
document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".wishlist-icon");
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  hearts.forEach(heart => {
    const card = heart.closest(".fashion-card");
    if (!card) return;

    const nameElement = card.querySelector(".product-name");
    const priceElement = card.querySelector(".product-price");
    const imgElement = card.querySelector("img");

    if (!nameElement || !priceElement || !imgElement) return;

    const name = nameElement.textContent.trim();
    const price = priceElement.textContent.trim();
    const img = imgElement.getAttribute("src");

    const productKey = name + price;

    // ✅ Fill heart if already in wishlist
    const exists = wishlist.some(item => (item.name + item.price) === productKey);
    if (exists) {
      heart.classList.remove("bx-heart");
      heart.classList.add("bxs-heart");
      heart.style.color = "#B81b33";
    }

    heart.addEventListener("click", () => {
      const index = wishlist.findIndex(item => (item.name + item.price) === productKey);

      if (index > -1) {
        // 🔻 Remove from wishlist
        wishlist.splice(index, 1);
        heart.classList.remove("bxs-heart");
        heart.classList.add("bx-heart");
        heart.style.color = "#ccc";
      } else {
        // ✅ Add to wishlist
        wishlist.push({ name, price, img });
        heart.classList.remove("bx-heart");
        heart.classList.add("bxs-heart");
        heart.style.color = "#B81b33";
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
  });
});


