import React, { Component } from "react";

class Book extends Component {

  render() {
    const { id, title, author, image } = this.props;
    console.log(id, title, author, image);
    return (
      <li key={id}>
      <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
        </li>
)
  };


  }

export default Book;

/* LIST ITEM OF R A BOOK

<li>
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url({book.})' }}></div>
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">1776</div>
    <div className="book-authors">David McCullough</div>
  </div>
</li> */

/*  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url()` }}></div>
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.author}</div>
  </div>*/
