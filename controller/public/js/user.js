const setUserBtnSvg = src => {
  userBtn.children[0].src = src;
};

userBar.onsubmit = event => {
  event.preventDefault();
};

userBarSubmitBtn.onclick = async () => {
  const response = await fetch("http://127.0.0.1:3005/login_page/user_login", {
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
      username: userBarEmailInput.value,
      password: userBarPasswordInput.value,
    }),
  });
  if (response.status === 200) {
    setState(navbar, "collapsed");
    setState(userBtn, "collapsed");
    setState(userBar, "collapsed");
    setUserBtnSvg("../assets/svg/user-check-solid.svg");
    userBarEmailInput.style.display = "none";
    userBarPasswordInput.style.display = "none";
    userBarSubmitBtn.style.display = "none";
    userBarGuestAccount.style.display = "none";
    userBarCreateAccount.style.display = "none";
    userBarLogOutBtn.style.display = "block";
    userBarUpdatePasswordBtn.style.display = "block";
    userBarDeleteAccountBtn.style.display = "block";
  }
  const json = await response.json();
};

userBarLogOutBtn.onclick = async () => {
  const response = await fetch("http://127.0.0.1:3005/login_page/logout");
  if (response.status === 200) {
    setUserBtnSvg("../assets/svg/user-solid.svg");
    userBarEmailInput.style.display = "block";
    userBarPasswordInput.style.display = "block";
    userBarSubmitBtn.style.display = "block";
    userBarGuestAccount.style.display = "block";
    userBarCreateAccount.style.display = "block";
    userBarLogOutBtn.style.display = "none";
    userBarUpdatePasswordBtn.style.display = "none";
    userBarDeleteAccountBtn.style.display = "none";
  }
};

userBarGuestAccount.onclick = async () => {
  setState(navbar, "collapsed");
  setState(userBtn, "collapsed");
  setState(userBar, "collapsed");
  const response = await fetch("http://127.0.0.1:3005/login_page/guestlogin", {
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
      username: "Guest",
      password: "Guest",
      firstName: "Guest",
      lastName: "User",
      email: "GuestUser@Guest.com",
    }),
  });
  if (response.status === 200) {
    setUserBtnSvg();
    userBarEmailInput.style.display = "none";
    userBarPasswordInput.style.display = "none";
    userBarSubmitBtn.style.display = "none";
    userBarGuestAccount.style.display = "none";
    userBarCreateAccount.style.display = "none";
    userBarLogOutBtn.style.display = "block";
    userBarUpdatePasswordBtn.style.display = "none";
    userBarDeleteAccountBtn.style.display = "none";
  }
  const json = await response.json();
};

userBarDeleteAccountBtn.onclick = async () => {
  const response = await fetch("/login_page/delete_user/", {
    method: "DELETE",
  });
  if (response.status === 200) {
    setUserBtnSvg("../assets/svg/user-solid.svg");
    userBarEmailInput.style.display = "block";
    userBarPasswordInput.style.display = "block";
    userBarSubmitBtn.style.display = "block";
    userBarGuestAccount.style.display = "block";
    userBarCreateAccount.style.display = "block";
    userBarLogOutBtn.style.display = "none";
    userBarUpdatePasswordBtn.style.display = "none";
    userBarDeleteAccountBtn.style.display = "none";
  }
};
