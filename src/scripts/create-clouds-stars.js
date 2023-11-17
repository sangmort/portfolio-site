const screenWidth = window.innerWidth;
const cloudContainer = document.getElementById("cloud-container");
const starsContainer = document.getElementById("stars-container");

// Helper function that randomly picks between min & max
function getRandomNumber(min, max) {
  return (Math.random() * (max - min + Math.random()) + min).toFixed(1);
}

// Create stars & style them
function createStar() {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  circle.setAttribute("class", "star");
  circle.setAttribute("r", getRandomNumber(0, 1));
  circle.setAttribute("cx", getRandomNumber(2, 98) + "dvw");
  circle.setAttribute("cy", getRandomNumber(1, 30) + "dvh");
  return circle;
}

// Duplicate stars, then add them to the svg
function addStarsToContainer(numStars) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");

  for (let i = 0; i < numStars; i++) {
    const star = createStar();
    svg.appendChild(star);
  }
  starsContainer.appendChild(svg);
}

// Create clones of existing SVG Clouds & style them
function createClonedCloud() {
  const randomTypeOfCloud = Math.floor(Math.random() * 3);
  const clonedCloud = document.querySelector(`.cloud${randomTypeOfCloud + 1}`).cloneNode(true);

  clonedCloud.style.left = getRandomNumber(-4, 102) + "dvw";
  clonedCloud.style.top = getRandomNumber(1, 35) + "dvh";
  clonedCloud.style.width = `${getRandomNumber(4, 10)}rem`;
  clonedCloud.style.opacity = getRandomNumber(0.9, 1);

  return clonedCloud;
}

// Batch duplicate cloned clouds, then add them to the cloud container
function duplicateClouds() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < numberOfClouds; i++) {
    const clonedCloud = createClonedCloud();
    fragment.appendChild(clonedCloud);
  }
  cloudContainer.appendChild(fragment);
}

let numberOfClouds;

// Adjust amount of stars & clouds generated by screen-size for performance reasons

if (screenWidth < 900) {
  numberOfClouds = 15;
  addStarsToContainer(200);
} else if (screenWidth >= 900 && screenWidth <= 1300) {
  numberOfClouds = 30;
  addStarsToContainer(300);
} else {
  numberOfClouds = 60; //
  addStarsToContainer(400);
}

// Call duplicateClouds using requestAnimationFrame for better performance
requestAnimationFrame(duplicateClouds);
