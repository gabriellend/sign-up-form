// ELEMENTS
const createAccountButton = document.querySelector("button");
const form = document.querySelector("form");

// FUNCTIONS
const submitForm = (e) => {
  if (form.checkValidity()) {
    e.preventDefault();
  }
};

// EVENT LISTENERS
createAccountButton.addEventListener("click", submitForm);
