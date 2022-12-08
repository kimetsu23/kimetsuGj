const form = document.getElementById("form");

const Direccion = document.getElementById("Direccion");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location = "";


  if (Direccion.value.length < 12) {
    alert("Direccion incorrecta");
  }

  
});
