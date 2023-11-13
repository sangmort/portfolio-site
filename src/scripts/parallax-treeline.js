// Parallax effect for landscape background, targets and moves each SVG path as the user scrolls
const svgPaths = document.querySelectorAll("#treeline path");
const wrapper = document.getElementById("wrapper");
const skyOrb = document.getElementById("sky-orb");
const header = document.querySelector("header");

// Parallax effects for each path
const pathParallaxEffects = [
  { element: svgPaths[0], direction: "down", speed: 0.01 },
  { element: svgPaths[1], direction: "up", speed: 0.2 },
  { element: svgPaths[2], direction: "down", speed: .1 },
  { element: svgPaths[3], direction: "up", speed: 0.2 },
  { element: svgPaths[4], direction: "up", speed: 0.5 },
  { element: svgPaths[5], direction: "up", speed: 0.9 },
  { element: svgPaths[6], direction: "up", speed: 1.3 },
  { element: wrapper, direction: "up", speed: 2 },
  { element: skyOrb, direction: "down", speed: .2 },
  { element: header, direction: "up", speed: 3 }
];

const svgElement = document.querySelector("#treeline");
const initialViewportHeight = window.innerHeight;
const parallaxScrollThreshold = initialViewportHeight * 0.33;

// Tracks if SVG should be hidden
let hideSVG = false;

// Wait for user to scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Hide the SVG if user scrolls past viewport, keep top path visible to stop bottom SVGs from showing
  if (scrollY > parallaxScrollThreshold) {
    if (!hideSVG) {
      svgElement.style.visibility = "hidden";
      svgPaths[6].style.visibility = `visible`;
      hideSVG = true;
    }
    // Show the SVG if user scrolls back up
  } else {
    if (hideSVG) {
      svgElement.style.visibility = "visible";
      svgPaths[6].style.visibility = `visible`;
      hideSVG = false;
    }

    // Add parallax effect to each path
    pathParallaxEffects.forEach((effect) => {
      const { element, direction, speed } = effect;

      if (direction === "up") {
        const translateY = -scrollY * speed;
        element.style.transform = `translateY(${translateY}px)`;
      } else if (direction === "down") {
        const translateY = scrollY * speed;
        element.style.transform = `translateY(${translateY}px)`;
      }
    });
  }
});
