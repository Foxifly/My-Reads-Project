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
      console.log(books);
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
