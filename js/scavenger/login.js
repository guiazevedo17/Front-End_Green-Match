const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const popupSignup = document.querySelector(".signupScavenger");
const popupSignup2 = document.querySelector(".signupScavenger2");
const Iusername = document.querySelector(".username");
const Ipassword = document.querySelector(".password");

function login() {
  fetch("http://localhost:8080/api/auth/signinScavenger", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username: Iusername.value,
      password: Ipassword.value,
    }),
  })
    .then(function (res) {
      if (res.ok) {
        window.location = "../../scavenger.html";
        
        IusernameLogin.value = "";
        IpasswordLogin.value = "";
        
      } else {
        window.alert("Usuario ou senha incorretos");
        
        IusernameLogin.value = "";
        IpasswordLogin.value = "";
        
      }
    })
    .then(function (res) {
      console.log(res);
    });
}

function openSignUp() {
  popup.style.display = "flex";
  popupSignup.style.display = "flex";
}

function continueSignUp(){
    popupSignup.style.display = "none";
    popupSignup2.style.display = "flex";
}

function returnSignUp(){
    popupSignup.style.display = "flex";
    popupSignup2.style.display = "none";
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
    popupSignup2.style.display = "none";
  }
});

function signup_scavenger() {
  fetch("http://localhost:8080/api/auth/registerScavenger", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      /*name: Iname.value + IlastName.value,
                username: IuserName.value,
                phone: Iphone.value,
                email: Iemail.value,
                password: Ipassword.value,
                birthDate: IbirthDay.value,
                gender: "masculino",
                roles: ["user"]*/
      username: "asdasdguiazeasdavedo",
      password: "123456",
      email: "joaozasadsnhasdolo2002@gmail.com",
      name: "guilherme azevedo",
      phone: "11998946835",
      birthDate: "14/07/2002",
      gender: "masculino",
      roles: ["user"],
    }),
  })
    .then(function (res) {
      console.log(res);
    })
    .then(function (res) {
      console.log(res);
    });

  /*
      Iname.value = "";
      IlastName.value = "";
      IuserName.value = "";
      Iphone.value = "";
      Iemail.value = "";
      IemailConf.value = "";
      Ipassword.value = "";
      IpasswordConf.value = "";
      IbirthDay.value = "";
    */
}
