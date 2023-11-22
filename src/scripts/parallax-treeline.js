// Parallax effect for landscape background, targets and moves each SVG path as the user scrolls
const svgPaths = document.querySelectorAll("#treeline path");
const wrapper = document.getElementById("wrapper");
const skyOrb = document.getElementById("sky-orb");
const header = document.querySelector("header");

// Parallax effects for each path
const pathParallaxEffects = [
  // { element: skyOrb, direction: "down", speed: 0.05 },
  // { element: svgPaths[0], direction: "down", speed: 0.05 },
  { element: svgPaths[1], direction: "up", speed: 0.3 },
  { element: svgPaths[2], direction: "up", speed: 0.5 },
  { element: svgPaths[3], direction: "up", speed: 0.7 },
  { element: svgPaths[4], direction: "up", speed: 1.2 },
  { element: svgPaths[5], direction: "up", speed: 1.6 },
  { element: svgPaths[6], direction: "up", speed: 1.4 },
  { element: wrapper, direction: "up", speed: 2.2 },
  {
    element: header,
    direction: "up",
    speed: 2.2,
    desktopOnly: true,
  },
];

const svgElement = document.querySelector("#treeline");
const parallaxScrollThreshold = window.innerHeight * 0.33;

// Tracks if SVG should be hidden
let hideSVG = false;

// Wait for user to scroll
// Function to handle animation frame
function animate() {
  const scrollY = window.scrollY;

  // Hide the SVG if the user scrolls past viewport, keep top path visible to stop bottom SVGs from showing
  if (scrollY > parallaxScrollThreshold) {
    if (!hideSVG) {
      svgElement.style.visibility = "hidden";
      svgPaths[6].style.visibility = "visible";
      hideSVG = true;
    }
    // Show the SVG if the user scrolls back up
  } else {
    if (hideSVG) {
      svgElement.style.visibility = "visible";
      svgPaths[6].style.visibility = "visible";
      hideSVG = false;
    }

    // Add parallax effect to each path
    pathParallaxEffects.forEach((effect) => {
      const { element, direction, speed, desktopOnly } = effect;

      // Check if the effect should be applied only on desktop
      if (desktopOnly && window.innerWidth < 1400) {
        return;
      }

      if (direction === "up") {
        const translateY = -scrollY * speed;
        const newTransformValue = `translate3d(0, ${translateY}px, 0)`;

        if (element.style.transform !== newTransformValue) {
          element.style.transform = newTransformValue;
        }
      } else if (direction === "down") {
        const translateY = scrollY * speed;
        const newTransformValue = `translate3d(0, ${translateY}px, 0)`;

        if (element.style.transform !== newTransformValue) {
          element.style.transform = newTransformValue;
        }
      }
    });
  }

  // Request next animation frame
  requestAnimationFrame(animate);
}

// Call to start animation loop
animate();