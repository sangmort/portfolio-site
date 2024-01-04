document.addEventListener("DOMContentLoaded", function () {
  createTableOfContents();
});

const openModalButton = document.getElementById("openModalButton");
const modalContainer = document.getElementById("modalContainer");
const closeModalButton = document.getElementById("closeModalButton");
const overlay = document.getElementById("overlay");

openModalButton.addEventListener("click", () => toggleModal(true));
closeModalButton.addEventListener("click", () => toggleModal(false));
overlay.addEventListener("click", () => toggleModal(false));

function toggleModal(show) {
  modalContainer.style.display = show ? "block" : "none";
  overlay.style.display = show ? "block" : "none";
}

function createTableOfContents() {
  const headingsWithIDs = Array.from(document.querySelectorAll("h2[id], h3[id], h4[id], h5[id], h6[id]"));
  const navigationList = createNavigationList(headingsWithIDs);
  const tableOfContentsContainer = document.getElementById("tableOfContentsContainer");
  tableOfContentsContainer.appendChild(navigationList);
}

function createNavigationList(headingsArray) {
  const navigationList = document.createElement("ul");
  navigationList.classList.add("tableOfContentsNavbar");

  let currentHeadingList = navigationList;
  let previousHeadingLevel = 2;

  headingsArray.forEach((heading) => {
    const currentHeadingLevel = parseInt(heading.tagName[1]);
    if (currentHeadingLevel > previousHeadingLevel) {
      currentHeadingList = createSubmenuList(currentHeadingList);
    } else if (currentHeadingLevel < previousHeadingLevel) {
      currentHeadingList = navigateToParentList(currentHeadingList, previousHeadingLevel - currentHeadingLevel);
    }

    const navItem = createNavItem(heading);
    currentHeadingList.appendChild(navItem);

    previousHeadingLevel = currentHeadingLevel;
  });

  return navigationList;
}

function createNavItem(heading) {
  const navItem = document.createElement("li");
  navItem.classList.add("tableOfContentsNavItem");
  const navLink = createNavLink(heading);
  navItem.appendChild(navLink);
  return navItem;
}

function createNavLink(heading) {
  const navLink = document.createElement("a");
  navLink.classList.add("tableOfContentsNavLink");
  navLink.textContent = heading.textContent;
  navLink.href = `#${heading.id}`;
  navLink.addEventListener("click", closeModalOnLinkClick);
  return navLink;
}

function createSubmenuList(currentHeadingList) {
  const submenuList = document.createElement("ul");
  submenuList.classList.add(
    currentHeadingList.classList.contains("tableOfContentsNavbar") ? "sub-menu" : "nested-sub-menu"
  );
  currentHeadingList.lastElementChild.appendChild(submenuList);
  return submenuList;
}

function navigateToParentList(currentHeadingList, headingLevelDifference) {
  let parentList = currentHeadingList.parentElement.parentElement;
  for (let i = 1; i < headingLevelDifference; i++) {
    parentList = parentList.parentElement.parentElement;
  }
  return parentList;
}

function closeModalOnLinkClick() {
  toggleModal(false);
}
