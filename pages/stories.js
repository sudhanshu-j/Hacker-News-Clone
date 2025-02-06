// Importing necessary components and utilities
import Story from "../components/Story.js"; // Component to render individual story details.
import view from "../utils/view.js"; // Utility to manage the content display in the DOM.
import baseUrl from "../utils/baseUrl.js"; // Base URL for API requests.
import checkFavorite from "../utils/checkFavorite.js"; // Utility function to check if a story is favorited.
import store from "../store.js"; // State management (likely using Redux or similar).

// Exporting the Stories function which fetches and displays a list of stories
export default async function Stories(path) {
  // Getting the list of favorites from the store's state
  const { favorites } = store.getState();
  // Fetching the stories based on the path provided
  const stories = await getStories(path);
  // Checking if there are any stories to display
  const hasStories = stories.length > 0;

  // Dynamically rendering the stories or a message if no stories are available
  view.innerHTML = `<div>
    ${
      hasStories
        ? stories
            .map((story, i) =>
              // Rendering each story using the Story component, passing additional data like index and favorite status
              Story({
                ...story,
                index: i + 1, // Story index, starting from 1
                isFavorite: checkFavorite(favorites, story), // Checking if the story is a favorite
              })
            )
            .join("") // Joining all the story components into one string of HTML
        : "No stories" // If no stories are available, display this message
    }
  </div>`;

  // Adding event listeners to each favorite button to handle the toggle of favorite status
  document.querySelectorAll(".favorite").forEach((favoriteButton) => {
    favoriteButton.addEventListener("click", async function () {
      // Parsing the story data from the button's dataset
      const story = JSON.parse(this.dataset.story);
      // Checking if the story is already favorited
      const isFavorited = checkFavorite(favorites, story);
      // Dispatching an action to either add or remove the story from favorites
      store.dispatch({
        type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", // Toggling the action type based on current status
        payload: { favorite: story },
      });
      // After the state update, re-render the list of stories
      await Stories(path);
    });
  });
}

// Function to fetch stories from the API based on the route path
async function getStories(path) {
  // Checking if the path matches one of the known routes and adjusting accordingly
  const isHomeRoute = path === "/";
  const isNewRoute = path === "/new";
  if (isHomeRoute) {
    path = "/news"; // Home route maps to the news endpoint
  } else if (isNewRoute) {
    path = "/newest"; // New route maps to the newest stories endpoint
  }
  // Making the fetch request to the appropriate API endpoint
  const response = await fetch(`${baseUrl}${path}`);
  // Parsing the response as JSON and returning the list of stories
  const stories = await response.json();
  return stories;
}

// https://node-hnapi.herokuapp.com

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show
