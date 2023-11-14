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

    clonedCloud.style.left = getRandomNumber(0, 100) + "dvw";
    clonedCloud.style.top = getRandomNumber(-15, 10) + "dvh";
    clonedCloud.style.width = getRandomNumber(4, 11) + "rem";;

    container.appendChild(clonedCloud);
  }
};

duplicateClouds();

// Generate Stars
function getRandomNumber(min, max) {
  return (Math.random() * (max - min + Math.random()) + min).toFixed(1);
}

// Creates the stars & stylyes them
function createStar() {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  const circle = document.createElementNS(svgNS, "circle");

  svg.setAttribute("class", "star");
  circle.setAttribute("r", getRandomNumber(.25, 1.35)) + "rem";
  circle.setAttribute("cx", getRandomNumber(2, 98) + "dvw");
  circle.setAttribute("cy", getRandomNumber(1, 27) + "dvh");

  svg.appendChild(circle);
  return svg;
}


function addStarsToContainer(container, numStars) {
  for (let i = 0; i < numStars; i++) {
    const star = createStar();
    container.appendChild(star);
  }
}

// Adjust ammount of stars used by screen-size for performance reasons
const starsContainer = document.getElementById("stars-container");

if (screenWidth < 800) {
  addStarsToContainer(starsContainer, 200); // For screens < 800px
} else if (screenWidth >= 800 && screenWidth <= 1300) {
  addStarsToContainer(starsContainer, 300); // For screens between 800px and 1200px
} else {
  addStarsToContainer(starsContainer, 400); // For screens > 1200px
}
