// Target paths in #treeline svg
const paths = document.querySelectorAll("#treeline path");

// Parallax effects for each path
const pathParallaxEffects = [
    { element: paths[0], direction: "down", speed: 0.1 },
    { element: paths[1], direction: "down", speed: 0.3 },
    { element: paths[2], direction: "down", speed: 0.5 },
    { element: paths[3], direction: "down", speed: 0.4 },
    { element: paths[4], direction: "down", speed: 0.5 },
    { element: paths[5], direction: "up", speed: 0.2 },
    // { element: paths[6], direction: "up", speed: 0.3 },
];

// Waits for user to scroll
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Loop through each path to apply parallax effect
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
});
