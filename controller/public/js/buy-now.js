const cartBuyNowButton = document.getElementById("cart-buy-now-button");
cartBuyNowButton.onclick = async () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const babyProductId = [];
  const computerProductId = [];
  const boujieeClothesId = [];
  const freeJunkId = [];
  for (item of cartItems) {
    switch (item.category) {
      case "babyNeeds":
        babyProductId.push(+item.id);
        break;
      case "pcParts":
        computerProductId.push(+item.id);
        break;
      case "theBlkeCollection":
        boujieeClothesId.push(+item.id);
        break;
      case "freeJunks":
        freeJunkId.push(+item.id);
        break;
    }
  }
  console.log({
    babyProductId: babyProductId,
    computerProductId: computerProductId,
    boujieeClothesId: boujieeClothesId,
    freeJunkId: freeJunkId,
    orderSummary: "Summary",
    carrierService: "UPS",
    trackingNumber: "iou23541jre4234",
    deliveryDate: "Today",
  });
  const response = await fetch("http://127.0.0.1:3005/add_to_cart/add_order", {
    method: "POST",
    cors: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      babyProductId: babyProductId,
      computerProductId: computerProductId,
      boujieeClothesId: boujieeClothesId,
      freeJunkId: freeJunkId,
      orderSummary: "Summary",
      carrierService: "UPS",
      trackingNumber: "iou23541jre4234",
      deliveryDate: "Today",
    }),
  });
  if (response.status === 200) {
    localStorage.removeItem("cartItems");
    cart.innerHTML = null;
    alert("Thank you for shopping at Joeva!");
    setTotal();
  }
  console.log(response);
};
