const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const popupSignup = document.querySelector(".signup");
const popupSignupCustomer = document.querySelector(".signupCustomer");
const popupSignupScavenger = document.querySelector(".signupScavenger");
const popupSignupScavenger2 = document.querySelector(".signupScavenger2");

function openSignUp() {
  popup.style.display = "flex";
  popupSignup.style.display = "flex";
}

function returnSignUp() {
  popupSignup.style.display = "flex";
  popupSignupCustomer.style.display = "none";
  popupSignupScavenger.style.display = "none";
}

function openSignUpCustomer() {
  popupSignup.style.display = "none";
  popupSignupCustomer.style.display = "flex";
}

function openSignUpScavenger() {
  popupSignup.style.display = "none";
  popupSignupScavenger.style.display = "flex";
}

function continueSignUpScavenger() {
  popupSignupScavenger.style.display = "none";
  popupSignupScavenger2.style.display = "flex";
}

function returnSignUpScavenger() {
  popupSignupScavenger.style.display = "flex";
  popupSignupScavenger2.style.display = "none";
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
    popupSignupScavenger2.style.display = "none";
  }
});

function dateByString() { // formata a data para padrão dd/mm/aaaa
  let formatted = IbirthDay.value;
  return formatted.split('-').reverse().join('/');
}

/* Cadastra Cliente */
const Iname = document.querySelector(".name");
const IlastName = document.querySelector(".lastName");
const IuserName = document.querySelector(".userName");
const Iphone = document.querySelector(".phone");
const Iemail = document.querySelector(".email");
const IemailConf = document.querySelector(".emailConf");
const Ipassword = document.querySelector(".password");
const IpasswordConf = document.querySelector(".passwordConf");
let IbirthDay = document.querySelector(".birthDay");
const Igender = document.querySelector("input[name='gender']:checked");

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
      birthDate: IbirthDay = dateByString(),
      gender: Igender.value,
      roles: ["user"]
    }),
  })
    .then(function (res) {
      if (res.ok) {
        popup.style.display = "none";
        popupSignupCustomer.style.display = "none";

        alert("Cliente Cadastrado com SUCESSO!");

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
        window.alert("Nome de Usuário, E-mail ou Senha INVÁLIDO(A)!");

        IuserName.value = "";
        Iemail.value = "";
        IemailConf.value = "";
        Ipassword.value = "";
        IpasswordConf.value = "";
      }

      console.log(res);
    })
    .then(function (res) {
      console.log(res);
    });
}

/* Cadastra Coletor */
const InameScavenger = document.querySelector(".nameScavenger");
const IlastNameScavenger = document.querySelector(".lastNameScavenger");
const IuserNameScavenger = document.querySelector(".userNameScavenger");
const IphoneScavenger = document.querySelector(".phoneScavenger");
const IemailScavenger = document.querySelector(".emailScavenger");
const IemailConfScavenger = document.querySelector(".emailConfScavenger");
const IpasswordScavenger = document.querySelector(".passwordScavenger");
const IpasswordConfScavenger = document.querySelector(".passwordConfScavenger");
let IbirthDayScavenger = document.querySelector(".birthDayScavenger");
const IgenderScavenger = document.querySelector("input[name='genderS']:checked");

const Iwork = document.querySelector(".work");

async function signup_scavenger() {
  const materials = [];
  const days = [];
  const periods = [];

  let materiais = document.getElementsByName("material");
  let dias = document.getElementsByName("dia");
  let periodos = document.getElementsByName("periodo");

  for(let i=0; i<materiais.length ;i++){
    if(materiais[i].checked)
      materials.push(materiais[i].value); 
  }

  for(let i=0; i<dias.length ;i++){
    if(dias[i].checked)
      days.push(dias[i].value); 
  }

  for(let i=0; i<periodos.length ;i++){
    if(periodos[i].checked)
      periods.push(periodos[i].value); 
  }

  await fetch("http://localhost:8080/api/auth/registerScavenger", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username: IuserNameScavenger.value,
      password: IpasswordScavenger.value,
      email: IemailScavenger.value,
      name: InameScavenger + " " + IlastNameScavenger,
      phone: IphoneScavenger,
      birthDate: IbirthDayScavenger = dateByString(),
      gender: IgenderScavenger.value,
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
        popupSignupScavenger2.style.display = "none";

        window.alert("Coletor Cadastrado com SUCESSO!");

        InameScavenger.value = "";
        IlastNameScavenger.value = "";
        IuserNameScavenger.value = "";
        IphoneScavenger.value = "";
        IemailScavenger.value = "";
        IemailConfScavenger.value = "";
        IpasswordScavenger.value = "";
        IpasswordConfScavenger.value = "";
        IbirthDayScavenger.value = "";
        IgenderScavenger.checked = false;

        for(let i=0; i<materiais.length ;i++){
          if(materiais[i].checked){
            materiais[i].checked = false;
          }            
        }

        for(let i=0; i<dias.length ;i++){
          if(dias[i].checked)
             dias[i].checked = false;
        }
      
        for(let i=0; i<periodos.length ;i++){
          if(periodos[i].checked)
            periodos[i].checked = false; 
        }
      } else {
        window.alert("Nome de Usuário, E-mail ou Senha INVÁLIDO(A)!");

        IuserName.value = "";
        Iemail.value = "";
        IemailConfScavenger.value = "";
        IpasswordScavenger.value = "";
        IpasswordConfScavenger.value = "";
        Ipassword.value = "";
      }
    })
    .then(function (res) {
      console.log(res);
    });
}