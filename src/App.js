import React from 'react'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'


class BooksApp extends React.Component {
  state = {
     books : [],
    showSearchPage: true
    
  }
  

  updateBookList = (book) => {
    this.setState((state) => ({
      books: state.books.filter((c) => c.id !== book.id)
    }))
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })

  }

  render() {
    return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <BooksList onUpdateBookList={this.updateBookList} books={this.state.books} />
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                <BooksList books={this.state.books} />
              </div>
            </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                <BooksList books={this.state.books} />
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
