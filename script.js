document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const userNameInput = document.getElementById("username");
    const username = userNameInput.value.trim();
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value.trim();
    let isValid = true;
    let messages = [];
    //username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Input must be more than 3 characters");
    }
    //email validation
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      isValid = false;
      messages.push("Please input a valid Email");
    }
    //password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("password should be at least 8 characters");
    }
    feedbackDiv.style.display = "block";
    if (isValid === true) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else if (isValid === false) {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
