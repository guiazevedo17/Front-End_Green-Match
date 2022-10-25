function logIn(){
    window.location = "client.html";
}

function newCollect(){
    window.location = "newCollect.html";
}

function chooseAddress(){
    window.location = "chooseAddress.html";
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

    if(shouldClosePopup){

        popup.style.display = 'none'
        cliente.style.display = 'none'
        catador.style.display = 'none'

    } else if(shouldReturnPopupContas) {

        contas.style.display = 'block'
        cliente.style.display = 'none'
        catador.style.display = 'none'

    } else if(shouldReturnPopupCatador){

        catador2.style.display = 'none'
        catador.style.display = 'block'

    }
})