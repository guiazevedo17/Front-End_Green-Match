const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const popupSignup = document.querySelector(".signupCustomer");
const Iusername = document.querySelector(".usernameLogin");
const Ipassword = document.querySelector(".passwordLogin");

async function login() {
  await fetch("http://localhost:8080/api/auth/signinClient", {
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
      /*name: Iname.value + IlastName.value,
                username: IuserName.value,
                phone: Iphone.value,
                email: Iemail.value,
                password: Ipassword.value,
                birthDate: IbirthDay.value,
                gender: "masculino",
                roles: ["user"]*/
      username: "guiazevedo2",
      password: "123456",
      email: "2guiazevedo@gmail.com",
      name: "guilherme azevedo",
      phone: "11998946835",
      birthDate: "14/07/2002",
      gender: "masculino",
      roles: ["user"],
    }),
  })
    .then(function (res) {
      if(res.ok){
        popup.style.display = "none";
        popupSignup.style.display = "none";
        alert("Cliente Cadastrado com SUCESSO!");
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
