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
  } else {
    setTheme("light");
  }
  updateIcon(storedTheme);
}

function updateIcon(theme) {
  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".moon");

  if (theme === "dark") {
    sun.classList.add("visible");
    moon.classList.remove("visible");
  } else {
    sun.classList.remove("visible");
    moon.classList.add("visible");
  }
}

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  toggleTheme();

  // Get the updated theme after the toggle and update the icon.
  const updatedTheme = document.documentElement.getAttribute("data-theme");
  updateIcon(updatedTheme);
});

initializeTheme();
