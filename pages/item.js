// Importing necessary components and utilities
import Story from "../components/Story.js"; // Component to render the story details.
import Comment from "../components/Comment.js"; // Component to render each comment.
import view from "../utils/view.js"; // Utility to manage the content display.
import baseUrl from "../utils/baseUrl.js"; // Base URL for API requests.

export default async function Item() {
  // Initializing variables to track story data, comments, and errors.
  let story = null; // Holds the story data.
  let hasComments = false; // Flag to check if the story has comments.
  let hasError = false; // Flag to track if there's an error during data fetching.

  // Try-catch block to handle potential errors when fetching story data.
  try {
    // Fetch the story from the API.
    story = await getStory();
    // Check if the story has comments by evaluating the length of the comments array.
    hasComments = story.comments.length > 0;
  } catch (error) {
    // If an error occurs during data fetching, set the error flag to true and log the error.
    hasError = true;
    console.error(error);
  }

  // If an error occurred while fetching the story, display an error message.
  if (hasError) {
    view.innerHTML = `<div class="error">Error fetching story</div>`;
    return; // Stop further execution if there's an error.
  }

  // Dynamically generate the HTML content for the story and its comments.
  view.innerHTML = `
  <div>
    ${Story(story)}  <!-- Render the main story using the Story component. -->
  </div>
  <hr/>
  ${
    // Conditionally render the comments if there are any. Otherwise, display "No comments".
    hasComments
      ? story.comments.map((comment) => Comment(comment)).join("") // Map over comments and render each using the Comment component.
      : "No comments" // Display a message if there are no comments.
  }
  `;
}

// Function to fetch the story data from the API using the storyId from the URL.
async function getStory() {
  // Extract the story ID from the URL using the hash fragment (e.g., #/item?id=123).
  const storyId = window.location.hash.split("?id=")[1];
  // Make a fetch request to get the story data from the API.
  const response = await fetch(`${baseUrl}/item/${storyId}`);
  // Parse the JSON response and return the story data.
  const story = await response.json();
  return story;
}
