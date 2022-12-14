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

/* Cadastra Cliente */
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
        Igender.value = "";
      } else {
        window.alert("Nome de Usuário ou E-mail já Cadastrado!");

        IuserName.value = "";
        Iemail.value = "";
        IemailConf.value = "";
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
const IbirthDayScavenger = document.querySelector(".birthDayScavenger");
const radioGenderS = document.querySelectorAll("input[name='genderS']");
let IgenderScavenger;

radioGenderS.forEach(radioBtnS => {
  radioBtnS.addEventListener("change", (event) => {
    IgenderScavenger = document.querySelector("input[name='genderS']:checked");
  })
})

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
      password: "123456qwertyy",
      email: IemailScavenger.value,
      name: "guilherme azevedo",
      phone: "11998946835",
      birthDate: "14/07/2002",
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
        window.alert("Nome de Usuário ou E-mail já Cadastrado!")
      }
    })
    .then(function (res) {
      console.log(res);
    });

  /*
   InameScavenger.value = "";
    IlastNameScavenger.value = "";
    IuserNameScavenger.value = "";
    IphoneScavenger.value = "";
    IemailScavenger.value = "";
    IemailConfScavenger.value = "";
    IpasswordScavenger.value = "";
    IpasswordConfScavenger.value = "";
    IbirthDayScavenger.value = "";
  */
}