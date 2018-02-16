import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {
    render(){
      const { books, status, title, updateBookShelf } = this.props
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
            {books.filter(book => book.shelf === status).map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  updateBookShelf={updateBookShelf}
                />
              </li>
            ))}
          </ol>
            </div>
          </div>
        )
    }
}

export default Shelf