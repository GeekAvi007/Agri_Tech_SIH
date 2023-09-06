// JavaScript to handle login popup
const loginButton = document.getElementById("loginButton");
const loginPopup = document.getElementById("loginPopup");
const closePopup = document.getElementById("closePopup");
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginButton.addEventListener("click", () => {
    loginPopup.style.display = "block";
});

closePopup.addEventListener("click", () => {
    loginPopup.style.display = "none";
    errorMessage.style.display = "none";
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput === "your_username" && passwordInput === "your_password") {
        alert("Login successful!");
        loginPopup.style.display = "none";
        errorMessage.style.display = "none";
    } else {
        errorMessage.textContent = "Wrong username or password. Please try again.";
        errorMessage.style.display = "block";
    }
});
