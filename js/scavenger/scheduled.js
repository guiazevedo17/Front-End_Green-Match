getScheduleds();

async function getScheduleds() {
  const response = await fetch("http://localhost:8080/api/auth/AllCollectScheduled"); //ROTA para coletas AGENDADAS
  console.log(response);
  
  const data = await response.json();
  console.log(data);
  
  length = data.length;
  console.log(length);
  
  var collect = "";
  
  for (i = 0; i < length; i++) {
  
      collect += "<div class='collect'>"
      collect += "<div class='image'>"
        collect += "<img src='../assets/icons/scheduled.png'/>"
      collect += "</div>"

      collect += "<div class='content'>"
          collect += "<h1>Coleta - "+data[i].name_collect+"</h1>"
          collect += "<ul>"
              collect += "<li>Materiais: <span>"+data[i].materials+"</span></li>"
              collect += "<li>Dias: <span>"+data[i].dayWeek+"</span></li>"
              collect += "<li>Período: <span>"+data[i].dayPeriod+"</span></li>"
              collect += "<li>Observação: <span>"+data[i].obs+"</span></li>"
              collect += "<li>Peso: <span>"+data[i].weight+"</span><span>kg</span></li>"
              collect += "<li>Cidade: <span>"+data[i].name_collect+"</span></li>"
              collect += "<li>Bairro: <span>"+data[i].name_collect+"</span></li>"
              collect += "<li>Endereço: <span>"+data[i].name_collect+"</span></li>"
          collect += "</ul>"
      collect += "</div>"

      collect += "<div class='buttons'>"
        collect += "<button class='cancel' onclick='cancelScheduled(\""+data[i].id+"\")'>"
          collect += "<span>cancelar</span>"
          collect += "<img src='../assets/icons/cancel.png'/>"
        collect += "</button>"

        collect += "<button class='done' onclick='completeScheduled(\""+data[i].id+"\")'>"
          collect += "<span>finalizar</span>"
          collect += "<img src='../assets/icons/done.png'/>"
        collect += "</button>"
      collect += "</div>"
    collect += "</div>"
      
  }
  
  document.getElementById("main").innerHTML = collect;
}

function cancelScheduled(id){
  console.log(id);
  alert('CANCELANDO Scheduled Scavenger');
  
  // fetch("http://localhost:8080/api/auth/", {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   method: "POST",
  //   body: id,
  // })
  //   .then(function (res) {
  //     if (res.ok) {
  //       window.alert("Coleta Cancelada com SUCESSO!");
  //       window.location = "requested.html";
  //     }
  //     console.log(res);
  //   })
  //   .then(function (res) {
  //     console.log(res);
  //   });
}

function completeScheduled(id){
  console.log(id);
  alert('COMPLETANDO Scheduled Scavenger');

  // fetch("http://localhost:8080/api/auth/", {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   method: "POST",
  //   body: id,
  // })
  //   .then(function (res) {
  //     if (res.ok) {
  //       window.alert("Coleta Cencelada com SUCESSO!");
  //       window.location = "requested.html";
  //     }
  //     console.log(res);
  //   })
  //   .then(function (res) {
  //     console.log(res);
  //   });
}