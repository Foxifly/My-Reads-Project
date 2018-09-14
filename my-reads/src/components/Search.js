import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  handleChange = query => {
    if (query) {
      query = query.trim()
      BooksAPI.search(query).then(results => {
        if (results) {
          if (results.error === "empty query") {
            this.setState({ results: "No Results Found" });
          } else {
            this.setState({ results });
          }
        }
      });
    }
  };
  render() {
    const { results } = this.state;
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
                      id={book.id}
                      title={book.title}
                      author={book.authors}
                      image={book.imageLinks.thumbnail}
                    />
                  );
                }
              })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;

/*
/*    sortedQuery.map((book) => {
    return (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.authors}
        image={book.imageLinks.thumbnail}
      />
    );*/
