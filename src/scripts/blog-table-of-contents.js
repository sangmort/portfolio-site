// Function to create and append the table of contents to an existing div
function createTableOfContents() {
  // Extract page headings from ID
  const headingsWithIDs = Array.from(document.querySelectorAll("h2[id], h3[id], h4[id], h5[id], h6[id]"));
  const navigationList = createNavigationList(headingsWithIDs);

  // Get the existing div with the id "tableOfContentsContainer"
  const tableOfContentsContainer = document.getElementById("tableOfContentsContainer");

  // Append the navigation list to the container
  tableOfContentsContainer.appendChild(navigationList);
}

// Function to create navigation list from headings with IDs
function createNavigationList(headingsArray) {
  // Create a parent navbar <ul> for the generated heading links
  const navigationList = document.createElement("ul");
  navigationList.classList.add("tableOfContentsNavbar");

  let currentHeadingList = navigationList;
  let previousHeadingLevel = 2;

  // If the current heading has a higher level than the previous heading, create a new submenu list
  headingsArray.forEach((heading) => {
    const currentHeadingLevel = parseInt(heading.tagName[1]);
    if (currentHeadingLevel > previousHeadingLevel) {
      currentHeadingList = createSubmenuList(currentHeadingList);

      // If the current heading level is less than the previous heading level, go up the parent list to the correct level
    } else if (currentHeadingLevel < previousHeadingLevel) {
      currentHeadingList = navigateToParentList(currentHeadingList, previousHeadingLevel - currentHeadingLevel);
    }

    const navItem = createNavItem(heading);
    currentHeadingList.appendChild(navItem);

    // Update the previous level to the current level for the next iteration
    previousHeadingLevel = currentHeadingLevel;
  });

  return navigationList;
}

// Function to create a new <li> for the heading & Add link to it
function createNavItem(heading) {
  const navItem = document.createElement("li");
  navItem.classList.add("tableOfContentsNavItem");

  const navLink = createNavLink(heading);
  navItem.appendChild(navLink);

  return navItem;
}

// Function to create a new link anchor text & href for the heading
function createNavLink(heading) {
  const navLink = document.createElement("a");
  navLink.classList.add("tableOfContentsNavLink");
  navLink.textContent = heading.textContent;
  navLink.href = `#${heading.id}`;

  // Add event listener to close modal when link is clicked
  navLink.addEventListener("click", closeModalOnLinkClick);

  return navLink;
}

// Function to add the <li> containing the link to the current <ul>
function createSubmenuList(currentHeadingList) {
  const submenuList = document.createElement("ul");
  if (currentHeadingList.classList.contains("tableOfContentsNavbar")) {
    submenuList.classList.add("sub-menu");
  } else {
    submenuList.classList.add("nested-sub-menu");
  }
  currentHeadingList.lastElementChild.appendChild(submenuList);

  return submenuList;
}

// Function to navigate to the parent list based on the heading level difference
function navigateToParentList(currentHeadingList, headingLevelDifference) {
  let parentList = currentHeadingList.parentElement.parentElement;
  for (let i = 1; i < headingLevelDifference; i++) {
    parentList = parentList.parentElement.parentElement;
  }

  return parentList;
}

createTableOfContents();

// Buttons & Overlay Variables
const openModalButton = document.getElementById("openModalButton");
const modalContainer = document.getElementById("modalContainer");
const closeModalButton = document.getElementById("closeModalButton");
const overlay = document.getElementById("overlay");

openModalButton.addEventListener("click", () => {
  modalContainer.style.display = "block";
  overlay.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
  overlay.style.display = "none";
});

// Close modal when link inside modal is clicked
function closeModalOnLinkClick() {
  modalContainer.style.display = "none";
  overlay.style.display = "none";
}

// Close modal when clicking outside modal / on overlay
overlay.addEventListener("click", () => {
  modalContainer.style.display = "none";
  overlay.style.display = "none";
});
