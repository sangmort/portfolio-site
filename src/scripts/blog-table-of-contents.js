// Creates a custom HTML element without using shadow DOM
class BlogTableOfContents extends HTMLElement {
  constructor() {
    super();
    this.appendChild(document.createElement("tableOfContentsNav"));
  }

  // Add navigation list directly to the container
  connectedCallback() {
    //extract page headings from ID
    const headingsWithIDs = Array.from(document.querySelectorAll("h2[id], h3[id], h4[id], h5[id], h6[id]"));
    const navigationList = this.createNavigationList(headingsWithIDs);
    this.querySelector("tableOfContentsNav").appendChild(navigationList);
  }

  // Create navigation list from headings with IDs
  createNavigationList(headingsArray) {
    // Create a parent navbar <ul> for the generated heading links
    const navigationList = document.createElement("ul");
    navigationList.classList.add("tableOfContentsNavbar");

    let currentHeadingList = navigationList;
    let previousHeadingLevel = 2;

    // If current heading has a higher level than previous heading, create a new submenu list
    headingsArray.forEach((heading) => {
      const currentHeadingLevel = parseInt(heading.tagName[1]);
      if (currentHeadingLevel > previousHeadingLevel) {
        currentHeadingList = this.createSubmenuList(currentHeadingList);

        // If the current heading level is less than the previous heading level, go up the parent list to the correct level
      } else if (currentHeadingLevel < previousHeadingLevel) {
        currentHeadingList = this.navigateToParentList(currentHeadingList, previousHeadingLevel - currentHeadingLevel);
      }

      const navItem = this.createNavItem(heading);
      currentHeadingList.appendChild(navItem);

      // Update the previous level to the current level for the next iteration
      previousHeadingLevel = currentHeadingLevel;
    });

    return navigationList;
  }

  // Create new <li> for the heading & Add link to it
  createNavItem(heading) {
    const navItem = document.createElement("li");
    navItem.classList.add("tableOfContentsNavItem");

    const navLink = this.createNavLink(heading);
    navItem.appendChild(navLink);

    return navItem;
  }

  // Create a new link anchor text & href for the heading
  createNavLink(heading) {
    const navLink = document.createElement("a");
    navLink.classList.add("tableOfContentsNavLink");
    navLink.textContent = heading.textContent;
    navLink.href = `#${heading.id}`;

    // Add event listener to close modal when link is clicked
    navLink.addEventListener("click", closeModalOnLinkClick);

    return navLink;
  }

  // Add the <li> containing the link to the current <ul>
  createSubmenuList(currentHeadingList) {
    const submenuList = document.createElement("ul");
    if (currentHeadingList.classList.contains("tableOfContentsNavbar")) {
      submenuList.classList.add("sub-menu");
    } else {
      submenuList.classList.add("nested-sub-menu");
    }
    currentHeadingList.lastElementChild.appendChild(submenuList);

    return submenuList;
  }

  // Navigate to the parent list based on the heading level difference
  navigateToParentList(currentHeadingList, headingLevelDifference) {
    let parentList = currentHeadingList.parentElement.parentElement;
    for (let i = 1; i < headingLevelDifference; i++) {
      parentList = parentList.parentElement.parentElement;
    }

    return parentList;
  }
}

// Make this component usable with <blog-table-of-contents></blog-table-of-contents>
customElements.define("blog-table-of-contents", BlogTableOfContents);

// Button to open modal
const openModalButton = document.getElementById("openModalButton");
// Modal container
const modalContainer = document.getElementById("modalContainer");
// Button to close modal
const closeModalButton = document.getElementById("closeModalButton");

openModalButton.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

// Function to close modal when link inside modal is clicked
function closeModalOnLinkClick() {
  modalContainer.style.display = "none";
}
