import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";


class BookShelf extends Component {

  //Declare the required proptypes for the bookshelf component.
  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
    bookStatus: PropTypes.string.isRequired,
    booksList: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired
  };


  //The render Mentod for the BookShelf component which will create a Book Component.
  render() {

    const { updateShelf, bookStatus, booksList, shelf} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookStatus}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksList.map(book => {

              return (
                <Book
                  key={book.id}
                  shelf={shelf}
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
