function logIn() {
    window.location = "customer.html";
}
/*
function logIn() {
    window.location = "scavenger.html";
}*/

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
const registerCustomer = document.querySelector(".registerClient");
const registerScavenger = document.querySelector(".registerScavenger");
const loginUser = document.querySelector(".loginUser");

const Iname = document.querySelector(".name");
const IlastName = document.querySelector(".lastName");
const IuserName = document.querySelector(".userName");
const Iphone = document.querySelector(".phone");
const Iemail = document.querySelector(".email");
const IemailConf = document.querySelector(".emailConf");
const Ipassword = document.querySelector(".password");
const IpasswordConf = document.querySelector(".passwordConf");
const IbirthDay = document.querySelector(".birthDay");

const InameScavenger = document.querySelector(".nameScavenger");
const IlastNameScavenger = document.querySelector(".lastNameScavenger");
const IuserNameScavenger = document.querySelector(".userNameScavenger");
const IphoneScavenger = document.querySelector(".phoneScavenger");
const IemailScavenger = document.querySelector(".emailScavenger");
const IemailConfScavenger = document.querySelector(".emailConfScavenger");
const IpasswordScavenger = document.querySelector(".passwordScavenger");
const IpasswordConfScavenger = document.querySelector(".passwordConfScavenger");
const IbirthDayScavenger = document.querySelector(".birthDayScavenger");

const IusernameLogin = document.querySelector(".usernameLogin");
const IpasswordLogin = document.querySelector(".passwordLogin");

function loginValidation() {
    fetch("http://localhost:8080/api/auth/signinClient",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
            username: IusernameLogin.value,
            password: IpasswordLogin.value
            })
        })
        .then(function (res) { 
            if(res.ok){
                logIn();
                clear_login();
            }else {
                window.alert("Usuario ou senha incorretos");
                clear_login();
            }
         })
        .then(function (res) { console.log(res) })
        

};

function register_client() {

    fetch("http://localhost:8080/api/auth/registerClient",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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
            "username": "guiazevedo",
            "password": "123456",
            "email":"joaozanholoo2002@gmail.com",
            "name": "guilherme azevedo",
            "phone": "11998946835",
            "birthDate": "14/07/2002",
            "gender": "masculino",
            "roles": ["user"]
            })
        })
        .then(function (res) { console.log(res) })
        .then(function (res) { console.log(res) })

};

function register_scavenger() {

    fetch("http://localhost:8080/api/auth/registerScavenger",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "username": "guiazeddd",
            "password": "123456qwertyy",
            "email":"guiazve@gmail.com",
            "name": "guilherme azevedo",
            "phone": "11998946835",
            "birthDate": "14/07/2002",
            "gender": "masculino",
            "materials": ["PET","madeira","vidro","entuho","bateria"],
            "dayWeek": ["segunda-feira", "terça-feira","quarta-feira","quinta-feira","sexta-feira"],
            "dayPeriod": ["manha","tarde","noite"],
            "roles": ["catador"]
            })
        })
        .then(function (res) { console.log(res) })
        .then(function (res) { console.log(res) })

};

function clear_customer() {
    Iname.value = "";
    IlastName.value = "";
    IuserName.value = "";
    Iphone.value = "";
    Iemail.value = "";
    IemailConf.value = "";
    Ipassword.value = "";
    IpasswordConf.value = "";
    IbirthDay.value = "";
};

function clear_scavenger() {
    InameScavenger.value = "";
    IlastNameScavenger.value = "";
    IuserNameScavenger.value = "";
    IphoneScavenger.value = "";
    IemailScavenger.value = "";
    IemailConfScavenger.value = "";
    IpasswordScavenger.value = "";
    IpasswordConfScavenger.value = "";
    IbirthDayScavenger.value = "";
};

function clear_login() {
    IusernameLogin.value = "";
    IpasswordLogin.value = "";
}
registerCustomer.addEventListener('click', function (event) {
    event.preventDefault();

    register_client();
    clear_customer();
})

registerScavenger.addEventListener('click', function (event) {
    event.preventDefault();

    register_scavenger();
    clear_scavenger();
})

loginUser.addEventListener('click', function (event) {
    event.preventDefault();
    loginValidation();
})