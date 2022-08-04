$loginFormLoginButton.onclick = async () => {
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
      username: $loginFormUsernameInput.value,
      password: $loginFormPasswordInput.value,
    }),
  });
  const json = await response.json();
  console.log(json);
  if (response.status === 200) {
    $dropdownUsername.innerText = json.firstName + " " + json.lastName;
    $dropdownUserMenu.classList.toggle("is-hidden");
    $navbarSignUpButton.classList.toggle("is-hidden");
    $navbarLoginButton.classList.toggle("is-hidden");
    $loginForm.classList.toggle("is-hidden");
  }
};

$loginFormGuestButton.onclick = async () => {
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
  const json = await response.json();
  console.log(response.status);
  if (response.status === 200) {
    $dropdownUsername.innerText = json.firstName + " " + json.lastName;
    $dropdownUserMenu.classList.toggle("is-hidden");
    $dropdownSettingsButton.classList.toggle("is-hidden");
    $navbarSignUpButton.classList.toggle("is-hidden");
    $navbarLoginButton.classList.toggle("is-hidden");
    $loginForm.classList.toggle("is-hidden");
    window.location.assign("http://127.0.0.1:3005/basic_homepage/");
  }
};
