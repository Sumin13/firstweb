const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}

function handleLinkClick(event) {
  event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
