# 🚀 Hacker News Clone - A Web App to Explore Your Favorite Stories

Welcome to the **Hacker News Clone** web application! 🎉 This is a simplified, yet feature-rich version of the popular **Hacker News** website, built using **Vanilla JavaScript**, **CSS**, and **Navigo** for smooth client-side routing. This app lets you explore various sections of Hacker News like **Top Stories**, **New Stories**, **Ask Stories**, **Show Stories**, and **Favorites**. Plus, you can **mark stories as your favorites** and view them in a dedicated section. 🤩

This project is perfect for anyone looking to learn more about **routing**, **state management**, and **dynamic content loading** in web development. 🌐

## 🌟 Features & Highlights 🎯

✨ **Key Features of the App**:

- **Home Page**: Displays the **Top Stories** fetched from the Hacker News API. 🏠

- **New Stories**: Explore the most recent stories on Hacker News. 📅

- **Ask Stories**: Dive into stories tagged as "Ask" (user-submitted questions). ❓

- **Show Stories**: View stories tagged as "Show" (news about projects, startups, etc.). 🚀

- **Favorites**: Mark your favorite stories ❤️ and revisit them in the **Favorites** section.

- **Item Detail**: Click any story to view detailed information, such as points, comments, and URLs. 📝

- **Responsive Design**: Fully responsive design that adapts to different screen sizes (perfect for mobile and desktop). 📱💻

- **Navigation**: Hash-based navigation for quick and seamless transitions between sections (Top, New, Ask, Show, Favorites). 🔄

- **Active Link Highlighting**: The active navigation link is dynamically highlighted, making it easy to see where you are within the app. 📍

- **No Backend**: Data is fetched from the public **Hacker News API**, eliminating the need for a server-side backend. 🌐

### 💥 **Live Demo**:

Check out the live version of this project and explore all its features in real-time:

[**Live Demo - Hacker News Clone**](https://your-live-demo-link.com) 🌐

## ⚙️ Technologies Used

🛠️ **This project uses the following technologies:**

- **HTML5**: For building the app's basic structure and layout.

- **CSS3**: For styling and layout, ensuring the app looks modern and clean.

- **JavaScript**:
  
  - **Vanilla JavaScript**: Used for dynamic content, DOM manipulation, and handling state changes.
  
  - **Navigo**: A lightweight router that enables hash-based navigation without page reloads.

- **Hacker News API**: All stories and content are fetched from the [Hacker News API](https://node-hnapi.herokuapp.com), providing up-to-date data for the app.

## 🔄 How It Works

### 🌍 Routing

The app uses **hash-based routing** with **Navigo** to change between pages without requiring a full page reload. Each page (such as **Top Stories**, **New Stories**, etc.) is managed by a JavaScript function that loads content from the API and updates the UI.

For example:

- `#/top` loads the **Top Stories** section.

- `#/new` loads the **New Stories** section.

- `#/favorites` displays all your **Favorite Stories**.

### 🗃️ State Management

The app uses **Vanilla JavaScript** for handling state:

- **Favorites**: Users can mark stories as favorites ❤️, which are stored locally in the app's state.

- The state is updated each time a user adds or removes a favorite, ensuring the UI reflects the changes in real-time.

## 📂 Project Structure

Here's a look at the project's structure:

```bash
/hacker-news-clone
│
├── index.html        # Main HTML file with the structure and resources
├── style.css         # Styling of the app with a modern, clean design
├── app.js            # Main JS file for initializing the router and app logic
├── baseUrl.js        # Base URL for the Hacker News API
├── checkFavorite.js  # Function to check if a story is marked as a favorite
├── router.js         # Handles routing logic between pages
├── store.js          # Manages the state (favorites list)
├── view.js           # Holds the reference to the router outlet
├── story.js          # Handles rendering of individual stories, details, and favorites
├── comment.js        # Handles rendering of individual comments and nested comments
```

### Key Files:

- **`index.html`**: The main entry point of the app. All stylesheets, scripts, and images are linked here.

- **`style.css`**: Contains all the styles for the app, including layout, typography, and responsive design.

- **`app.js`**: Contains the logic to initialize the app, including creating routes and managing active links.

- **`router.js`**: Responsible for setting up routes for the app (e.g., `/top`, `/new`, `/favorites`) and managing the navigation logic.

- **`store.js`**: Manages the application's state, specifically the list of favorite stories.

- **`checkFavorite.js`**: A helper function that checks whether a story is already in the favorites list.

- **`baseUrl.js`**: Stores the base URL for the Hacker News API, simplifying API requests.

- **`story.js`**: Handles rendering individual stories, displaying the title, user, points, comments, and the ability to mark stories as favorites.

```javascript
export default function Story(story) {
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
```

- **`comment.js`**: This file handles rendering individual comments and their nested replies. It displays the commenter's name, time, and content, with recursive rendering for nested comments.

```javascript
export default function Comment(comment) {
  const hasNestedComments = comment.comments.length > 0;

  return `
    <div class="nested-comments-${comment.level}">
      <p class="comment-header">
        ${comment.user} | ${comment.time_ago}
      </p>
      ${comment.content}
      ${
        hasNestedComments
          ? comment.comments.map((comment) => Comment(comment)).join("")
          : ""
      }
    </div>
  `;
}
```

## Installation 🔧

### How to Set Up the Project Locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sudhanshu-j/hacker-news-clone.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd hacker-news-clone
   ```

3. **Open the `index.html` file in your browser**:

   - You can open the file directly in any browser.
   - Alternatively, use an editor like VSCode and run it using the "Live Server" extension for a faster experience with auto-refresh on changes.

4. **Enjoy**: The app should be up and running! You can explore different sections and start marking your favorite stories. 🎉

## Usage 🖥️

- Features Walkthrough:

  1. **Home Page**:

     - The app initially loads the Top Stories section, displaying a list of stories fetched from the Hacker News API.

  2. **Navigating Between Sections**:

     - Click the navigation links (Top, New, Ask, Show, Favorites) to view different sets of stories. The active link will be highlighted.

  3. **Favorite Stories**:

     - You can mark stories as your favorites by clicking the favorite icon (❤️) next to a story. This will add the story to your Favorites list.

     - You can view all your favorite stories in the Favorites section.

  4. **Detailed Story View**:

     - Click on any story to view additional details such as the URL, points, comments, and more.

  5. **Active Link Highlighting**:

     - The navigation links will automatically highlight when you visit different sections of the app, making it clear where you are.

## Contributing 🤝

- We appreciate contributions to this project! Here's how you can help:

  1. **Fork the repository to your GitHub account**.

  2. **Clone your fork locally**:

  ```bash
  git clone https://github.com/sudhanshu-j/hacker-news-clone.git
  ```

  3. **Create a new branch for your feature or bug fix**:

  ```bash
  git checkout -b feature-name
  ```

  4. **Make your changes, write tests if applicable, and commit them**:

  ```bash
  git commit -am 'Add feature'
  ```

  5. **Push your changes to your forked repository**:

  ```bash
  git push origin feature-name
  ```

  6. **Create a pull request on GitHub to merge your changes into the main repository**.

### Code Style:

    - Use 2 spaces for indentation.

    - Write clear commit messages that explain the changes you’ve made.

    - Test your code: Make sure everything works correctly before submitting a pull request.

## Acknowledgments 🙏

    - Thanks to the Hacker News API for providing the data that powers this app. 🙌

    - Shoutout to Navigo for making hash-based routing super simple! 💡

    - StackOverflow and the open-source community for helpful discussions and resources. 💬

Thank you for exploring the Hacker News Clone! 🎉 We hope you find it useful and fun to work with. Feel free to fork the repo, contribute, and enhance the project. Happy coding and stay curious! 💻✨
