const menu = document.getElementById("menu");
const openMenu = document.getElementById("hamburguer");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
    menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("active");
});