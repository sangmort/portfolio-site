// Shrink navbar on scroll & makes it sticky
document.addEventListener("DOMContentLoaded", function () {
  const headerLogo = document.getElementById("header-logo");
  const header = document.querySelector("header");
  const navbar = document.querySelector(".navbar-default");
  const scrollThreshold = 200;

  // Track whether navigation is sticky
  let isNavigationSticky = false;

  // Maker Header sticky on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold && !isNavigationSticky) {
      navbar.classList.add("navbar-shrink");
      header.style.position = "sticky";
      header.style.top = "0";
      headerLogo.style.visibility = "hidden";

      // Create a placeholder when navigation is sticky to stop page from jumping
      const headerPlaceholder = document.createElement("div");
      headerPlaceholder.style.height = header.clientHeight + "px";
      header.insertBefore(headerPlaceholder, header.firstChild);

      isNavigationSticky = true;
    }

    // Reset navigation when user scrolls up to be no longer sticky
    if (window.scrollY < scrollThreshold && isNavigationSticky) {
      navbar.classList.remove("navbar-shrink");
      header.style.position = "relative";
      header.style.top = "25dvh";
      headerLogo.style.visibility = "visible";

      // Remove placeholder when navigation is no longer sticky
      const headerPlaceholder = document.querySelector("#header-placeholder");
      if (headerPlaceholder) {
        headerPlaceholder.remove();
      }

      isNavigationSticky = false;
    }
  });
});
