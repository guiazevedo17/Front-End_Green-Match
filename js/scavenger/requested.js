getRequesteds();

async function getRequesteds() {
  const response = await fetch("http://localhost:8080/api/auth/AllCollect"); //ROTA para coletas SOLICITADAS
  
  const data = await response.json();
  
  length = data.length;
  
  var collect = "";
  
  for (i = 0; i < length; i++) {
  
    collect += "<div class='collect'>"
      collect += "<div class='image'>"
        collect += "<img src='assets/icons/requested.png'/>"
      collect += "</div>"

      collect += "<div class='content'>"
          collect += "<h1>Coleta - "+data[i].name_collect+"</h1>"
          collect += "<ul>"
              collect += "<li>Materiais: <span name='material"+[i]+"'>"+data[i].materials+"</span></li>"
              collect += "<li>Dias: <span name='day"+[i]+"'>"+data[i].dayWeek+"</span></li>"
              collect += "<li>Período: <span name='period"+[i]+"'>"+data[i].dayPeriod+"</span></li>"
              collect += "<li>Observação: <span name='obs"+[i]+"'>"+data[i].obs+"</span></li>"
              collect += "<li>Peso: <span name='weight"+[i]+"'>"+data[i].weight+"</span><span>kg</span></li>"
          collect += "</ul>"
      collect += "</div>"

      collect += "<div class='buttons' id='accept"+i+"' onclick='acceptRequest(\""+data[i].id+"\")'>"
        collect += "<button class='deal'>"
          collect += "<span>aceitar</span>"
          collect += "<img src='../assets/icons/deal.png'/>"
        collect += "</button>"
      collect += "</div>"
    collect += "</div>"
      
  }
  
  if(length>0)
    document.getElementById("main").innerHTML = collect;
}

function acceptRequest(id){

  fetch("http://localhost:8080/api/auth/acceptRequest", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: id,
  })
    .then(function (res) {
      if (res.ok) {
        window.alert("Coleta Cencelada com SUCESSO!");
        window.location = "scavenger.html";
      }
      console.log(res);
    })
    .then(function (res) {
      console.log(res);
    });

}