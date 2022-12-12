const top = document.querySelector(".top");
const top2 = document.querySelector(".top2");
const newCollect = document.querySelector(".newCollect");
const newCollect2 = document.querySelector(".newCollect2");

const Iobs = document.querySelector(".obs");
const Iweight = document.querySelector(".weight");
const IperiodoS = document.querySelectorAll("input[name='periodo']");
let Iperiodo;

IperiodoS.forEach((periodoS) => {
  periodoS.addEventListener("change", (event) => {
    Iperiodo = document.querySelector("input[name='periodo']:checked");
  });
});

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

function oi(){
  window.alert("olá!");
}

function chooseAddress() {
  alert("Entrei");
  newCollect.style.display = "none";
  newCollect2.style.display = "flex";
}

function returnNewCollect() {
  newCollect2.style.display = "none";
  newCollect.style.display = "flex";
}


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
      obs: Iobs.value,
      weight: Iweight.value,
      materials: materials,
      dayWeek: days,
      dayPeriod: Iperiodo.value,
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
