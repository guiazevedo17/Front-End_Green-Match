function returnNewCollect() {
  window.location = "newCollect.html";
}

function chooseAddress(){
  window.location = "chooseAddress.html";
}

function newCollect() {
  fetch("http://localhost:8080/api/auth/coleta", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(
      {       
        "username_scavenger": "guiazeddd",
           "obs": "vidro quebrado",
           "weight": 17.3,
           "materials":["vidro","papel"],
           "dayWeek": ["segunda-feira","terça-feira"],
           "dayPeriod":["manha","tarde"]
}

    ),
  })
    .then(function (res) {
      console.log(res);
    })
    .then(function (res) {
      console.log(res);
    });
}
