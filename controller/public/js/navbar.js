(async () => {
  const response = await fetch("http://127.0.0.1:3005/basic_homepage/get_current_user");
  const json = await response.json();
  if (response.status === 200) {
    if (json.user !== null) {
      $dropdownUsername.innerText = json.user.firstName + " " + json.user.lastName;
      $dropdownUserMenu.classList.toggle("is-hidden");
      $navbarSignUpButton.classList.toggle("is-hidden");
      $navbarLoginButton.classList.toggle("is-hidden");
    }
  }
})();

$navbarBurger.onclick = () => {
  $navbarMenuStart.classList.toggle("is-active");
  $navbarMenuEnd.classList.toggle("is-active");
};

$navbarLoginButton.onclick = () => {
  $loginForm.classList.toggle("is-hidden");
  switch ($navbarLoginButton.innerText) {
    case "Login":
      $navbarLoginButton.innerHTML = '<i class="fas fa-xmark"></i>';
      $navbarLoginButton.classList.add("has-background-danger", "has-text-white");
      break;
    default:
      $navbarLoginButton.classList.remove("has-background-danger", "has-text-white");
      $navbarLoginButton.innerHTML = "Login";
  }
};
