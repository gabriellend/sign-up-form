// ELEMENTS
const createAccountButton = document.querySelector("button");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

// FUNCTIONS
const submitForm = (e) => {
  if (form.checkValidity()) {
    inputs.forEach((input) => input.classList.remove("not-submitted"));
    e.preventDefault();
  }
};

// EVENT LISTENERS
createAccountButton.addEventListener("click", submitForm);
