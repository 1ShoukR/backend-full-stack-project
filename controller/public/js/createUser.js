createAccountBtn.onclick = async () => {
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
      username: userNameInput.value,
      password: confirmPasswordInput.value,
      firstName: firstNameInput.value,
      lastName: LastNameInput.value,
      email: emailInput.value,
    }),
  });
};
