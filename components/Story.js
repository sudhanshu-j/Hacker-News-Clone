// Exporting the Story function as the default export
export default function Story(story) {
  // Returning the HTML structure as a string for displaying a single story
  return `
    <div class="story">
      <div> 
        <span class="gray">${story.index || ""}</span>
        <span class="upvote">▲</span>
        <a href="${story.url}">${story.title}</a>
        <span>(${story.domain})</span>
      </div>
      
      <div>
        <div class="gray">

          ${story.points} points by ${story.user} ${story.time_ago}
          |

          <a href="#/item?id=${story.id}">
            ${story.comments_count} comments
          </a>
          |

          <span class="favorite" data-story='${JSON.stringify(story)}'>

            <img class="heart" src="./Icons/heart.png">
          
            ${story.isFavorite ? "Remove From Favorites" : "Add To Favorites"}
          </span>
        </div>
      </div>
    </div>
  `;
}
