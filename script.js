// input element
const firstNameEl = document.querySelector("#fname");
const lastNameEl = document.querySelector("#lname");
const emailEl = document.querySelector("#email");
const messageEl = document.querySelector("#message");
const enquiryEl = document.querySelector("#enquiry");
const supportEl = document.querySelector("#support");
const checkboxEl = document.querySelector("#checkbox");

//error element
const fnameErr = document.querySelector(".fname-err");
const lnameErr = document.querySelector(".lname-err");
const emailErr = document.querySelector(".email-err");
const radioErr = document.querySelector(".radio-err");
const textboxErr = document.querySelector(".textbox-err");
const checkboxErr = document.querySelector(".checkbox-err");

//form element
const formEl = document.querySelector("form");

//form submission
formEl.addEventListener("submit", (e) => {
  if (!firstNameEl.validity.valid) {
    showError();
    e.preventDefault();
  }
});

function showError() {
  if (firstNameEl.validity.valueMissing) {
    fnameErr.textContent = "input required";
  }
  if (lastNameEl.validity.valueMissing) {
    lnameErr.textContent = "input required";
  }
  if (emailEl.validity.valueMissing) {
    emailErr.textContent = "input required";
  }
  if (!enquiryEl.checked || !supportEl.checked) {
    radioErr.textContent = "Please select a query type";
  } else radioErr.textContent = "";

  if (messageEl.validity.valueMissing) {
    textboxErr.textContent = "input required";
  }
  if(!checkboxEl.checked) {
    checkboxErr.textContent = "To submit this form, please consent to being contacted";
  }else checkboxEl.textContent = "";
}
