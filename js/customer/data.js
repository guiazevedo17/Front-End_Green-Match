getData();

async function getData() {
  

  const response = await fetch("http://localhost:8080/api/auth/meusDados");
  console.log(response);

  const data = await response.json();
  console.log(data);

  document.getElementById("name").innerHTML = data.name;
  document.getElementById("username").innerHTML = data.username;
  document.getElementById("email").innerHTML = data.email;
  document.getElementById("phone").innerHTML = data.phone;
  document.getElementById("birthDate").innerHTML = data.birthDate;
}

