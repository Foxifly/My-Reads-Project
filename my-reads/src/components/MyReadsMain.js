import React, {Component} from 'react';
import MenuBar from "./MenuBar";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


class MyReadsMain extends Component {
  //Required props to be passed into the MyReadsMain component.
  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
    allBooks: PropTypes.array.isRequired,
  };

  //The MyReadsMain state which is passed the all books array from props.
  state = {
    allBooks: []
  }

  //Once the component mounts, set state of the the allBooks array to the passed props
  componentDidMount = () => {
    this.setState({allBooks: this.props.allBooks});
  }

  //Render the menu bar, and the 3 book shelf components for each shelf.
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
