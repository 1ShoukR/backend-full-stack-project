(async () => {
  const response = await fetch("http://127.0.0.1:3005/basic_homepage/get_current_user");
  const json = await response.json();
  if (response.status === 200) {
    if (json.user !== null) {
      $createUserFirstInput.value = json.user.firstName;
      $createUserLastInput.value = json.user.lastName;
      $createUserUsernameInput.value = json.user.username;
      $createUserEmailInput.value = json.user.email;
    }
  }
})();

const $deleteUserButton = document.getElementById("delete-user-button");

$deleteUserButton.onclick = async () => {
  const response = await fetch("http://127.0.0.1:3005/login_page/delete_user", {
    method: "DELETE",
    cors: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      username: $createUserUsernameInput.value,
      password: $createUserPasswordInput.value,
    }),
  });
  if (response.status === 200) {
    await fetch("/login_page/logout");
    alert("User Sucessfully Deleted");
    window.location.assign("http://127.0.0.1:3005/basic_homepage/");
  } else {
    alert("User is not valid");
  }
};

$updateUserSubmitButton.onclick = async () => {
  const response = await fetch("http://127.0.0.1:3005/login_page/update_password", {
    method: "PUT",
    cors: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      username: $createUserUsernameInput.value,
      password: $createUserPasswordInput.value,
    }),
  });
  if (response.status === 200) {
    alert("Password Sucessfully Updated");
    window.location.assign("http://127.0.0.1:3005/basic_homepage/");
  } else {
    alert("User is not valid");
  }
};
