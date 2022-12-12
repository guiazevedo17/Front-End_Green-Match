const Iobs = document.querySelector(".obs");
const Iweight = document.querySelector(".weight");
const IperiodoS = document.querySelectorAll("input[name='periodo']");
let Iperiodo;

function returnNewCollect() {
  window.location = "newCollect.html";
}

function chooseAddress() {
  window.location = "chooseAddress.html";
}

IperiodoS.forEach((periodoS) => {
  periodoS.addEventListener("change", (event) => {
    Iperiodo = document.querySelector("input[name='periodo']:checked");
  });
});

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
  
  fetch("http://localhost:8080/api/auth/coleta", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      obs: Iobs.value,
      weight: Iweight.value,
      materials: materials,
      dayWeek: days,
      dayPeriod: Iperiodo.value,
    }),
  })
    .then(function (res) {
      console.log(res);
    })
    .then(function (res) {
      console.log(res);
    });
}
