const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const popupSignup = document.querySelector(".signupCustomer");
const IusernameLogin = document.querySelector(".usernameLogin");
const IpasswordLogin = document.querySelector(".passwordLogin");

const Iname = document.querySelector(".name");
const IlastName = document.querySelector(".lastName");
const IuserName = document.querySelector(".userName");
const Iphone = document.querySelector(".phone");
const Iemail = document.querySelector(".email");
const IemailConf = document.querySelector(".emailConf");
const Ipassword = document.querySelector(".password");
const IpasswordConf = document.querySelector(".passwordConf");
const IbirthDay = document.querySelector(".birthDay");
const radioGender = document.querySelectorAll("input[name='gender']");
let Igender;

radioGender.forEach(radioBtn => {
  radioBtn.addEventListener("change", (event) => {
    Igender = document.querySelector("input[name='gender']:checked");
  })
})

async function login() {
  await fetch("http://localhost:8080/api/auth/signinClient", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username: IusernameLogin.value,
      password: IpasswordLogin.value,
    }),
  })
    .then(function (res) {
      if (res.ok) {
        window.location = "../../customer.html";
        
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

popup.addEventListener("click", (event) => {
  const classNameOfClickedElement = event.target.classList[0];
  const classNames = ["popup-close", "popup-link", "popup-wrapper"];
  const shouldClosePopup = classNames.some(
    (className) => className === classNameOfClickedElement
  );

  if (shouldClosePopup) {
    popup.style.display = "none";
    popupSignup.style.display = "none";
  }
});

async function signup_customer() {
  await fetch("http://localhost:8080/api/auth/registerClient", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name: Iname.value + " " + IlastName.value,
      username: IuserName.value,
      phone: Iphone.value,
      email: Iemail.value,
      password: Ipassword.value,
      birthDate: IbirthDay.value,
      gender: Igender.value,
      roles: ["user"]
    }),
  })
    .then(function (res) {
      if(res.ok){
        popup.style.display = "none";
        popupSignup.style.display = "none";

        window.alert("Cliente Cadastrado com SUCESSO!");

        Iname.value = "";
        IlastName.value = "";
        IuserName.value = "";
        Iphone.value = "";
        Iemail.value = "";
        IemailConf.value = "";
        Ipassword.value = "";
        IpasswordConf.value = "";
        IbirthDay.value = "";
        Igender.checked = false;
      } else {
        window.alert("Nome de Usuário ou E-mail já Cadastrado!")

        IuserName.value = "";
        Iemail.value = "";
        IemailConf.value = "";
      }

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
