# My Reads
### A React Built Book Tracking App
##### Lindsay Ciastko

## Introduction
MyReads is a book tracking app that allows users to sort and search for books that they are currently reading, want to read, and read. In this app, users can view books in their shelves and move them to different shelves. Additionally, if a user no longer wants a book in their shelf, they can remove it by selecting "none". To add new books, the user will select the search button in the bottom right corner to search for a new book. The possible search terms can be found [here](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md) This app was built using the React JavaScript Framework and was modified for Udacity's Project 6.

## Installation
To get the app running, clone or download this repository. Once it's finished, `cd` into the directory, and `npm install`. This will install all of the dependencies.

## Components
- **MyReadsMain:** The main page that renders on "/". This page will display 3 bookshelf components with their respective books.
- **MenuBar:** The green menu bar that displays on the top of the MyReadsMain component.
- **BookShelf:** Three shelves; "currently reading", "want to read", "read". Renders the book component for each book
- **Search:** The search component that displays on the "/search" route. Allows user to search for new books.
- **Book:** The book component displays the book title, author, and thumbnail for a given book in the allBooks state.

## Dependencies
- [Create React App](https://github.com/facebook/create-react-app#readme)
- [Starter Repository](https://github.com/udacity/reactnd-project-myreads-starter)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [React Router](https://github.com/ReactTraining/react-router#readme)
