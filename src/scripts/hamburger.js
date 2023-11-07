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

// Fireflies that follow user's mouse cursor
window.addEventListener(
  "mousemove",
  function (e) {
    const numberOfFireflies = 20;
    const colors = ["var(--fireflies-color-1)", "var(--fireflies-color-2)", "var(--fireflies-color-3)"];

    function createFirefly() {
      const scale = 0.6 + Math.random() * 0.7;
      const randomOffset = (1 - scale) * 300;
      const size = 5 * scale + "px";

      const elem = document.createElement("div");
      elem.style.position = "fixed";
      elem.style.top = e.clientY + Math.floor(Math.random() * randomOffset - randomOffset / 2) + "px";
      elem.style.left = e.clientX + Math.floor(Math.random() * randomOffset - randomOffset / 2) + "px";
      elem.style.width = size;
      elem.style.height = size;
      elem.style.background = colors[Math.floor(Math.random() * colors.length)];
      elem.style.borderRadius = size;
      elem.style.filter = `drop-shadow(0 0 .2rem ${colors[Math.floor(Math.random() * colors.length)]}) blur(.04rem)`;
      elem.style.pointerEvents = "none";
      elem.style.zIndex = 1200;

      // Random opacity and animation duration
      elem.style.opacity = Math.random() * 0.6 + 0.2;
      elem.style.transition = "opacity " + (Math.random() * 3 + 1) + "s ease";

      document.body.appendChild(elem);

      // Remove fireflies
      window.setTimeout(function () {
        document.body.removeChild(elem);
      }, Math.round(Math.random() * scale * 360));

      // Random blinking
      setInterval(function () {
        elem.style.opacity = Math.random() * 0.6 + 0.2;
      }, Math.random() * 2000 + 100);
    }

    // Create fireflies
    for (let i = 0; i < numberOfFireflies; i++) {
      createFirefly();
    }
  },
  false
);
