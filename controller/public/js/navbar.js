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
  setState(userBar, "collapsed");
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
