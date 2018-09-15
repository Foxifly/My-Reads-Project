import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

class Search extends Component {
  //Settings the PropTypes for the search component.
  static propTypes = {
    updateShelf: PropTypes.func.isRequired
  };

  //The state of the search component will have the results.
  state = {
    results: "Type to Search"
  };

  //When something is typed into the search bar, handleChange will get results. If none are found, the function will return no results found.
  handleChange = query => {
    if (query) {
      BooksAPI.search(query).then(results => {
        if (results) {
          if (results.error === "empty query") {
            this.setState({ results: "No Results Found!" });
          }
          else {
            this.setState({ results });
          }
        }
      });
    } else {
      this.setState({results: "Type to Search"})
    }

  };

  //The render method of the search component. Will create a book component for each result.
  render() {
    const { results } = this.state;
    const { updateShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper" />
          <input
            onChange={event => {
              this.handleChange(event.target.value);
            }}
            type="text"
            placeholder="Search by title or author"
          />
        </div>

        <div className="search-books-results">
          <ol className="books-grid">

            {typeof results === "string" && <h2>{this.state.results}</h2>}
            {typeof results === "object" &&
              results.map(book => {
                if (book.id && book.title && book.authors) {

                  return (
                    <Book
                      key={book.id}
                      shelf="none"
                      updateShelf={updateShelf}
                      bookObject={book}
                    />
                  );

                } else if (!book.authors) {
                  book.authors = ["Unknown"];
                  return (
                    <Book
                      key={book.id}
                      shelf="none"
                      updateShelf={updateShelf}
                      bookObject={book}
                    />
                  );
                } else if (!book.title) {
                  book.title = "Unknown";
                  return (
                    <Book
                      key={book.id}
                      shelf="none"
                      updateShelf={updateShelf}
                      bookObject={book}
                    />
                  );
                }
                return true;
              })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
