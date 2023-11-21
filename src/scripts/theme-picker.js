// Set the theme in document's attribute & local storage
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// Toggle between light & dark theme based on current theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const targetTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(targetTheme);
}

// Initialize theme based on user's system preference or local storage
function initializeTheme() {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("theme");

  setTheme(prefersDarkMode ? "dark" : storedTheme);
  updateIcons();
}

// Update sun & moon icons based on the current theme
function updateIcons() {
  const buttons = document.querySelectorAll(".theme-toggle");
  const currentTheme = document.documentElement.getAttribute("data-theme");

  buttons.forEach((button) => {
    const sun = button.querySelector(".sun");
    const moon = button.querySelector(".moon");

    sun.classList.toggle("visible", currentTheme === "dark");
    moon.classList.toggle("visible", currentTheme === "light");
  });
}

// Event listener for theme toggle buttons
const toggles = document.querySelectorAll(".theme-toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggleTheme();
    updateIcons();
  });
});

// Event listener for document ready
document.addEventListener("DOMContentLoaded", initializeTheme);
