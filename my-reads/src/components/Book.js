import React, { Component } from "react";
import PropTypes from "prop-types";
import notAvailable from "../icons/img-not-available.png"

class Book extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    bookObject: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

  state = {
    value: this.props.shelf
  };

  handleChange = (book, shelf) => {
    this.setState({ value: shelf });
  };

  render() {
    const { updateShelf, bookObject } = this.props;
    let backgroundImg;
    if (bookObject.imageLinks) {
      backgroundImg = bookObject.imageLinks.thumbnail
    } else {
      backgroundImg = notAvailable
    }
    return (
      <li key={bookObject.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${backgroundImg})`

              }}
            />
            <div className="book-shelf-changer">
              <select
                value={this.state.value}
                onChange={event => {
                  //passes back into App.js to move the book from one shelf to another
                  updateShelf(bookObject, event.target.value);
                  //Sets the state as the new value of where the book is at now
                  this.handleChange(bookObject, event.target.value);
                }}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookObject.title}</div>
          <div className="book-authors">{bookObject.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;
