import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MyReadsMain from "./components/MyReadsMain";
import { Route } from "react-router-dom";
import Search from "./components/Search";

class BooksApp extends React.Component {
  state = {
    allBooks: null
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ allBooks: books });
    });
  }

  moveShelf = (bookName, shelf) => {
    let isFound;
    bookName.shelf = shelf;

    BooksAPI.update(bookName, shelf);
    if (this.state.allBooks.indexOf(bookName.id) !== -1) {
      this.setState({ book: bookName });
    } else {
      this.setState(newState => ({
        allBooks: newState.allBooks.concat([bookName])
      }));
    }
    BooksAPI.getAll().then(books => this.setState({ allBooks: books }));
  };

  checkInShelf = checkBook => {
    this.state.allBooks.forEach(book => {
      if (checkBook.id === book.id) {
        checkBook.shelf = book.shelf;
        console.log(checkBook.shelf);
      } else {
        return false;
      }
    });
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                {this.state.allBooks && (
                  <div>
                    {
                      <MyReadsMain
                        updateShelf={this.moveShelf}
                        allBooks={this.state.allBooks}
                      />
                    }
                  </div>
                )}
              </div>
            );
          }}
        />

        <Route
          path="/search"
          render={({ history }) => {
            return (
              <div className="app">
                <Search
                  checkShelf={this.checkInShelf}
                  updateShelf={(book, shelf) => {
                    this.moveShelf(book, shelf);
                    history.push("/");
                  }}
                />
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
