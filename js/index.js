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
});

// Integração com o BACK-END
const loginUser = document.querySelector(".loginUser");

const IusernameLogin = document.querySelector(".usernameLogin");
const IpasswordLogin = document.querySelector(".passwordLogin");

function loginValidation() {
    fetch("http://localhost:8080/api/auth/signin",
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

function clear_login() {
    IusernameLogin.value = "";
    IpasswordLogin.value = "";
};

loginUser.addEventListener('click', function (event) {
    event.preventDefault();
    loginValidation();
});