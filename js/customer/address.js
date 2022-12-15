getAddress();

async function getAddress() {
    const response = await fetch("http://localhost:8080/api/auth/AddressByUsername");
    console.log(response);
  
    const data = await response.json();
    console.log(data);
  
    length = data.length;
    console.log(length);
  
    var addr = "";
  
    for(i=0; i<length ;i++){
      
        addr+="<div class="+"address"+">";
            addr+="<h3>"+data[i].addressName+"</h3>";
            addr+="<ul>";
                addr+="<li><strong>Rua: </strong>"+data[i].street+"</li>";
                addr+="<li><strong>Número: </strong>"+data[i].number+"</li>";
                addr+="<li><strong>Complemento: </strong>"+data[i].complement+"</li>";
                addr+="<li><strong>Bairro: </strong>"+data[i].district+"</li>";
                addr+="<li><strong>CEP: </strong>"+data[i].cep+"</li>";
                addr+="<li><strong>Cidade: </strong>"+data[i].city+" <strong class="+"st"+">Estado: </strong>"+data[i].state+"</li>";
            addr+="</ul>";
            addr += "<button class='delete' onclick='deleteAddress(\""+data[i].id+"\")'>"
                addr += "<img src='../assets/icons/delete.png'>"
            addr += "</button>"
        addr+="</div>";
    }
    
    if(length>0)
      document.getElementById("box").innerHTML = addr;
}

function deleteAddress(id){

  fetch("http://localhost:8080/api/auth/deleteAddressById", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: id,
  })
    .then(function (res) {
      if (res.ok) {
        window.alert("Endereço Deletado com SUCESSO!");
        window.location = "address.html";
      }
      console.log(res);
    })
    .then(function (res) {
      console.log(res);
    });
} 