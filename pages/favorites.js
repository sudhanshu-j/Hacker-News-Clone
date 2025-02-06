// Importing utility functions and components
import view from "../utils/view.js"; // Utility to manage the view content.
import checkFavorite from "../utils/checkFavorite.js"; // Function to check if a story is a favorite.
import store from "../store.js"; // The application's state management store.
import Story from "../components/Story.js"; // Component to render a single story.

// Main function to handle the rendering of the favorites page.
export default function Favorites() {
  // Retrieve the current favorites from the store's state.
  const { favorites } = store.getState();

  // Check if there are any favorites to display.
  const hasFavorites = favorites.length > 0;

  // Dynamically generate the HTML content for the favorites page.
  view.innerHTML = `<div>
    ${
      // If there are favorites, map over them and render each one with the Story component.
      hasFavorites
        ? favorites
            .map((story) =>
              Story({
                ...story, // Spread the story object to pass all its properties.
                isFavorite: checkFavorite(favorites, story), // Check if the story is marked as a favorite.
              })
            )
            .join("") // Join all the rendered story HTML strings into one string.
        : "Add some favorites!" // If no favorites exist, display this message.
    }
  </div>`;

  // Attach event listeners to all elements with the "favorite" class (buttons).
  document.querySelectorAll(".favorite").forEach((favoriteButton) => {
    favoriteButton.addEventListener("click", function () {
      // Retrieve the story object associated with this button from the data attribute.
      const story = JSON.parse(this.dataset.story);

      // Check if the story is currently a favorite.
      const isFavorited = checkFavorite(favorites, story);

      // Dispatch an action to add or remove the story from favorites.
      store.dispatch({
        type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", // Toggle action type based on current favorite status.
        payload: { favorite: story }, // The payload is the story object being added/removed.
      });

      // Re-render the favorites page to reflect the updated state.
      Favorites();
    });
  });
}
