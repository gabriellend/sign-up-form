// ELEMENTS
const createAccountButton = document.querySelector("button");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

// FUNCTIONS
const submitForm = (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    inputs.forEach((input) => input.classList.remove("not-submitted"));
  } else {
    inputs.forEach((input) => {
      input.classList.remove("not-submitted");
      if (!input.validity.valid) {
        input.classList.add("invalid");
      }
    });
  }
};

// EVENT LISTENERS
createAccountButton.addEventListener("click", submitForm);
