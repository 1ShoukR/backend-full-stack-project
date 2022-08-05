$createUserSubmitButton.onclick = async () => {
  const response = await fetch("http://127.0.0.1:3005/login_page/create_user", {
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
      username: $createUserUsernameInput.value,
      password: $createUserPasswordInput.value,
      firstName: $createUserFirstInput.value,
      lastName: $createUserLastInput.value,
      email: $createUserEmailInput.value,
    }),
  });
  if (response.status === 200) {
    window.location.assign("http://127.0.0.1:3005/basic_homepage/");
  }
  if (response.status === 400) {
    alert("Error: Please enter a valid email");
  }
};
