const btn = document.querySelector(".btn-toggle");
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.documentElement.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.documentElement.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkTheme.matches) {
    document.documentElement.classList.toggle("light-theme");
    var theme = document.documentElement.classList.contains("light-theme") ? "light" : "dark";
  } else {
    document.documentElement.classList.toggle("dark-theme");
    var theme = document.documentElement.classList.contains("dark-theme") ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
});
