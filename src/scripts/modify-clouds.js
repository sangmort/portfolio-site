const numCopies = 15;
const container = document.getElementById("cloud-container");
const originalCloud = document.querySelector(".cloud1").cloneNode(true);

const duplicateClouds = () => {
  for (let i = 0; i < numCopies; i++) {
    const clonedCloud = originalCloud.cloneNode(true);
    clonedCloud.style.position = "absolute";

    const randomX = Math.random() * (container.clientWidth - clonedCloud.clientWidth);
    const randomY = Math.random() * (container.clientHeight - clonedCloud.clientHeight);

    clonedCloud.style.left = randomX + "px";
    clonedCloud.style.top = randomY + "px";

    const randomScaleX = 0.5 + Math.random();
    const randomScaleY = 0.5 + Math.random();

    clonedCloud.style.transform = `scale(${randomScaleX}, ${randomScaleY})`;

    container.appendChild(clonedCloud);
  }
};

duplicateClouds();
