
// Script changes site from light to dark mode via button
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const targetTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(targetTheme);
}

function initializeTheme() {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    setTheme(storedTheme);
    updateIcons(storedTheme);
  } else {
    setTheme("dark");
    updateIcons("dark");
  }
}

// Change icon appearance on click
function updateIcons(theme) {
  const buttons = document.querySelectorAll(".theme-toggle");
  buttons.forEach((button) => {
    const sun = button.querySelector(".sun");
    const moon = button.querySelector(".moon");

    if (theme === "dark") {
      sun.classList.add("visible");
      moon.classList.remove("visible");
    } else {
      sun.classList.remove("visible");
      moon.classList.add("visible");
    }
  });
}

// Get updated theme after toggle and update all icons
const toggles = document.querySelectorAll(".theme-toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggleTheme();

    const updatedTheme = document.documentElement.getAttribute("data-theme");
    updateIcons(updatedTheme);
  });
});

// Sets initial theme and icons on page load
initializeTheme();