import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MenuBar from "./components/MenuBar";
import BookShelf from "./components/BookShelf";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "./components/Search";

class BooksApp extends React.Component {
  state = {
    allBooks: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ allBooks: books });
    });
  }

  moveShelf = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf)
      .then(() => BooksAPI.getAll())
      .then(books => this.setState({ allBooks: books }));
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="app">
                <MenuBar />

                <BookShelf
                  bookStatus="Currently Reading"
                  shelf="currentlyReading"
                  updateShelf={this.moveShelf}
                  booksList={this.state.allBooks.filter(book => {
                    return book.shelf === "currentlyReading";
                  })}
                />

                <BookShelf
                  bookStatus="Want to Read"
                  shelf="wantToRead"
                  updateShelf={this.moveShelf}
                  booksList={this.state.allBooks.filter(book => {
                    return book.shelf === "wantToRead";
                  })}
                />

                <BookShelf
                  bookStatus="Read"
                  shelf="read"
                  updateShelf={this.moveShelf}
                  booksList={this.state.allBooks.filter(book => {
                    return book.shelf === "read";
                  })}
                />

                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            );
          }}
        />

        <Route
          path="/search"
          render={({history}) => {
            return (
              <div className="app">
                <Search updateShelf={(book, shelf)=>{this.moveShelf(book, shelf); history.push("/")}} />
              </div>

            );
          }}
        />
      </div>
    );
  }
}
export default BooksApp;

//When we search, the form bar comes up for a book search
