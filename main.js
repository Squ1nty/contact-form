const contactForm = document.querySelector("form");
let firstName = document.getElementById("firstNameInput");
let firstNameInputErrorMsg = document.getElementById("firstNameInputErrorMsg");

let lastName = document.getElementById("lastNameInput");
let lastNameInputErrorMsg = document.getElementById("lastNameInputErrorMsg");

let email = document.getElementById("emailAddressInput");
let emailInputErrorLabel = document.getElementById("emailAddressInputErrorMsg");

let queryBtns = document.querySelectorAll(".queryRadioBtn");
let queryBtnSelected = "";
let queryRadioBtnErrorMsg = document.getElementById("queryRadioBtnErrorMsg");

let message = document.getElementById("messageInput");
let messageErrorLabel = document.getElementById("messageInputErrorMsg");

let consentCheckbox = document.getElementById("consentCheckbox");
let consentCheckboxErrorMsg = document.getElementById("consentCheckboxErrorMsg");

let errorLabels = document.getElementsByClassName("error-state");

function handleRequired(){
  // Check if firstName is empty
  if(firstName.value === ""){
    firstNameInputErrorMsg.removeAttribute("inert");
    firstNameInputErrorMsg.textContent = "This field is required";
    firstName.style.borderColor = "var(--red)";
  }
  else{
    firstNameInputErrorMsg.setAttribute("inert", true);
    firstNameInputErrorMsg.textContent = "";
    firstName.style.borderColor = "var(--default-input-gray)";
  }

  // Check if lastName is empty
  if(lastName.value === ""){
    lastNameInputErrorMsg.removeAttribute("inert");
    lastNameInputErrorMsg.textContent = "This field is required";
    lastName.style.borderColor= "var(--red)";
  }
  else{
    lastNameInputErrorMsg.setAttribute("inert", true);
    lastNameInputErrorMsg.textContent = "";
    lastName.style.borderColor = "var(--default-input-gray)";
  }

  // Check if email is empty
  if(!email.checkValidity()){
    if(email.validity.valueMissing){
      emailInputErrorLabel.removeAttribute("inert");
      emailInputErrorLabel.textContent = "This field is required";
      email.style.borderColor= "var(--red)";
    }
    else{
      emailInputErrorLabel.setAttribute("inert", true);
      emailInputErrorLabel.textContent = "";
      email.style.borderColor = "var(--default-input-gray)";
    }
  }

  // Check if a queryType was selected or not
  if(queryBtnSelected === ""){
    queryRadioBtnErrorMsg.removeAttribute("inert");
    queryRadioBtnErrorMsg.textContent = "Please select a query type";
  }
  else{
    queryRadioBtnErrorMsg.setAttribute("inert", true);
    queryRadioBtnErrorMsg.textContent = "";
  }

  // Check if messageInput is empty
  if(message.value === ""){
      messageErrorLabel.removeAttribute("inert");
      messageErrorLabel.textContent = "This field is required";
      message.style.borderColor= "var(--red)";
  }
  else{
      messageErrorLabel.setAttribute("inert", true);
      messageErrorLabel.textContent = "";
      message.style.borderColor = "var(--default-input-gray)";
  }

  // Check if consent is given or not
  if(!consentCheckbox.checked){
    consentCheckboxErrorMsg.removeAttribute("inert");
    consentCheckboxErrorMsg.textContent = "To submit this form, please consent to being contacted";
  }
  else{
    consentCheckboxErrorMsg.setAttribute("inert", true);
    consentCheckboxErrorMsg.textContent = "";
  }

}
function checkEmailValidity(){
  if(!email.checkValidity()){
    if(email.validity.typeMismatch){
      emailInputErrorLabel.textContent = "Please enter a valid email address";
      email.style.borderColor = "var(--red)";
    }
  }
  else{
    emailInputErrorLabel.textContent = "";
    email.style.borderColor = "var(--default-input-gray)";
  }
}

queryBtns.forEach(queryType => {
  queryType.addEventListener("click", (e) => {
    queryBtnSelected = e.currentTarget.value;
  })
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  handleRequired();
  checkEmailValidity();

  // Create an if-statement that calls a method that checks whether or not any of the error-states contain text in them or not. If not, success, if so, boo hoo
});