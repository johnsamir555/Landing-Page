/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
      // Get all sections
const sections = document.querySelectorAll("section"),
    // Get the ul list as navbarList
  navbarList = document.getElementById("navbar__list"),
  // Get all the anchors
  anchors = document.querySelectorAll("a"),
  // get topbutton which go to the to top of the page
  topButton = document.querySelector("button#top__button");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build navbar
const buildNavbar = () => {
  // create fragement to contains all ul elemens once [Good solution for performance Using Virtual DOM]
  let fragment = document.createDocumentFragment();
    // Loop over sections and every section has been pass as an argument in the inner arrow funtion
  sections.forEach((section) => {
    // create li element for every exist section
    let li = document.createElement("li"),
    // create a element for every exist section
      anchor = document.createElement("a");
      // set anchor href attribute to section Id
    anchor.href = `#${section.id}`;
    // set anchor textContent to section data-nav
    anchor.textContent = section.getAttribute("data-nav");
    // Add "menu__link" class to every anchor to apply styling
    anchor.classList.add("menu__link");
    // Check if section contains "active" class or Not
    if (section.classList.contains("active")) {
      // Add "active" class to anchor to apply styling for first anchor
      anchor.classList.add("active");
    }
    // Add "click" event to the anchor & callback function takes "event" as an argument
    anchor.addEventListener("click", (event) => {
      // prevent the default acts from this event 
      event.preventDefault();
      // Scroll the current section in the loop to the viewport
      section.scrollIntoView({
        // set scroll behavior to smooth scroll
        behavior: "smooth",
      });
      // Loop over all the anchors and remove "active" class from all anchors
      anchors.forEach((anchor) => anchor.classList.remove("active"));
      // Add "active" class to the matched anchor to current section id
      anchor.classList.add("active");
      // Loop over all the sections and remove "active" class from all sections
      sections.forEach((section) => section.classList.remove("active"));
      // Add "active" class to current section in the loop
      section.classList.add("active");
    });
    // Append anchor as chilid element in li element according in the loop
    li.appendChild(anchor);
    // Append li as chilid element in fragment element in the loop
    fragment.appendChild(li);
  });
    // Append fragment as chilid element in navbarList element in the loop
  navbarList.appendChild(fragment);
};

/**
 * End Main Functions
 * Begin Events
 *
 */
// call the buildNavbar function when loading the content of the page
window.addEventListener("load", buildNavbar);
// Call a function that takes no argument when the user "scroll" the window element
window.addEventListener("scroll", () => {
  // Loop over sections and every section has been pass as an argument in the inner arrow funtion
  sections.forEach((section) => {
  // Get the dimensions of top ,left ,right , bottom to the viewport  
    let sectionCoordinates = section.getBoundingClientRect(),
    // Get all anchors exist in the page
      anchors = navbarList.querySelectorAll("li a"),
      // get matched  anchor to current section id in the loop 
      anchor = document.querySelector(`a[href="#${section.id}"]`);

      // check if section in viewport or not
      // To treat section as in viewport section
      // Must match all the following conditions 
    if (
      // section top  edge must be equal to or greater than 0 And
      // To make sure its top in the viewport
      sectionCoordinates.top >= 0 &&
      // section top edge must be equal to or less than 100px [A suitable size for mobile devices]
      sectionCoordinates.top <= 100 &&
      // section left  edge must be equal to or greater than 0 and
      // To make sure its left in the viewport
      sectionCoordinates.left >= 0 &&
      // section right  edge must be equal to or less than the height of ontent area
      // To make sure its right in the viewport
      sectionCoordinates.right <= window.innerWidth
    ) {
      // Loop over anchors and remove "active" from all anchors
      anchors.forEach((anchor) => anchor.classList.remove("active"));
      // Add "active" class to the matched anchor to section id of the section in viewport
      anchor.classList.add("active");
      //  Loop over sections and remove "active" from all sections
      sections.forEach((section) => section.classList.remove("active"));
      // Add "active" class to the section in viewport
      section.classList.add("active");
    }
    // Show or Hide topButton using if condition
    if (
      // Check if shown part of document equal to or greater than 30px from viewport top edge

      // For Safari
      document.body.scrollTop >= 30 ||    
      // For chrome , Firefox , Internet Explorer and Opera
      document.documentElement.scrollTop >= 30
    ) {
      // Show topButton if the above condition return true 
      topButton.style.display = "block";
    } else {
      // Hide topButton if the above condition return false 
     topButton.style.display = "none";
    }  
  });
});
// Add "click" event with callback funtion with no arguments to topButton element
topButton.addEventListener("click", () => {
  // When topButton clicked the document go to the top of the viewport
  
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
});

