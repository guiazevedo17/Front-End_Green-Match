const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// carregando view engine ejs
app.set("view engine", "ejs");

// carregando arquivos estaticos como por ex css
app.use(express.static(path.join(__dirname, "public")));

// recebe dados de um formulário html, intercede
app.use(express.urlencoded());

// ROTAS
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});
/*
app.post("/createClient", (req, res) => {

})*/

app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);

/*
function logIn() {
    window.location = "client.html";
}

function newCollect() {
    window.location = "newCollect.html";
}

function chooseAddress() {
    window.location = "chooseAddress.html";
}

/*
const popup = document.querySelector('.popup-wrapper')

const buttonNewAccount = document.querySelector('.newAccount')
const contas = document.querySelector('.contas')

const buttonCliente = document.querySelector('.popup-cliente')
const cliente = document.querySelector('.cliente')

const buttonCatador = document.querySelector('.popup-catador')
const catador = document.querySelector('.catador')

const buttonContinueCatador = document.querySelector('.continue-catador')
const catador2 = document.querySelector('.catador2')


buttonNewAccount.addEventListener('click', () => {
    popup.style.display = 'block'
    contas.style.display = 'block'
})

buttonCliente.addEventListener('click', () => {
    contas.style.display = 'none'
    cliente.style.display = 'block'
})

buttonCatador.addEventListener('click', () => {
    contas.style.display = 'none'
    catador.style.display = 'block'
})

buttonContinueCatador.addEventListener('click', () => {
    catador.style.display = 'none'
    catador2.style.display = 'block'
})


popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-link', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    const shouldReturnPopupContas = 'popup-return' === classNameOfClickedElement
    const shouldReturnPopupCatador = 'popup-return-catador2' === classNameOfClickedElement

    if (shouldClosePopup) {

        popup.style.display = 'none'
        cliente.style.display = 'none'
        catador.style.display = 'none'

    } else if (shouldReturnPopupContas) {

        contas.style.display = 'block'
        cliente.style.display = 'none'
        catador.style.display = 'none'

    } else if (shouldReturnPopupCatador) {

        catador2.style.display = 'none'
        catador.style.display = 'block'

    }
})

// Integração com o BACK-END
const formCliente = document.querySelector("form");
const formCatador = document.querySelector(".formCatador");

const Iname = document.querySelector(".name");
const IlastName = document.querySelector(".lastName");
const IuserName = document.querySelector(".userName");
const Itel = document.querySelector(".tel");
const Iemail = document.querySelector(".email");
const IemailConf = document.querySelector(".emailConf");
const Ipassword = document.querySelector(".password");
const IpasswordConf = document.querySelector(".passwordConf");
const IbirthDay = document.querySelector(".birthDay");

function registerCliente() {

    fetch("http://localhost:8080/usuarios",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                name: Iname.value + IlastName.value,
                username: IuserName.value,
                phone: Itel.value,
                email: Iemail.value,
                password: Ipassword.value,
                birthday: IbirthDay.value
            })
        })
        .then(function (res) { console.log(res) })
        .then(function (res) { console.log(res) })

};

function registerCatador() {

    fetch("http://localhost:8080/catador",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                name: Iname.value + IlastName.value,
                username: IuserName.value,
                phone: Itel.value,
                email: Iemail.value,
                password: Ipassword.value,
                birthday: IbirthDay.value
            })
        })
        .then(function (res) { console.log(res) })
        .then(function (res) { console.log(res) })

};

function clear() {
    Iname.value = "";
    IlastName.value = "";
    IuserName.value = "";
    Itel.value = "";
    Iemail.value = "";
    IemailConf.value = "";
    Ipassword.value = "";
    IpasswordConf.value = "";
    IbirthDay.value = "";
};

formCliente.addEventListener('', function (event) {
    event.preventDefault();

    registerCliente();
    clear();
})

formCatador.addEventListener('submit', function (event) {
    event.preventDefault();

    registerCatador();
    clear();
})*/
