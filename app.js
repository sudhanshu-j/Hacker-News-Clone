// Importing the RouterHandler class from the router.js file
import RouterHandler from "./router.js";

// Adding an event listener for when the hash in the URL changes (i.e., when the user navigates between routes)
window.onhashchange = () => {
  setActiveLink(); // Calls the setActiveLink function whenever the URL hash changes
};

// Function to update the active state of navigation links based on the current URL hash
function setActiveLink() {
  // Select all elements with the class "header-link" (links in the header)
  const links = document.querySelectorAll(".header-link");

  // Iterate through each link and check if the link's href matches the current URL hash
  links.forEach((link) => {
    // Get the href attribute of the link (which contains the route)
    const linkPath = link.getAttribute("href");
    // Get the current URL hash (i.e., the part of the URL after the `#`)
    const currentPath = window.location.hash;

    // If the current hash matches the link's path, add the "active" class to the link
    if (currentPath === linkPath) {
      link.classList.add("active");
    } else {
      // If the current hash does not match, remove the "active" class from the link
      link.classList.remove("active");
    }
  });
}

// App class that serves as the main entry point for the application
class App {
  constructor() {
    // Instantiating the RouterHandler to set up routing in the app
    new RouterHandler();
  }
}

// Creating a new instance of the App class, initializing the app
new App();
