const hamburguer = document.getElementById("hamburguer");
const circleMenu = document.getElementById("circle-menu");
const menuOptions = document.getElementById("menu-options");
const line = document.getElementById("line");

hamburguer.addEventListener("click", () => {
  line.classList.toggle("active");
  circleMenu.classList.toggle("active");
  menuOptions.classList.toggle("active");
});
