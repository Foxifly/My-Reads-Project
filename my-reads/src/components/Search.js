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
    results: []
  };

  //When something is typed into the search bar, handleChange will get results. If none are found, the function will return no results found.
  handleChange = query => {
    if (query) {

      BooksAPI.search(query).then(results => {
        if (results) {
          if (results.error === "empty query") {
            this.setState({ results: "No Results Found" });
          } else if (query === "") {
            this.setState({ results: "Type to search" });
          }
          else {
            this.setState({ results });
          }
        }
      });
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
            {results === "No Results Found" && <h1>No results found!</h1>}
            {results !== "No Results Found" &&
              results.map(book => {
                if (book.id && book.title && book.authors && book.imageLinks) {

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
