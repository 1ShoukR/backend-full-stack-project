const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");
const searchBarInput = document.getElementById("search-bar-input");
const userBtn = document.getElementById("user-btn");
const userBar = document.getElementById("user-bar");
const userBarEmailInput = document.getElementById("user-bar-email-input");
const userBarPasswordInput = document.getElementById("user-bar-password-input");
const userBarSubmitBtn = document.getElementById("user-bar-submit-btn");
const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");

const getState = element => {
  return element.dataset.state;
};

const setState = (element, state) => {
  element.dataset.state = state;
};

menuBtn.onclick = () => {
  setState(navbar, "collapsed");
  setState(searchBtn, "collapsed");
  setState(userBtn, "collapsed");
  setState(cartBtn, "collapsed");
  setState(cart, "collapsed");
  switch (getState(menuBtn)) {
    case "collapsed":
      setState(menuBtn, "expanded");
      setState(menu, "expanded");
      break;
    default:
      setState(menuBtn, "collapsed");
      setState(menu, "collapsed");
  }
};

searchBtn.onclick = () => {
  setState(userBtn, "collapsed");
  setState(userBar, "collapsed");
  setState(menuBtn, "collapsed");
  setState(menu, "collapsed");
  setState(cartBtn, "collapsed");
  setState(cart, "collapsed");
  switch (getState(searchBtn)) {
    case "collapsed":
      setState(navbar, "expanded--search-bar");
      setState(searchBtn, "expanded");
      setState(searchBar, "expanded");
      searchBarInput.focus();
      break;
    default:
      setState(navbar, "collapsed");
      setState(searchBtn, "collapsed");
      setState(searchBar, "collapsed");
      searchBarInput.blur();
  }
};

userBtn.onclick = () => {
  setState(searchBtn, "collapsed");
  setState(searchBar, "collapsed");
  setState(menuBtn, "collapsed");
  setState(menu, "collapsed");
  setState(cartBtn, "collapsed");
  setState(cart, "collapsed");
  switch (getState(userBtn)) {
    case "collapsed":
      setState(navbar, "expanded--user-bar");
      setState(userBtn, "expanded");
      setState(userBar, "expanded");
      userBarEmailInput.focus();
      break;
    default:
      setState(navbar, "collapsed");
      setState(userBtn, "collapsed");
      setState(userBar, "collapsed");
      userBarEmailInput.blur();
  }
};

cartBtn.onclick = () => {
  setState(navbar, "collapsed");
  setState(searchBtn, "collapsed");
  setState(userBtn, "collapsed");
  setState(menuBtn, "collapsed");
  setState(menu, "collapsed");
  setState(cartBtn, "collapsed");
  setState(cart, "collapsed");
  switch (getState(cartBtn)) {
    case "collapsed":
      setState(cart, "expanded");
      setState(cartBtn, "expanded");
      break;
    default:
      setState(cart, "collapsed");
      setState(cartBtn, "collapsed");
  }
};

userBar.onsubmit = async event => {
  event.preventDefault();
  const response = await fetch("/login_page/user_login", {
    method: "POST",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      username: userBarEmailInput.value,
      password: userBarPasswordInput.value,
    }),
  });
  console.log(response);
};
