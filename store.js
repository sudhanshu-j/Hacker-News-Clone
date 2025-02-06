// Function to create a basic store with a reducer
function createStore(reducer) {
  // Initialize the state by invoking the reducer with an undefined state and an empty action
  let currentState = reducer(undefined, {});

  // Return an object with two methods: getState and dispatch
  return {
    // Method to get the current state
    getState: () => currentState,

    // Method to dispatch an action and update the state
    dispatch: (action) => {
      // Update the current state by calling the reducer with the current state and the action
      currentState = reducer(currentState, action);
    },
  };
}

// Initial state of the application
const initialState = {
  favorites: [], // 'favorites' will be an array to store favorite items
};

// Reducer function to handle different actions and modify the state
function favoritesReducer(state = initialState, action) {
  // Switch statement to handle different action types
  switch (action.type) {
    case "ADD_FAVORITE": {
      // When the action is "ADD_FAVORITE", add the new favorite to the state
      const addedFavorite = action.payload.favorite;
      const favorites = [...state.favorites, addedFavorite]; // Create a new array with the added favorite
      return { favorites }; // Return the new state with updated favorites
    }

    case "REMOVE_FAVORITE": {
      // When the action is "REMOVE_FAVORITE", remove the specified favorite from the state
      const removedFavorite = action.payload.favorite;
      const favorites = state.favorites.filter(
        (favorite) => favorite.id !== removedFavorite.id // Filter out the favorite with matching id
      );
      return { favorites }; // Return the new state with updated favorites
    }

    // Default case: return the state unchanged if the action is not recognized
    default:
      return state;
  }
}

// Example of an action (commented out)
const action = {
  type: "ADD_FAVORITE",
  payload: { favorite: { title: "story1", id: 1 } },
};

// Create the store with the favoritesReducer
const store = createStore(favoritesReducer);

// Dispatch the action to update the state (commented out)
store.dispatch(action);

// Log the current state to check if the state was updated (commented out)
// console.log(store.getState());

// Export the store so it can be used elsewhere in the application
export default store;
