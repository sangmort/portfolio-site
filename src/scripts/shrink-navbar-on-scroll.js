// Shrink navbar on scroll & makes it sticky
document.addEventListener("DOMContentLoaded", function () {
  // const headerLogo = document.getElementById("header-logo");
  const stickyNavbar = document.getElementById("sticky");
  // const header = document.querySelector("header");
  // const navbar = document.querySelector(".navbar-links");
  const scrollThreshold = 400;

  // Track whether navigation is sticky
  // let isNavigationSticky = false;

  // Maker Header sticky on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold ) {
      // navbar.classList.add("navbar-shrink");
      stickyNavbar.style.visibility = "visible";
      stickyNavbar.style.position = "fixed";
      stickyNavbar.style.top = "0";
      // header.style.top = "0";
      // headerLogo.style.display = "none";

      // Create a placeholder when navigation is sticky to stop page from jumping
      // const headerPlaceholder = document.createElement("div");
      // headerPlaceholder.style.height = header.clientHeight + "px";
      // header.insertBefore(headerPlaceholder, header.firstChild);

      // isNavigationSticky = true;
    }

    // Reset navigation when user scrolls up to be no longer sticky
    else if (window.scrollY < scrollThreshold ) {
      // navbar.classList.remove("navbar-shrink");
      stickyNavbar.style.visibility = "hidden";

      // headerLogo.style.display = "flex";

      // Remove placeholder when navigation is no longer sticky
      // const headerPlaceholder = document.querySelector("#header-placeholder");
      // if (headerPlaceholder) {
      //   headerPlaceholder.remove();
      // }

      // isNavigationSticky = false;
    }
  });
});
