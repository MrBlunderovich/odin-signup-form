const form = document.querySelector("#sign-up");
const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password-repeat");

form.addEventListener("submit", comparePasswords);
password1.addEventListener("keyup", comparePasswords);
password2.addEventListener("keyup", comparePasswords);

function comparePasswords(event) {
  if (event.type === "keyup" && !password1.classList.contains("error")) {
    return;
  } else {
    if (password1.value !== password2.value) {
      if (event.type === "submit") {
        event.preventDefault();
      }
      password1.classList.add("error");
      password2.classList.add("error");
      console.log("wrongo");
    } else {
      password1.classList.remove("error");
      password2.classList.remove("error");
      console.log("righto");
    }
  }
}
