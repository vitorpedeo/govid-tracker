const hamburguer = document.getElementById("hamburguer");
const line = document.getElementById("line");
const sideMenu = document.getElementById("side-menu");

hamburguer.addEventListener("click", () => {
  line.classList.toggle("active");
  sideMenu.classList.toggle("active");
});
