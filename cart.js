document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cartContainer");
  const totalDiv = document.getElementById("cartTotal");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-cart-msg">Your cart is empty 🛍️ Go explore some items!</p>`;
    totalDiv.innerHTML = "";
    return;
  }

  let totalPrice = 0;

  cart.forEach(product => {
    const price = parseFloat(product.price.replace(/[^\d.]/g, "")) || 0;
    totalPrice += price;

    const card = document.createElement("div");
    card.classList.add("cart-card");
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${price}</p>
    `;
    container.appendChild(card);
  });

  totalDiv.innerHTML = `<h3>Total: ₹${totalPrice}</h3>`;
});

// Proceed to Checkout Button Click
document.querySelector(".checkout-btn").addEventListener("click", () => {
  const modal = document.getElementById("checkoutModal");
  modal.classList.add("show");
});

// Close Modal Button Click
document.getElementById("closeModalBtn").addEventListener("click", () => {
  const modal = document.getElementById("checkoutModal");
  modal.classList.remove("show");

  // Clear cart after small delay to let modal fade out
  setTimeout(() => {
    localStorage.removeItem("cart");
    window.location.reload();
  }, 400);
});

