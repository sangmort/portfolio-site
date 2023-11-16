// A11y friendly collapsable/accordion, triggers based off accordion ID 
document.querySelectorAll('.accordion').forEach((accordion) => {
    const accordionButton = accordion.querySelector('.accordion-button');
    const accordionContent = accordion.querySelector(`#${accordionButton.getAttribute('aria-controls')}`);
  
    // Checks accordions expanded or closed initial state and adds CSS rotation class
    const isExpanded = accordionButton.getAttribute('aria-expanded') === 'true';
    accordionButton.classList.toggle('rotate-icon', isExpanded);
  
    accordionButton.addEventListener('click', toggleAccordion);
    accordionButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        toggleAccordion(event);
      }
    });
  
    function toggleAccordion() {
      const isExpanded = accordionButton.getAttribute('aria-expanded') === 'true';
      accordionContent.style.display = isExpanded ? 'none' : 'block';
      accordionButton.setAttribute('aria-expanded', !isExpanded);
  
      // Toggle the rotation class
      accordionButton.classList.toggle('rotate-icon', !isExpanded);
    }
  });
  
  