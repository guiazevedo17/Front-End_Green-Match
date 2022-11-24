const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// carregando view engine ejs
app.set("view engine", "ejs");

// carregando arquivos estaticos como por ex css
app.use(express.static(path.join(__dirname, "public")));

// recebe dados de um formulário html, intercede
app.use(express.urlencoded());

// --- ROTAS ---
// Homepage
app.get("/", (req, res) => {
  res.render("home");
});

// Login
app.get("/login", (req, res) => {
  res.render("login");
});

// Client
app.get("/client", (req, res) => {
  res.render("client");
});

app.post("/createClient", (req, res) => {
  var name = req.body.name + req.body.lastName;
  var userName = req.body.userName;
  var phone = req.body.tel;
  var email = req.body.email;
  var password = req.body.password;
  var birthDay = req.body.birthDay;
});

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
}*/

/*
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
