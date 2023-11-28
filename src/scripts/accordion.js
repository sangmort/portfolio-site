// A11y friendly collapsable/accordion, triggers based off accordion ID
document.querySelectorAll(".accordion").forEach((accordion) => {
  const accordionButton = accordion.querySelector(".accordion-button");
  const accordionContent = accordion.querySelector(`#${accordionButton.getAttribute("aria-controls")}`);

  // Check if accordion is initially expanded and apply rotation class
  const isExpanded = accordionButton.getAttribute("aria-expanded") === "true";
  accordionButton.classList.toggle("rotate-icon", isExpanded);

  // Click and keyboard event listeners to accordion button
  accordionButton.addEventListener("click", toggleAccordion);
  accordionButton.addEventListener("keydown", (event) => {
    // Toggle accordion on 'Enter' or 'Space' key press
    if (event.key === "Enter" || event.key === " ") {
      toggleAccordion(event);
    }
  });

  // Toggle accordion visibility and rotation class
  function toggleAccordion() {
    const isExpanded = accordionButton.getAttribute("aria-expanded") === "true";

    // Toggle visibility AND display to prevent other elements from shifting when accordion expands
    accordionContent.style.visibility = isExpanded ? "hidden" : "visible";
    accordionContent.style.display = isExpanded ? "none" : "block";
    accordionButton.setAttribute("aria-expanded", !isExpanded);

    accordionButton.classList.toggle("rotate-icon", !isExpanded);
  }
});
