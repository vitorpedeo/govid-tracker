const menu = document.getElementById("menu");
const hamburguer = document.getElementById("hamburguer");
const line = document.getElementById("line");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("active");
  line.classList.toggle("active");
});
