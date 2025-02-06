// Exporting the Comment function as the default export
export default function Comment(comment) {
  // Check if the comment has any nested comments (i.e., replies to this comment)
  const hasNestedComments = comment.comments.length > 0;

  // Returning a string representing the HTML structure for the comment
  return `
    <div class="nested-comments-${comment.level}">

      <p class="comment-header">
        ${comment.user} | ${comment.time_ago}
      </p>
      ${comment.content}
      ${
        hasNestedComments
          ? comment.comments.map((comment) => Comment(comment)).join("") // Recursively call the Comment function for each nested comment
          : "" // If no nested comments, return an empty string
      }
    </div>
  `;
}
