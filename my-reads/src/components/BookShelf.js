import React, { Component } from "react";
/*import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";*/
import Book from "./Book";

class BookShelf extends Component {
  render() {
    const { updateShelf, bookStatus, booksList } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookStatus}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksList.map(book => {
              return (
                <Book
                  key={book.id}
                  bookObject={book}
                  updateShelf={updateShelf}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
