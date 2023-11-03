const navigation = document.querySelector(".navbar-links");

document.querySelector(".hamburger").addEventListener("click", (event) => {
  event.stopPropagation();
  navigation.classList.toggle("expanded");
});

document.querySelector(".close-navigation").addEventListener("click", () => {
  navigation.classList.toggle("expanded");
});

document.addEventListener("click", (event) => {
  if (event.target !== navigation && !navigation.contains(event.target)) {
    navigation.classList.remove("expanded");
  }
});
