const form = document.querySelector(".needs-validation");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");
const userList = JSON.parse(localStorage.getItem("userlist")) || [];
const reg = document.querySelector("#reg");

reg.addEventListener("click", function () {
  location.replace("register.html");
});

if (!Array.isArray(userList)) {
  console.error("userlist is not an array");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  const user = userList.find((el) => el.username === username.value);
  if (!user) {
    username.setCustomValidity("Enter the correct username");
    isValid = false;
  } else {
    username.setCustomValidity("");
  }

  if (user && user.password !== password.value) {
    password.setCustomValidity("Enter the correct password");
    isValid = false;
  } else {
    password.setCustomValidity("");
  }

  if (isValid) {
    location.replace("quiz.html");
  }

  form.classList.add("was-validated");
});
