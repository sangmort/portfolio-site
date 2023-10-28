const numCopies = 30;
const container = document.getElementById("cloud-container");
const originalCloud1 = document.querySelector(".cloud1").cloneNode(true);
const originalCloud2 = document.querySelector(".cloud2").cloneNode(true);

const duplicateClouds = () => {
  for (let i = 0; i < numCopies; i++) {
    const clonedCloud = (i % 2 === 0) ? originalCloud1.cloneNode(true) : originalCloud2.cloneNode(true);
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
