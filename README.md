# Vanilla JavaScript Projects

Welcome to the **Vanilla JavaScript Projects** repository! This is a collection of small, fun, and interactive projects built using plain JavaScript (Vanilla JS). Each project is designed to help you understand core JavaScript concepts and improve your front-end development skills.

---

## 🎬 Movie Search App

### Overview

The **Movie Search App** is a simple web application that allows users to search for movies using the OMDB API. It displays movie details such as the title, year, runtime, genre, IMDb rating, plot, and more. The app also includes a "Show More" feature to reveal additional details like director, actors, and production information.

### Features

- **Search for Movies**: Enter a movie title to fetch details from the OMDB API.
- **Debounced Input**: The search is debounced to avoid excessive API calls.
- **Responsive Design**: Built with Tailwind CSS for a clean and responsive layout.
- **Dynamic Content**: Movie details are dynamically rendered based on the API response.
- **IMDb Integration**: Click the IMDb logo to view the movie's IMDb page.

### Technologies Used

- **HTML5**: For structuring the web page.
- **Tailwind CSS**: For styling and responsive design.
- **JavaScript (Vanilla JS)**: For dynamic functionality and API interaction.
- **Axios**: For making HTTP requests to the OMDB API.
- **jQuery**: For DOM manipulation and event handling (optional, can be replaced with vanilla JS).

---

## 📝 JS Notes App

### Overview

The **JS Notes App** is a simple note-taking application that allows users to add, view, and delete notes. It also includes a feature to mark notes as completed (strikethrough) and displays the current date and time in Greek.

### Features

- **Add Notes**: Insert notes using the input field or by pressing the Enter key.
- **Mark as Completed**: Toggle a checkbox to mark notes as completed (strikethrough).
- **Delete Notes**: Remove notes by clicking the delete button.
- **Real-Time Clock**: Displays the current date and time in Greek, updating every second.
- **Responsive Design**: Built with Tailwind CSS for a clean and responsive layout.

### Technologies Used

- **HTML5**: For structuring the web page.
- **Tailwind CSS**: For styling and responsive design.
- **JavaScript (Vanilla JS)**: For dynamic functionality and state management.
- **jQuery**: For DOM manipulation and event handling (optional, can be replaced with vanilla JS).

## 🛠️ Setup and Installation

### 🎬 Movie Search App

Follow these steps to set up and run the Movie Search App on your local machine.

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone git@github.com:nickTheof/vanilla-js-small-projects.git
```

### Step 2: Navigate to the Project Directory

Navigate to the movies-app directory:

```bash
cd vanilla-js-projects/movies-app
```

### Step 3: Get an OMDB API Key

To use the Movie Search App, you need an API key from the OMDB API. Follow these steps:

1. Go to the OMDB API website.

2. Sign up for a free API key.

3. Once you have your API key, open the index.js file in the js folder.

### Step 4: Add Your API Key

Replace the placeholder API_KEY in the index.js file with your actual OMDB API key:

```bash
const API_KEY = "YOUR_API_KEY_HERE";
```

### Step 5: Open the App in Your Browser

Open the index.html file in your browser. You can do this by:

- Double-clicking the index.html file in your file explorer, or

- Using a live server extension in your code editor (e.g., VS Code's Live Server).

### Step 6: Search for Movies

1. Enter a movie title in the search bar.

2. Wait for the results to load (the search is debounced to avoid excessive API calls).

3. View the movie details, including the title, year, runtime, genre, IMDb rating, and plot.

4. Click the "Show More" button to reveal additional details like director, actors, and production information.

### 📝 JS Notes App

Follow these steps to set up and run the JS Notes App on your local machine.

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone git@github.com:nickTheof/vanilla-js-small-projects.git
```

### Step 2: Navigate to the Project Directory

Navigate to the movies-app directory:

```bash
cd vanilla-js-projects/notes-app
```

### Step 3: Open the App in Your Browser

Open the index.html file in your browser. You can do this by:

- Double-clicking the index.html file in your file explorer, or

- Using a live server extension in your code editor (e.g., VS Code's Live Server).

### Step 4: Use the Notes App

1. Enter a note in the input field and press the "+" button or the Enter key to add it.

2. Toggle the checkbox to mark a note as completed (strikethrough).

3. Click the "X" button to delete a note.

4. The current date and time in Greek are displayed at the top and update every second.
