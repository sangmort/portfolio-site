// Generate random cloud copies based on screen width
const screenWidth = window.innerWidth;
const container = document.getElementById("cloud-container");
const originalCloud1 = document.querySelector(".cloud1").cloneNode(true);
const originalCloud2 = document.querySelector(".cloud2").cloneNode(true);
const originalCloud3 = document.querySelector(".cloud3").cloneNode(true);
let numberOfCopies;

if (screenWidth < 800) {
  numberOfCopies = 15; // For screens < 800px
} else if (screenWidth >= 800 && screenWidth <= 1200) {
  numberOfCopies = 30; // For screens between 800px and 1200px
} else {
  numberOfCopies = 60; // For screens > 1200px
}

const duplicateClouds = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < numberOfCopies; i++) {
    let clonedCloud;
    const randomTypeOfCloud = Math.floor(Math.random() * 3);

    if (randomTypeOfCloud === 0) {
      clonedCloud = originalCloud1.cloneNode(true);
    } else if (randomTypeOfCloud === 1) {
      clonedCloud = originalCloud2.cloneNode(true);
    } else {
      clonedCloud = originalCloud3.cloneNode(true);
    }

    clonedCloud.style.left = getRandomNumber(-4, 102) + "dvw";
    clonedCloud.style.top = getRandomNumber(1, 35) + "dvh";
    clonedCloud.style.width = getRandomNumber(4, 10) + "rem";
    clonedCloud.style.opacity = getRandomNumber(0.9, 1);

    fragment.appendChild(clonedCloud);
  }

  container.appendChild(fragment);
};

duplicateClouds();

// Generate Stars
function getRandomNumber(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

// Creates stars & styles them
function createStar() {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  circle.setAttribute("class", "star");
  circle.setAttribute("r", getRandomNumber(0, 1));
  circle.setAttribute("cx", getRandomNumber(2, 98) + "dvw");
  circle.setAttribute("cy", getRandomNumber(1, 35) + "dvh");

  return circle;
}

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
function addStarsToContainer(container, numStars) {
  for (let i = 0; i < numStars; i++) {
    const star = createStar();
    svg.appendChild(star);
  }
  container.appendChild(svg);
}

// Adjust amount of stars used by screen-size for performance reasons
const starsContainer = document.getElementById("stars-container");

if (screenWidth < 900) {
  addStarsToContainer(starsContainer, 200); // For screens < 900px
} else if (screenWidth >= 900 && screenWidth <= 1300) {
  addStarsToContainer(starsContainer, 300); // For screens between 900px and 1200px
} else {
  addStarsToContainer(starsContainer, 400); // For screens > 1200px
}
