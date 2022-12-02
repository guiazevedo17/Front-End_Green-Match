const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const popupSignup = document.querySelector(".signup");
const popupSignupCustomer = document.querySelector(".signupCustomer");
const popupSignupScavenger = document.querySelector(".signupScavenger");

function openSignUp() {
  popup.style.display = "flex";
  popupSignup.style.display = "flex";
}

function openSignUpCustomer() {
    popupSignup.style.display = "none";
    popupSignupCustomer.style.display = "flex";
}

function openSignUpScavenger() {
    popupSignup.style.display = "none";
    popupSignupScavenger.style.display = "flex";
}

function returnSignUp() {
    popupSignup.style.display = "flex";
    popupSignupCustomer.style.display = "none";
    popupSignupScavenger.style.display = "none";
}

popup.addEventListener("click", (event) => {
  const classNameOfClickedElement = event.target.classList[0];
  const classNames = ["popup-close", "popup-link", "popup-wrapper"];
  const shouldClosePopup = classNames.some(
    (className) => className === classNameOfClickedElement
  );

  if (shouldClosePopup) {
    popup.style.display = "none";
    popupSignup.style.display = "none";
    popupSignupCustomer.style.display = "none";
    popupSignupScavenger.style.display = "none";
  }
});
