// Export a default function to check if a story is in the list of favorites
export default function checkFavorite(favorites, story) {
  // The 'some' method checks if any element in the 'favorites' array has an 'id' that matches the 'id' of the 'story' object
  return favorites.some((favorite) => favorite.id === story.id);
  // If there is a match, the function will return true, indicating the story is a favorite
  // If there is no match, it will return false, indicating the story is not a favorite
}
