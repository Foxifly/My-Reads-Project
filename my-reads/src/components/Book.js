import React, { Component } from "react";

class Book extends Component {
state = {
  shelf: ""
}
handleShelfChange = (book, shelf) => {
  console.log(book, shelf)
  this.updateShelf(book, shelf)
}
  render() {
    const { updateShelf, bookObject} = this.props;
    return (
      <li key={bookObject.id}>
      <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookObject.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={((event)=> {updateShelf(bookObject, event.target.value)})}>
                <option value="move" disabled>Move to...</option>
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
)
  };


  }

export default Book;
