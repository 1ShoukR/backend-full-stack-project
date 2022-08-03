const cartItems = JSON.parse(localStorage.getItem("cartItems")) === null ? [] : [...JSON.parse(localStorage.getItem("cartItems"))];
const btns = document.querySelectorAll(".add-to-cart");
[...btns].forEach(btn => {
  btn.onclick = () => {
    cartItems.push({
      category: btn.dataset.category,
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: btn.dataset.id,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
});
