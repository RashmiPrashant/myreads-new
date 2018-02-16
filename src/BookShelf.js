import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class Bookshelf extends Component {
    render(){
      const { shelves, books, updateBookShelf } = this.props
      return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            {shelves.map(shelve => (
              <div key={shelve.status}>
                <Shelf
                  title={shelve.title}
                  status={shelve.status}
                  books={books}
                  updateBookShelf={updateBookShelf}
                />
              </div>
            ))}
            </div>
            <div className="open-search">
            <Link
                    to='/search' 
                    className="close-search" 
                    >
            </Link>
  
            </div>
          </div>
        )
    }

}

export default Bookshelf