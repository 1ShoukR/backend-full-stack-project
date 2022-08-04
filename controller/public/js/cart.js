const cart = document.getElementById("cart");

const itemsInCart = JSON.parse(localStorage.getItem("cartItems")) === null ? [] : [...JSON.parse(localStorage.getItem("cartItems"))];
let runningTotal = 0;

[...itemsInCart].map(item => {
  const stringPrice = item.price.replace("$", "").replaceAll(",", "");
  const intPrice = parseFloat(stringPrice);
  runningTotal += intPrice;
  const block = document.createElement("div");
  block.className = "block";
  const name = document.createElement("div");
  name.className = "block";
  name.innerText = "Product: " + item.name;
  const price = document.createElement("div");
  price.className = "block";
  price.innerText = "Price: " + item.price;
  block.append(name, price);
  cart.append(block);
  console.log(runningTotal);
});

const total = document.createElement("div");
total.className = "block";
total.innerText = "Total: $" + runningTotal;
cart.append(total);
