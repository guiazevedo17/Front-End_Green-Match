const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const popupSignup = document.querySelector(".signupScavenger");
const popupSignup2 = document.querySelector(".signupScavenger2");
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

const Iwork = document.querySelector(".work");

async function login() {
  await fetch("http://localhost:8080/api/auth/signin", {
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
        window.location = "../scavenger.html";
        
        IusernameLogin.value = "";
        IpasswordLogin.value = "";
        
      } else {
        window.alert("Usuário ou Senha INVÁLIDO(A)!");
        
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

async function signup_scavenger() {
  const materials = [];
  const days = [];
  const periods = [];

  let materiais = document.getElementsByName("material");
  let dias = document.getElementsByName("dia");
  let periodos = document.getElementsByName("periodo");

  for (let i = 0; i < materiais.length; i++) {
    if (materiais[i].checked) materials.push(materiais[i].value);
  }

  for (let i = 0; i < dias.length; i++) {
    if (dias[i].checked) days.push(dias[i].value);
  }

  for (let i = 0; i < periodos.length; i++) {
    if (periodos[i].checked) periods.push(periodos[i].value);
  }

  await fetch("http://localhost:8080/api/auth/registerScavenger", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username: IuserName.value,
      password: Ipassword.value,
      email: Iemail.value,
      name: Iname.value + " " + IlastName.value,
      phone: Iphone.value,
      birthDate: IbirthDay.value,
      gender: Igender.value,
      work: Iwork.value,
      materials: materials,
      dayWeek: days,
      dayPeriod: periods,
      roles: ["catador"],
    }),
  })
    .then(function (res) {
      if (res.ok) {
        popup.style.display = "none";
        popupSignup2.style.display = "none";

        window.alert("Coletor Cadastrado com SUCESSO!");

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

        for (let i = 0; i < materiais.length; i++) {
          if (materiais[i].checked) {
            materiais[i].checked = false;
          }
        }

        for (let i = 0; i < dias.length; i++) {
          if (dias[i].checked) dias[i].checked = false;
        }

        for (let i = 0; i < periodos.length; i++) {
          if (periodos[i].checked) periodos[i].checked = false;
        }
      } else {
        window.alert("Nome de Usuário, E-mail ou Senha INVÁLIDO(A)!");

        IuserName.value = "";
        Iemail.value = "";
        IemailConf.value = "";
        Ipassword.value = "";
        IpasswordConf.value = "";
      }
    })
    .then(function (res) {
      console.log(res);
    });
}
