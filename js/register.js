const form = document.querySelector(".needs-validation");
const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");
const email = document.querySelector("#email");
const username = document.getElementById("username");
const password = document.querySelector("#password");
const loginBtn = document.querySelector(".login");
const rePassword = document.querySelector("#re-password");
const invaledUserFeedback = document.getElementById(
  "username-invalid-feedback"
);
const invaledUserMatchFeedback = document.getElementById(
  "username-exists-feedback"
);
const validUser = document.querySelector("#valid-user");
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  let isValid = true;

  if (!emailRegex.test(email.value)) {
    email.setCustomValidity("Enter a valid E-mail ");
    isValid = false;
  } else {
    email.setCustomValidity("");
  }

  if (!username.value) {
    e.preventDefault();
    username.setCustomValidity("Username already exists");
    invaledUserMatchFeedback.style.display = "none";
    invaledUserFeedback.style.display = "block";
    isValid = false;
  } else {
    username.setCustomValidity("");
  }

  // Uncomment this part if you want to validate the password format
  // if (!passwordRegex.test(password.value)) {
  //   password.setCustomValidity(
  //     "Passwords Minimum eight characters, at least one letter, one number and one special character "
  //   );
  //   isValid = false;
  // } else {
  //   password.setCustomValidity("");
  // }

  if (password.value !== rePassword.value) {
    rePassword.setCustomValidity("Passwords must match");
    isValid = false;
  } else {
    rePassword.setCustomValidity("");
  }

  if (!form.checkValidity()) {
    e.preventDefault();
  } else {
    // e.preventDefault();

    class User {
      constructor(username, password) {
        this.username = username;
        this.password = password;
      }
    }

    // {username: '', password:''}

    const newUser = new User(username.value, password.value);
    const userList = JSON.parse(localStorage.getItem("userlist")) || [];
    const usernameExists = userList.some(
      (el) => username.value === el.username
    );

    if (usernameExists) {
      e.preventDefault();
      invaledUserFeedback.style.display = "none";
      validUser.style.display = "none";
      invaledUserMatchFeedback.style.display = "block";
      isValid = false;
    } else {
      userList.push(newUser);
      localStorage.setItem("userlist", JSON.stringify(userList));
      // location.replace("login.html");
    }
  }

  form.classList.add("was-validated");
});

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  location.replace("login.html");
});
