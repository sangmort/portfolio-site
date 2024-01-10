window.addEventListener("load", function () {
    console.log("Testing 123");
    let openModalButton = document.getElementById("openModalButton");
    let modalContainer = document.getElementById("modalContainer");
    let closeModalButton = document.getElementById("closeModalButton");
    let overlay = document.getElementById("overlay");

    function toggleModal(display) {
        modalContainer.style.display = display ? "block" : "none";
        overlay.style.display = display ? "block" : "none";
    }

    function closeModal() {
        toggleModal(false);
    }

    openModalButton.addEventListener("click", () => toggleModal(true));
    closeModalButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    function generateTableOfContents() {
        let headings = Array.from(document.querySelectorAll("h2[id], h3[id], h4[id], h5[id], h6[id]"));

        function createTableOfContents(headings) {
            let tableOfContents = document.createElement("ul");
            tableOfContents.classList.add("tableOfContentsNavbar");
            let currentTableOfContents = tableOfContents;
            let previousLevel = 2;

            headings.forEach((heading) => {
                let level = parseInt(heading.tagName[1]);

                if (level > previousLevel) {
                    currentTableOfContents = (function createSubMenu(parentTableOfContents) {
                        let subMenu = document.createElement("ul");
                        subMenu.classList.add(
                            parentTableOfContents.classList.contains("tableOfContentsNavbar") ? "sub-menu" : "nested-sub-menu"
                        );
                        parentTableOfContents.lastElementChild.appendChild(subMenu);
                        return subMenu;
                    })(currentTableOfContents);
                } else if (level < previousLevel) {
                    currentTableOfContents = (function getParentTableOfContents(currentTableOfContents, difference) {
                        let parentTableOfContents = currentTableOfContents.parentElement.parentElement;
                        for (let i = 1; i < difference; i++) {
                            parentTableOfContents = parentTableOfContents.parentElement.parentElement;
                        }
                        return parentTableOfContents;
                    })(currentTableOfContents, previousLevel - level);
                }

                let listItem = (function createNavItem(heading) {
                    let listItem = document.createElement("li");
                    listItem.classList.add("tableOfContentsNavItem");
                    let link = (function createNavLink(heading) {
                        let link = document.createElement("a");
                        link.classList.add("tableOfContentsNavLink");
                        link.textContent = heading.textContent;
                        link.href = `#${heading.id}`;
                        link.addEventListener("click", closeModal);
                        return link;
                    })(heading);
                    listItem.appendChild(link);
                    return listItem;
                })(heading);

                currentTableOfContents.appendChild(listItem);
                previousLevel = level;
            });

            return tableOfContents;
        }

        let tableOfContentsContainer = document.getElementById("tableOfContentsContainer");
        tableOfContentsContainer.appendChild(createTableOfContents(headings));
    }

    // Delay the execution of generateTableOfContents by a small interval to ensure that the DOM is fully loaded.
    setTimeout(generateTableOfContents, 100);
});
