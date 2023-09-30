const btn = document.querySelector(".menu-toggle-btn");
const drawer = document.querySelector(".nav-drawer");

btn.addEventListener("click", function () {
  drawer.classList.toggle("hidden");
});