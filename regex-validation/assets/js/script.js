// add event that call validation()
document.getElementById("form-info").addEventListener("submit", (event) => {
  event.preventDefault();

  validation(event);
});

// validate all inputs. Show error messages if the typed text is invalid
function validation(event) {
  const form = event.target || event.srcElement;
  const info = Object.fromEntries(new FormData(form));

  const inputUsername =  document.getElementById("username-input");
  const inputPassword = document.getElementById("password-input");
  const inputEmail = document.getElementById("email-input");

  const errorMessageUsername = document.getElementById("username-error");
  const errorMessagePassword = document.getElementById("password-error");
  const errorMessageEmail = document.getElementById("email-error");

  const nameUsername = document.getElementById("input-name-username");
  const namePassword = document.getElementById("input-name-password");
  const nameEmail = document.getElementById("input-name-email");

  let isValid = true;

  if (!validateUsername(info.username)) {
    errorMessageUsername.style.display = "flex";
    inputUsername.classList.add("input-error");
    nameUsername.classList.add("input-name-error");
    isValid = false;
  } else {
    errorMessageUsername.style.display = "none";
    inputUsername.classList.remove("input-error");
    nameUsername.classList.remove("input-name-error");
  }

  if (!valiedatePassword(info.password)) {
    errorMessagePassword.style.display = "flex";
    inputPassword.classList.add("input-error");
    namePassword.classList.add("input-name-error");
    isValid = false;
  } else {
    errorMessagePassword.style.display = "none";
    inputPassword.classList.remove("input-error");
    namePassword.classList.remove("input-name-error");
  }

  if (!validateEmail(info.email)) {
    errorMessageEmail.style.display = "flex";
    inputEmail.classList.add("input-error");
    nameEmail.classList.add("input-name-error");
    isValid = false;
  } else {
    errorMessageEmail.style.display = "none";
    inputEmail.classList.remove("input-error");
    nameEmail.classList.remove("input-name-error");
  }

  if (isValid) {
    alert("User registered sucessffully.\n"
    + "\nUsername: " + info.username
    + "\nPassword: " + info.password
    + "\nEmail: " + info.email);

    inputUsername.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
  }
}

// check if username is valid
function validateUsername(username) {
  return /^[a-zA-Z]+$/.test(username);
}

// check if password is valid
function valiedatePassword(password) {
  const upper = (password.match(/[A-Z]/g) || []).length;
  const symbol = (password.match(/[!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/g) || []).length;
  const hyphen = (password.match(/-/g) || []).length;

  return upper == 5 && symbol == 6 && hyphen == 2;
}

// check if email is valid
function validateEmail(email) {
  return /^(.+)@gmail.com$/.test(email);
}

// change visibility of password input
function changeVisibility() {
  const iconOff = document.getElementById("visibility-off-icon");
  const iconOn = document.getElementById("visibility-on-icon");

  const input = document.getElementById("password-input");

  const styles = window.getComputedStyle(iconOff);
  const notVisible = styles.getPropertyValue("display") == "block";

  if (notVisible) {
    iconOff.style.display = "none";
    iconOn.style.display = "block";
    input.type = "text";
  } else {
    iconOff.style.display = "block";
    iconOn.style.display = "none";
    input.type = "password";
  }
}