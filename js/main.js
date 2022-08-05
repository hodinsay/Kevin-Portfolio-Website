// Nav Menu Slider

const navMenu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");

navMenu.style.right = "-200px"

openMenu.addEventListener("click", () => {
    navMenu.style.right = "0";
});

closeMenu.addEventListener("click", () => {
    navMenu.style.right = "-200px";
});
