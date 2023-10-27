document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const navbar = document.querySelector(".navbar-default");
  const scrollThreshold = 100;

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("navbar-shrink");
      header.style.position = "sticky";
      header.style.top = "0";
    }
    if (window.scrollY < scrollThreshold) {
      navbar.classList.remove("navbar-shrink");
      header.style.position = "relative";
      header.style.top = "initial";
    }
  });
});
