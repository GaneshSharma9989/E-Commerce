document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    const readMoreButton = document.querySelector(".news-item a.btn");
  
    // Check if button exists to avoid errors
    if (readMoreButton) {
      readMoreButton.addEventListener("click", function(event) {
        // Prevent default button behavior (likely navigating to a link)
        event.preventDefault();
  
        // Get the target section ID (assuming it's the "read-more" section)
        const targetSectionId = this.getAttribute("href").slice(1); // Remove leading "#"
  
        // Get the target section element
        const targetSection = document.getElementById(targetSectionId);
  
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      });
    } else {
      console.warn("Read More button not found. Please check the HTML structure.");
    }
  });