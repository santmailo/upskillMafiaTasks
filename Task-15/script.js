const btn = document.getElementById("btn");
const box = document.querySelectorAll(".box");

function showGreetings() {
  const greeting = document.getElementById("greeting");
  const userName = document.getElementById("userName").value.trim();
  greeting.innerHTML = "Hello " + userName;
}

function changeBG(element, color) {
  console.log("hi");
  element.style.background = color;
  element.style.color = "white";
}
