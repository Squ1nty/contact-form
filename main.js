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

let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailGiven = false;
let isEmailValid = false;
let isQueryTypeValid = false;
let isMsgValid = false;

let successPrompt = document.getElementById("successPrompt");

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
    isFirstNameValid = true;
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
    isLastNameValid = true;
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
      isEmailGiven = true;
    }
  }
  else{
    isEmailGiven = true;
  }

  // Check if a queryType was selected or not
  if(queryBtnSelected === ""){
    queryRadioBtnErrorMsg.removeAttribute("inert");
    queryRadioBtnErrorMsg.textContent = "Please select a query type";
  }
  else{
    queryRadioBtnErrorMsg.setAttribute("inert", true);
    queryRadioBtnErrorMsg.textContent = "";
    isQueryTypeValid = true;
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
      isMsgValid = true;
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
    isEmailValid = true;
  }
}

queryBtns.forEach(queryType => {
  queryType.addEventListener("click", (e) => {
    queryBtnSelected = e.currentTarget.value;
  })
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  isFirstNameValid = false;
  isLastNameValid = false;
  isEmailGiven = false;
  isEmailValid = false;
  isQueryTypeValid = false;
  isMsgValid = false;

  handleRequired();

  if(!isFirstNameValid || !isLastNameValid || !isEmailGiven || !isQueryTypeValid || !isMsgValid || !consentCheckbox.checked){
    console.log(isFirstNameValid + " " + isLastNameValid + " " + isEmailGiven + " " + isQueryTypeValid + " " + isMsgValid)
    return;
  }

  checkEmailValidity();
  if(!isEmailValid){
    return;
  }

  // At this point, everything checks out so print Success prompt
  successPrompt.style.opacity = "100%";
  setTimeout(function(){
    successPrompt.style.opacity = "0";
  }, 3000);
  setTimeout(() =>{
    window.location.reload();
  }, 4500);
});