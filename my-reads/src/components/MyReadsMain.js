import React, {Component} from 'react';
import MenuBar from "./MenuBar";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

class MyReadsMain extends Component {
  state = {
    allBooks: []
  }

  componentDidMount = () => {
    this.setState({allBooks: this.props.allBooks});
  }

  render() {
    const { updateShelf} = this.props;
    return(
      <div className="app">
      <MenuBar />
      <BookShelf
      bookStatus="Currently Reading"
      shelf="currentlyReading"
      updateShelf={updateShelf}
      booksList={this.state.allBooks.filter(book => {
        return book.shelf === "currentlyReading";
      })}
    />

    <BookShelf
      bookStatus="Want to Read"
      shelf="wantToRead"
      updateShelf={updateShelf}
      booksList={this.state.allBooks.filter(book => {
        return book.shelf === "wantToRead";
      })}
    />

    <BookShelf
      bookStatus="Read"
      shelf="read"
      updateShelf={updateShelf}
      booksList={this.state.allBooks.filter(book => {
        return book.shelf === "read";
      })}
    />

    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>)
  }

}

export default MyReadsMain
