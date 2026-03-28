# Mini Message Board

This project is a mini message board developed with Node.js, Express,
and EJS. It was built to practice server-side rendering, POST request
handling, and the MVC architectural pattern.

The focus of this project was to implement fundamental backend concepts such as:

-   **Form Processing:** Handling POST requests to receive and store
    user messages.

-   **MVC Pattern:** Clear separation between routes, controllers, and
    data models.

-   **EJS Rendering:** Using templates and `<%- include() %>` to embed
    the message form directly into the homepage.

-   **Middleware Handling:** Configuring `express.static` to serve CSS
    and image assets (avatars).
    
-   **Error Handling:** Implementation of a custom error class and
    global middleware for 404 fallbacks.

-   **Data Formatting:** Using `toLocaleString` to handle timestamps
    within the view.

## Project Idea

The application allows users to send and view messages in a unified
interface. To test the board's functionality, character names and
messages from the Netflix series Dark were used as placeholder content, ensuring the POST data flow and UI rendering behave correctly upon submission.

## Important Note

This project was created as a learning exercise. Because of that:

-   The visual design is minimalist, utilizing a `#0f172a` and white
    color palette.

-   The project uses an in-memory array (`db.js`) as a temporary
    database.

-   It is intended to be run locally for development and observation of
    routing logic.

## Running the Project

### Clone the repository:

``` bash
git clone <repository-url>
```

### Install dependencies:

``` bash
npm install
```

### Run the server:

``` bash
npm start
```

### Access in your browser:

    http://localhost:3000
