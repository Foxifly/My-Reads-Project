import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

class Search extends Component {
  //Settings the PropTypes for the search component.
  static propTypes = {
    checkShelf: PropTypes.func.isRequired,
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
    const { updateShelf, checkShelf, pushHistory} = this.props;

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
                checkShelf(book);

                let id;
                if (book.id && book.title && book.authors) {
                  id = book.id;
                }
                else if (!book.authors) {
                  book.authors = ["Unknown"];
                  id = book.id;
                } else if (!book.title) {
                    book.title = "Unknown";
                    id = book.id;
                }
                if (book.shelf) {
                  return (
                    <Book
                      key={id}
                      shelf={book.shelf}
                      updateShelf={updateShelf}
                      pushHistory={pushHistory}
                      bookObject={book}
                    />
                  );
                } else {
                  return (
                    <Book
                      key={book.id}
                      shelf="none"
                      pushHistory={pushHistory}
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
