const cart = document.getElementById("cart");

const getItemsInCart = () => {
  const itemsInCart = JSON.parse(localStorage.getItem("cartItems")) === null ? [] : [...JSON.parse(localStorage.getItem("cartItems"))];
  return itemsInCart;
};

const setItemsInCart = data => {
  localStorage.setItem("cartItems", JSON.stringify(data));
};

const setTotal = () => {
  let runningTotal = 0;
  const itemsInCart = getItemsInCart();
  for (let itemInCart of itemsInCart) {
    const stringPrice = itemInCart.price.replace("$", "").replace(",", "");
    const floatPrice = +stringPrice;
    runningTotal += floatPrice;
  }
  const total = document.getElementById("total");
  total.innerText = runningTotal > 0 ? "Total: $" + runningTotal.toFixed(2) : "Your Cart is Empty";
};

const createBox = () => {
  const box = document.createElement("div");
  box.className = "block";
  box.classList.add("is-flex", "is-justify-content-space-between", "is-align-items-center");
  box.onclick = event => {
    if (event.target.classList.contains("delete")) {
      const itemsInCart = getItemsInCart();
      itemsInCart.splice([...cart.children].indexOf(box), 1);
      setItemsInCart(itemsInCart);
      box.remove();
      setTotal();
    }
  };
  return box;
};

const createName = item => {
  const name = document.createElement("div");
  name.className = "tile";
  name.classList.add("p-4", "has-text-left");
  name.innerText = "Product: " + item.name;
  return name;
};

const createPrice = item => {
  const price = document.createElement("div");
  price.className = "tile";
  price.classList.add("p-4", "has-text-left");
  price.innerText = "Price: " + item.price;
  return price;
};

const createDelButton = item => {
  const delButton = document.createElement("div");
  delButton.className = "delete";
  delButton.classList.add("p-3");
  return delButton;
};

const renderItemsInCart = () => {
  cart.innerHTML = null;
  const itemsInCart = getItemsInCart();
  for (let item of itemsInCart) {
    const box = createBox();
    const name = createName(item);
    const price = createPrice(item);
    const delButton = createDelButton();
    box.append(name, price, delButton);
    cart.append(box);
  }
};

window.onload = () => {
  renderItemsInCart();
  setTotal();
};
