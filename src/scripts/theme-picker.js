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
  }
}

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", toggleTheme);

initializeTheme();
