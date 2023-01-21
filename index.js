//
//const submitBtn = document.querySelector("#submit");
const form = document.querySelector("#sign-up");
const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password-repeat");

form.addEventListener("submit", comparePasswords);

function comparePasswords(event) {
  if (password1.value !== password2.value) {
    event.preventDefault();
    password1.classList.add("error");
    password2.classList.add("error");
    console.log("wrongo");
  } else {
    password1.classList.remove("error");
    password2.classList.remove("error");
    console.log("submitting");
  }
}
