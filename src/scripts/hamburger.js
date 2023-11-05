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


window.addEventListener('mousemove', function (e) {
  const sizes = [1, 0.9, 0.8, 0.75, 0.6];

  sizes.forEach((scale) => {
    const randomOffset = (1 - scale) * 200;
    const elem = document.createElement("div");
    const size =  3 * scale + 'px';

    elem.style.position = 'fixed';
    elem.style.top = e.pageY + Math.floor(Math.random() * randomOffset - randomOffset / 2) + 'px';
    elem.style.left = e.pageX + Math.floor(Math.random() * randomOffset - randomOffset / 2) + 'px';
    elem.style.width = size;
    elem.style.height = size;
    elem.style.background = `hsla(${Math.round(Math.random() * 0)}, 100%, 90%, ${scale})`;
    elem.style.borderRadius = size;
    elem.style.opacity = '.75';
    elem.style.filter = 'drop-shadow(0 0 2px #fff)'
    elem.style.pointerEvents = 'none';

    // Set the z-index to 1200
    elem.style.zIndex = 1200;

    document.body.appendChild(elem);

    window.setTimeout(function () {
      document.body.removeChild(elem);
    }, Math.round(Math.random() * scale * 500));
  });
}, false);
