const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const popupSignup = document.querySelector(".signupScavenger");
const popupSignup2 = document.querySelector(".signupScavenger2");
const Iusername = document.querySelector(".usernameLogin");
const Ipassword = document.querySelector(".passwordLogin");

async function login() {
  // await fetch("http://localhost:8080/api/auth/signinScavenger", {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   method: "POST",
  //   body: JSON.stringify({
  //     username: Iusername.value,
  //     password: Ipassword.value,
  //   }),
  // })
  //   .then(function (res) {
  //     if (res.ok) {
  //       window.location = "../../scavenger.html";
        
  //       IusernameLogin.value = "";
  //       IpasswordLogin.value = "";
        
  //     } else {
  //       window.alert("Usuario ou senha incorretos");
        
  //       IusernameLogin.value = "";
  //       IpasswordLogin.value = "";
        
  //     }
  //   })
  //   .then(function (res) {
  //     console.log(res);
  //   });
  window.location = "../scavenger.html";
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
  await fetch("http://localhost:8080/api/auth/registerScavenger", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      /* 
      -> pegar elementos marcados na checkbox

      const materials = []
      let materiais = document.getElementByName("material")

      for(var i=0; i<material.lengh ;i++){
        if(material[i].checked)
          materials.push(material[i].value)
      }

      materials: materials(const) 

      -> pegar elemento do radio

      let radioBtns = document.querySelectorAll("input[name='fruit']");

      let selected = document.querySelector("input[name='fruit']:checked").value;

      radioBtns.forEach(radioBtn => {
        radioBtn.addEventListener("change", findSelected);
      });

       */
      username: "jzanholo2",
      password: "123456qwertyy",
      email: "2jzanholo@gmail.com",
      name: "guilherme azevedo",
      phone: "11998946835",
      birthDate: "14/07/2002",
      gender: "masculino",
      materials: ["PET", "madeira", "vidro", "entuho", "bateria"],
      dayWeek: [
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
      ],
      dayPeriod: ["manha", "tarde", "noite"],
      roles: ["catador"],
    }),
  })
    .then(function (res) {
      if(res.ok){
        popup.style.display = "none";
        popupSignup2.style.display = "none";
        window.alert("Coletor Cadastrado com SUCESSO!")
      } else {
        window.alert("Nome de Usuário ou E-mail já Cadastrado!")
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
