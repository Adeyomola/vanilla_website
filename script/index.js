const hamburger = document.getElementById("hamburger");
let nav = document.querySelector("nav");
const layers = document.querySelectorAll(".hamburger span");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("shownav");
  layers.forEach((layer) => layer.classList.toggle("hamburgerActive"));
});

