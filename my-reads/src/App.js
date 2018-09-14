import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import MenuBar from './components/MenuBar';
import BookShelf from './components/BookShelf';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     allBooks: [],
     currentlyReading: [],
     wantToRead: [],
     read: [],
    showSearchPage: false
  }
componentDidMount()  {
  BooksAPI.getAll().then((books)=> {
  this.setState({allBooks: books})

}).then(() => {
  this.sortBooks(this.state.allBooks);
})
}

sortBooks = (books) => {
  this.setState(() => ({
    currentlyReading: books.filter((book) => {
      return book.shelf === "currentlyReading"
    }),
    wantToRead: books.filter((book) => {
      return book.shelf === "wantToRead"
    }),
    read: books.filter((book) => {
      return book.shelf === "read"
    })
  }))
}


  render() {
    return (
      <div className="app">
      <MenuBar/>
      <BookShelf bookStatus="Currently Reading" booksList={this.state.currentlyReading}/>
      <BookShelf bookStatus="Want to Read" booksList={this.state.wantToRead}/>
      <BookShelf bookStatus="Read" booksList={this.state.read}/>
        </div>
    )
  }
}
export default BooksApp


//When we search, the form bar comes up for a book search
