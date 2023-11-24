const navBar = document.querySelector(".nav__bar");
const bottomBar = document.querySelector(".bottom--section");

window.addEventListener("scroll", () => {
  if (window.scrollY > bottomBar.offsetTop - navBar.offsetHeight - 50) {
    navBar.classList.add("active");
  } else navBar.classList.remove("active");
});
