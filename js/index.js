/*function logIn() {
    window.location = "customer.html";
}*/
function logIn() {
    window.location = "scavenger.html";
}

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
const registerCustomer = document.querySelector(".registerCustomer");
const registerScavenger = document.querySelector(".registerScavenger");


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

function register_customer() {

    fetch("http://localhost:8080/registerCustomer",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                name: Iname.value + IlastName.value,
                username: IuserName.value,
                phone: Iphone.value,
                email: Iemail.value,
                password: Ipassword.value,
                birthday: IbirthDay.value
            })
        })
        .then(function (res) { console.log(res) })
        .then(function (res) { console.log(res) })

};

function register_scavenger() {

    fetch("http://localhost:8080/registerScavenger",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                name: InameScavenger.value + IlastNameScavenger.value,
                username: IuserNameScavenger.value,
                phone: IphoneScavenger.value,
                email: IemailScavenger.value,
                password: IpasswordScavenger.value,
                birthday: IbirthDayScavenger.value
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

registerCustomer.addEventListener('click', function (event) {
    event.preventDefault();

    register_customer();
    clear_customer();
})

registerScavenger.addEventListener('click', function (event) {
    event.preventDefault();

    register_scavenger();
    clear_scavenger();
})