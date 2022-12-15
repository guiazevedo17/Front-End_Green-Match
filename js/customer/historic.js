getHistoric();

async function getHistoric() {
    const response = await fetch("http://localhost:8080/api/auth/AllCollectHistoricCustumer"); // ROTA para HISTORICO de coletas
    console.log(response);
  
    const data = await response.json();
    console.log(data);
  
    length = data.length;
    console.log(length);
  
    var collect = "";
  
    for (i = 0; i < length; i++) {

        collect += "<div class='collect'>"
            collect += "<div class='image'>"
                collect += "<img src='../assets/icons/historic.png'/>"
            collect += "</div>"

            collect += "<div class='content'>"
                collect += "<h1>Coleta - "+data[i].name_collect+"</h1>"
                collect += "<ul>"
                    collect += "<li>Materiais: <span>"+data[i].materials+"</span></li>"
                    collect += "<li>Dias: <span>"+data[i].dayWeek+"</span></li>"
                    collect += "<li>Período: <span>"+data[i].dayPeriod+"</span></li>"
                    collect += "<li>Observação: <span>"+data[i].obs+"</span></li>"
                    collect += "<li>Peso: <span>"+data[i].weight+"</span><span>kg</span></li>"
                    collect += "<li>Endereço: <span>"+data[i].address+"</span></li>"
                    collect += "<li>Coletor: <span>"+data[i].usernameScavenger+"</span></li>"
                collect += "</ul>"
            collect += "</div>"

            collect += "<div class='buttons'></div>"
        collect += "</div>"

    }
  
    if(length>0)
        document.getElementById("main").innerHTML = collect;
  }