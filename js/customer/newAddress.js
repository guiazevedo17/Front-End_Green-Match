const address_name = document.querySelector(".name");
const cep = document.querySelector(".cep");
const street = document.querySelector(".street");
const number = document.querySelector(".number");
const complement = document.querySelector(".complement");
const district = document.querySelector(".district");
const city = document.querySelector(".city");
const state = document.querySelector(".state");

function returnAddress(){
  window.location = "address.html";
}

function newAddress(){
    fetch("http://localhost:8080/api/auth/newAddress", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      address_name: address_name.value,
      street: street.value,
      number: number.value,
      complement: complement.value,
      district: district.value,
      cep: cep.value,
      city: city.value,
      state: state.value
    }),
  })
    .then(function (res) {
      if (res.ok) {
        window.alert("Endereço Cadastrado com SUCESSO!");
        window.location = "address.html";
      } else {
        window.alert("FALHA no Cadastro de Endereço!");
      }
      console.log(res);
    })
    .then(function (res) {
      console.log(res);
    });
}