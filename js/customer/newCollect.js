const top1 = document.querySelector(".top");
const top2 = document.querySelector(".top2");
const newCollect1 = document.querySelector(".newCollect");
const newCollect2 = document.querySelector(".newCollect2");

const Iobs = document.querySelector(".obs");
const Iweight = document.querySelector(".weight");
const IperiodS = document.querySelectorAll("input[name='period']");
let Iperiod;

IperiodS.forEach((periodS) => {
  periodS.addEventListener("change", (event) => {
    Iperiod = document.querySelector("input[name='period']:checked");
  });
});

const IaddressES = document.querySelectorAll("input[name='address']");
let Iaddress;

IaddressES.forEach((addressES) => {
  addressES.addEventListener("change", (event) => {
    Iaddress = document.querySelector("input[name='address']:checked");
  });
});

const timeElapsed = Date.now();
const today = new Date(timeElapsed);


function chooseAddress() {
  getAddress();
  top1.style.display = "none";
  newCollect1.style.display = "none";
  top2.style.display = "flex"
  newCollect2.style.display = "flex";
}

function returnNewCollect() {
  top2.style.display = "none"
  newCollect2.style.display = "none";
  top1.style.display = "flex";
  newCollect1.style.display = "flex";
}

/* POST */

function newCollect() {
  const materials = [];
  const days = [];

  let materiais = document.getElementsByName("material");
  let dias = document.getElementsByName("dia");

  for (let i = 0; i < materiais.length; i++) {
    if (materiais[i].checked) materials.push(materiais[i].value);
  }

  for (let i = 0; i < dias.length; i++) {
    if (dias[i].checked) days.push(dias[i].value);
  }

  fetch("http://localhost:8080/api/auth/newCollect", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name_collect: today.toLocaleDateString(),
      address: "exemplo",
      obs: Iobs.value,
      weight: Iweight.value,
      materials: materials,
      dayWeek: days,
      dayPeriod: Iperiod.value,
    }),
  })
    .then(function (res) {
      if (res.ok) {
        window.alert("Pedido de coleta enviado com sucesso");
      }
      console.log(res);
    })
    .then(function (res) {
      console.log(res);
    });
}

/* GET */

async function getAddress() {
  const response = await fetch("http://localhost:8080/api/auth/AddressByUsername");
  console.log(response);

  const data = await response.json();
  console.log(data);

  length = data.length;
  console.log(length);

  var addr = "";

  for (i = 0; i < length; i++) {

    addr += "<input type='radio' name='address' id='address" + i + "' value='xoxo' >";
    addr += "<label for=" + "address" + i + ">";

    addr += "<div class=" + "address" + ">";
    addr += "<h3>" + data[i].address_name + "</h3>";
    addr += "<ul>";
    addr += "<li><strong>Rua: </strong>" + data[i].street + "</li>";
    //addr+="<li><strong>Número: </strong>"+data.number+"</li>";
    addr += "<li><strong>Complemento: </strong>" + data[i].complement + "</li>";
    addr += "<li><strong>Bairro: </strong>" + data[i].district + "</li>";
    addr += "<li><strong>CEP: </strong>" + data[i].cep + "</li>";
    addr += "<li><strong>Cidade: </strong>" + data[i].city + " <strong class=" + "st" + ">Estado: </strong>" + data[i].state + "</li>";
    addr += "</ul>";
    addr += "</div>";

    addr += "</label>";
  }

  document.getElementById("box2").innerHTML = addr;
}