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

function toggleSunAndMoon() {
  const sun = document.querySelector('.sun');
  const moon = document.querySelector('.moon');
  sun.classList.toggle('visible');
  moon.classList.toggle('visible');
}

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener('click', () => {
  toggleTheme();
  toggleSunAndMoon();
});

initializeTheme();
