// Script changes site from light to dark mode via button &/or
// user-preference at the system level

// Sets the theme in document's attribute & local storage to remember user's preference
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// Switch between light & dark theme based on current theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const targetTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(targetTheme);
}

// Initialize theme based on user's system preference or preference in local storage
function initializeTheme() {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log("Prefers Dark Mode:", prefersDarkMode);
  const storedTheme = localStorage.getItem("theme");

  if (prefersDarkMode) {
    setTheme(prefersDarkMode ? "dark" : "light");

  } else {
    setTheme(storedTheme);
  }

  updateIcons();
}

// Updates sun & moon icons based on current theme
function updateIcons() {
  const buttons = document.querySelectorAll(".theme-toggle");
  const currentTheme = document.documentElement.getAttribute("data-theme");

  buttons.forEach((button) => {
    const sun = button.querySelector(".sun");
    const moon = button.querySelector(".moon");

    if (currentTheme === "dark") {
      sun.classList.add("visible");
      moon.classList.remove("visible");
    } else {
      sun.classList.remove("visible");
      moon.classList.add("visible");
    }
  });
}

// Toggle theme & update icons when theme toggle buttons are clicked
const toggles = document.querySelectorAll(".theme-toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggleTheme();
    updateIcons();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  initializeTheme();
});

