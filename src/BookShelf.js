import React, { Component } from 'react';
//import SearchBook from './SearchBook'
import Book from './Book'
class Bookshelf extends Component {

    render(){
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map((book) => (
                      <li key={book.id}>
                        <Book book = {book}/>
                      </li>
                    ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a>Add a book</a>
            </div>
          </div>
        )

    
    }

}

export default Bookshelf