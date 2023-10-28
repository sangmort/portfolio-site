const numCopies = 60;
const container = document.getElementById("cloud-container");
const originalCloud1 = document.querySelector(".cloud1").cloneNode(true);
const originalCloud2 = document.querySelector(".cloud2").cloneNode(true);
const originalCloud3 = document.querySelector(".cloud3").cloneNode(true);

const duplicateClouds = () => {
  for (let i = 0; i < numCopies; i++) {
    let clonedCloud;
    const randomType = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

    if (randomType === 0) {
      clonedCloud = originalCloud1.cloneNode(true);
    } else if (randomType === 1) {
      clonedCloud = originalCloud2.cloneNode(true);
    } else {
      clonedCloud = originalCloud3.cloneNode(true);
    }

    clonedCloud.style.position = "absolute";

    const randomX = Math.random() * (container.clientWidth - clonedCloud.clientWidth);
    const randomY = Math.random() * (container.clientHeight - clonedCloud.clientHeight);

    clonedCloud.style.left = randomX + "px";
    clonedCloud.style.top = randomY + "px";

    const randomScaleX = 0.5 + Math.random();

    clonedCloud.style.transform = `scale(${randomScaleX})`;

    container.appendChild(clonedCloud);
  }
};

duplicateClouds();
