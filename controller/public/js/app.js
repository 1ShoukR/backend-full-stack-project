const $navbarBurger = document.getElementById("navbar-burger");
const $navbarMenuStart = document.getElementById("navbar-menu-start");
const $navbarMenuEnd = document.getElementById("navbar-menu-end");

$navbarBurger.onclick = () => {
  $navbarMenuStart.classList.toggle("is-active");
  $navbarMenuEnd.classList.toggle("is-active");
};

const $navbarLoginButton = document.getElementById("navbar-login-button");
const $loginForm = document.getElementById("login-form");

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
