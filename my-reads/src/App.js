import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import MenuBar from './components/MenuBar';
import BookShelf from './components/BookShelf';
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Search from './components/Search';

class BooksApp extends React.Component {
  state = {
     allBooks: []
  }
componentDidMount()  {
  BooksAPI.getAll().then((books)=> {
  this.setState({allBooks: books})

})
}



  render() {
    return (

<div>
      <Route
        exact path="/"
        render={() => {
        return(
          <div className="app">
          <MenuBar/>

          <BookShelf bookStatus="Currently Reading" booksList={this.state.allBooks.filter(book => {
           return book.shelf === "currentlyReading"})}/>

          <BookShelf bookStatus="Want to Read" booksList={this.state.allBooks.filter(book => {
           return book.shelf === "wantToRead"})}/>

          <BookShelf bookStatus="Read" booksList={this.state.allBooks.filter(book => {
           return book.shelf === "read"})}/>

           <div className="open-search">
             <Link to="/search">Add a book</Link>
             </div>
           </div>
           
        )
        }}
       />

      <Route
        path="/search"
        render={()=> {
          return(
            <div className="app">
            <Search/>
            </div>
          )
        }}
      />

</div>
    )
  }
}
export default BooksApp


//When we search, the form bar comes up for a book search
