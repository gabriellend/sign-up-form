// ELEMENTS
const createAccountButton = document.querySelector("button");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

// FUNCTIONS
const submitForm = (e) => {
  e.preventDefault();
  let errorMessageSpan;

  if (form.checkValidity()) {
    inputs.forEach((input) => input.classList.remove("not-submitted"));
  } else {
    inputs.forEach((input) => {
      // This is to remove the styles, not ideal
      input.classList.remove("not-submitted");
      errorMessageSpan = input.nextElementSibling;
      const validityState = input.validity;

      if (!validityState.valid) {
        input.classList.add("invalid");
        if (validityState.typeMismatch) {
          errorMessageSpan.innerText = "* Please enter a valid email";
        } else if (input.id === "phone-number" && validityState.tooShort) {
          errorMessageSpan.innerText = "* Please enter a 10 digit phone number";
        } else if (validityState.valueMissing) {
          errorMessageSpan.innerText = "* Please enter a value";
        }
      }
    });

    // checkValidity will not verify that passwords match so must do it
    // manually
    const passwordInput = document.querySelector("#password");
    const confirmPassInput = document.querySelector("#confirm-password");
    errorMessageSpan = passwordInput.nextElementSibling;

    if (passwordInput.value.length > 0 && passwordInput.value.length < 8) {
      errorMessageSpan.innerText = "* Password must be at least 8 characters";
    } else if (passwordInput.value !== confirmPassInput.value) {
      // As long as a password is present, the input will be valid. To get it
      // to display, we must add the "invalid" class
      passwordInput.classList.add("invalid");
      errorMessageSpan.innerText = "* Passwords do not match";
    }
  }
};

const removeInvalidClass = (e) => {
  if (e.target.classList.contains("invalid")) {
    e.target.classList.add("not-submitted");
    e.target.classList.remove("invalid");
    const errorMessageSpan = e.target.nextElementSibling;
    errorMessageSpan.innerText = "";
  }
};

// EVENT LISTENERS
createAccountButton.addEventListener("click", submitForm);
inputs.forEach((input) => input.addEventListener("focus", removeInvalidClass));
