// input element
const firstNameEl = document.querySelector("#fname");
const lastNameEl = document.querySelector("#lname");
const emailEl = document.querySelector("#email");
const messageEl = document.querySelector("#message");
const enquiryEl = document.querySelector("#enquiry");
const supportEl = document.querySelector("#support");
const checkboxEl = document.querySelector("#checkbox");
const radiobuttonsEl = document.querySelectorAll("input[name=radio]");

//error element
const fnameErr = document.querySelector(".fname-err");
const lnameErr = document.querySelector(".lname-err");
const emailErr = document.querySelector(".email-err");
const radioErr = document.querySelector(".radio-err");
const textboxErr = document.querySelector(".textbox-err");
const checkboxErr = document.querySelector(".checkbox-err");

//radio section
const radioEl = document.querySelector(".radio");

//form element
const formEl = document.querySelector("form");

//form submission
formEl.addEventListener("submit", (e) => {
  if (!firstNameEl.validity.valid) {
    showError();
    e.preventDefault();
  }
});

firstNameEl.addEventListener("input", (e) => {
  if (firstNameEl.validity.valid) {
    fnameErr.textContent = "";
  } else showError();
});
lastNameEl.addEventListener("input", (e) => {
  if (lastNameEl.validity.valid) {
    lnameErr.textContent = "";
  } else showError();
});
emailEl.addEventListener("input", (e) => {
  if (emailEl.validity.valid) {
    emailErr.textContent = "";
  } else showError();
});
messageEl.addEventListener("input", (e) => {
  if (messageEl.validity.valid) {
    textboxErr.textContent = "";
  } else showError();
});

radiobuttonsEl.forEach((radio) => {
  radio.addEventListener("input", () => {
    if (radio.checked) {
      radioErr.textContent = "";
    } else showError();
  });
});

checkboxEl.addEventListener("input", (e) => {
  if (checkboxEl.checked) {
    checkboxErr.textContent = "";
  } else showError();
});

function showError() {
  if (firstNameEl.validity.valueMissing) {
    fnameErr.textContent = "input required";
  }
  if (firstNameEl.validity.patternMismatch) {
    fnameErr.textContent = "invalid name";
  }
  if (lastNameEl.validity.valueMissing) {
    lnameErr.textContent = "input required";
  }
  if (lastNameEl.validity.patternMismatch) {
    lnameErr.textContent = "invalid name";
  }
  if (emailEl.validity.valueMissing) {
    emailErr.textContent = "input required";
  }
  if (emailEl.validity.typeMismatch) {
    emailErr.textContent = "invalid email address";
  }
  if (!enquiryEl.checked && !supportEl.checked) {
    radioErr.textContent = "Please select a query type";
  }

  if (messageEl.validity.valueMissing) {
    textboxErr.textContent = "input required";
  }
  if (!checkboxEl.checked) {
    checkboxErr.textContent =
      "To submit this form, please consent to being contacted";
  }
}
