// Parallax effect for landscape background, targets and moves each SVG path as the user scrolls
const paths = document.querySelectorAll("#treeline path");

// Parallax effects for each path
const pathParallaxEffects = [
    // { element: paths[0], direction: "down", speed: 0.08 },
    { element: paths[1], direction: "up", speed: 0.2 },
    { element: paths[2], direction: "down", speed: 0.15 },
    { element: paths[3], direction: "up", speed: 0.2 },
    { element: paths[4], direction: "up", speed: 0.5 },
    { element: paths[5], direction: "up", speed: 0.9 },
    { element: paths[6], direction: "up", speed: 1.1 },
];

const svgElement = document.querySelector("#treeline");
const initialViewportHeight = window.innerHeight;
const parallaxScrollThreshold = initialViewportHeight * .33; 

// Tracks if SVG should be hidden
let hideSVG = false;

// Wait for user to scroll
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Hide the SVG if user scrolls past viewport, keep top path visible to stop bottom SVGs from showing
    if (scrollY > parallaxScrollThreshold) {
        if (!hideSVG) {
            svgElement.style.visibility = 'hidden';
            paths[6].style.visibility = `visible`;
            hideSVG = true;
        }
    // Show the SVG if user scrolls back up
    } else {
        if (hideSVG) {
            svgElement.style.visibility = 'visible';
            paths[6].style.visibility = `visible`;
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
