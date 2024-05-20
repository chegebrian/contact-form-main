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
    firstNameEl.style.borderColor = "";
  } else showError();
});
lastNameEl.addEventListener("input", (e) => {
  if (lastNameEl.validity.valid) {
    lnameErr.textContent = "";
    lastNameEl.style.borderColor = "";
  } else showError();
});
emailEl.addEventListener("input", (e) => {
  if (emailEl.validity.valid) {
    emailErr.textContent = "";
    emailEl.style.borderColor = "";
  } else showError();
});
messageEl.addEventListener("input", (e) => {
  if (messageEl.validity.valid) {
    textboxErr.textContent = "";
    messageEl.style.borderColor = "";
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
    firstNameEl.style.borderColor = "hsl(0, 66%, 56%)";
  }
  if (firstNameEl.validity.patternMismatch) {
    fnameErr.textContent = "invalid name";
    firstNameEl.style.borderColor = "hsl(0, 66%, 56%)";
  }
  if (lastNameEl.validity.valueMissing) {
    lnameErr.textContent = "input required";
    lastNameEl.style.borderColor = "hsl(0, 66%, 56%)";
  }
  if (lastNameEl.validity.patternMismatch) {
    lnameErr.textContent = "invalid name";
    lastNameEl.style.borderColor = "hsl(0, 66%, 56%)";
  }
  if (emailEl.validity.valueMissing) {
    emailErr.textContent = "input required";
    emailEl.style.borderColor = "hsl(0, 66%, 56%)";
  }
  if (emailEl.validity.typeMismatch) {
    emailErr.textContent = "invalid email address";
    emailEl.style.borderColor = "hsl(0, 66%, 56%)";
  }
  if (!enquiryEl.checked && !supportEl.checked) {
    radioErr.textContent = "Please select a query type";
  }

  if (messageEl.validity.valueMissing) {
    textboxErr.textContent = "input required";
    messageEl.style.borderColor = "hsl(0, 66%, 56%)";
  }
  if (!checkboxEl.checked) {
    checkboxErr.textContent =
      "To submit this form, please consent to being contacted";
  }
}
