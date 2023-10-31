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
  numberOfCopies = 66; // For screens > 1200px
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

    const randomX = Math.random() * (container.clientWidth - clonedCloud.clientWidth);
    const randomY = Math.random() * (container.clientHeight - clonedCloud.clientHeight);

    clonedCloud.style.left = randomX + "px";
    clonedCloud.style.top = randomY - 100 + "px";

    const randomScaleX = 0.5 + Math.random();

    clonedCloud.style.transform = `scale(${randomScaleX})`;

    container.appendChild(clonedCloud);
  }
};

duplicateClouds();

// Generate Stars
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.width = getRandomNumber(1, 3) + "px";
  star.style.height = star.style.width;
  star.style.left = getRandomNumber(0, 100) + "vw";
  star.style.top = getRandomNumber(0, 100) + "vh";
  return star;
}

function addStarsToContainer(container, numStars) {
  for (let i = 0; i < numStars; i++) {
    const star = createStar();
    container.appendChild(star);
  }
}

const starsContainer = document.getElementById("star-container");
addStarsToContainer(container, 800);
