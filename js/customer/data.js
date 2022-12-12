getData();

async function getData() {
  

  const response = await fetch("http://localhost:8080/api/auth/meusDados");
  console.log(response);

  const data = await response.json();
  console.log(data);

  document.getElementById("name").innerHTML = data[0].name;
  document.getElementById("username").innerHTML = data[0].username;
  document.getElementById("email").innerHTML = data[0].email;
  document.getElementById("phone").innerHTML = data[0].phone;
  document.getElementById("birthDate").innerHTML = data[0].birthDate;
}

function oi(){
  window.alert("olá!");
}