getData();

async function getData() {
  const response = await fetch("http://localhost:8080/api/auth/ScavengerData");
  console.log(response);

  const data = await response.json();
  console.log(data);

  document.getElementById("name").innerHTML = data[0].name;
  document.getElementById("username").innerHTML = data[0].username;
  document.getElementById("email").innerHTML = data[0].email;
  document.getElementById("phone").innerHTML = data[0].phone;
  document.getElementById("birthDate").innerHTML = data[0].birthDate;
  document.getElementById("gender").innerHTML = data[0].gender;
  document.getElementById("work").innerHTML = data[0].work;
  document.getElementById("materials").innerHTML = data[0].materials;
  document.getElementById("days").innerHTML = data[0].dayWeek;
  document.getElementById("period").innerHTML = data[0].dayPeriod
}