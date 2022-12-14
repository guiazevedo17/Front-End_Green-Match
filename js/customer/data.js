getData();

async function getData() {
  const response = await fetch("http://localhost:8080/api/auth/custumerData");

  const data = await response.json();

  document.getElementById("name").innerHTML = data[0].name;
  document.getElementById("username").innerHTML = data[0].username;
  document.getElementById("email").innerHTML = data[0].email;
  document.getElementById("phone").innerHTML = data[0].phone;
  document.getElementById("gender").innerHTML = data[0].gender;
  document.getElementById("birthDate").innerHTML = data[0].birthDate;
}