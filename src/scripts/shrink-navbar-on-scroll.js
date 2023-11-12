document.addEventListener("DOMContentLoaded", function () {
  const stickyNavbar = document.getElementById("sticky");
  const scrollThreshold = 350;

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      stickyNavbar.style.visibility = "visible";
      stickyNavbar.style.position = "fixed";
      stickyNavbar.style.top = "0";
    } else if (window.scrollY < scrollThreshold) {
      stickyNavbar.style.visibility = "hidden";
    }
  });
});
