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
          collect += "<button class='deal'>"
            collect += "<span>aceitar</span>"
            collect += "<img src='../assets/icons/deal.png'/>"
          collect += "</button>"
        collect += "</div>"
      collect += "</div>"
      
    }
  
    document.getElementById("main").innerHTML = collect;
  }