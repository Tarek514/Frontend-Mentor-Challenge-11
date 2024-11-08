function validateEmail() {
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  const emailValue = emailInput.value;

  if (!emailValue.includes("@") || emailValue.trim() === "") {
    errorMessage.style.display = "inline";
    emailInput.classList.add("error");
  } else {
    sessionStorage.setItem("userEmail", emailValue);
    window.location.href = "success.html";
  }
}

const userEmailSpan = document.getElementById("user-email");
const userEmail = sessionStorage.getItem("userEmail") || "your email";
userEmailSpan.textContent = userEmail;

function goBack() {
  window.location.href = "index.html";
}
