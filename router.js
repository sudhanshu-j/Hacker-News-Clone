// Importing page components for different routes
import Stories from "./pages/stories.js"; // The Stories page, likely showing a list of stories
import Item from "./pages/item.js"; // The Item page, likely displaying a single story/item
import Favorites from "./pages/favorites.js"; // The Favorites page, likely showing a list of the user's favorite stories

// Initializing the Navigo router (a simple routing library) with settings
const router = new Navigo(null, true, "#");
// - The first parameter is the base path, set to null since no base path is specified.
// - The second parameter, `true`, enables hash-based routing (uses `#` in URLs).
// - The third parameter `"#"` specifies the hash character used to resolve routes.

export default class RouterHandler {
  constructor() {
    this.createRoutes(); // Calls the method to set up the routes when the class is instantiated
  }

  // Method to create and define the application routes
  createRoutes() {
    // Defining an array of route objects with path and corresponding page to render
    const routes = [
      { path: "/", page: Stories }, // The default route (home) showing Stories
      { path: "/new", page: Stories }, // Route for "/new", also showing Stories
      { path: "/ask", page: Stories }, // Route for "/ask", showing Stories
      { path: "/show", page: Stories }, // Route for "/show", showing Stories
      { path: "/item", page: Item }, // Route for "/item", showing a specific Item (story)
      { path: "/favorites", page: Favorites }, // Route for "/favorites", showing a list of favorite stories
    ];

    // Iterating over each route and defining a handler for it
    routes.forEach(({ path, page }) => {
      router
        // For each route, using the `on()` method to match the path
        .on(path, () => {
          // When the path matches, call the corresponding page function, passing the path as an argument
          page(path);
        })
        // Resolving the route after setting the handler (this processes the routes)
        .resolve();
    });
  }
}
