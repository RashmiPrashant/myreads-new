import React from 'react'
import { Link } from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends React.Component {
    state = {
        requestedBooks: [],
        query: '',
        bookNotFound : null
      };
      searchBook = event => {
        this.query = event.target.value
        let booksInShelf = this.props.books
    
        if (this.query) {
          BooksAPI.search(this.query).then(response => {
            if(response.length !== undefined){
              this.setState({
                bookNotFound : true,
                requestedBooks: response.map(result => {
                    let bookOwned = booksInShelf.find(b => b.id === result.id)
                  return bookOwned || result
                })
              })
            } else {
              this.setState({
                bookNotFound : false
              })
              
            }
              
          })
        } else {
          this.setState({
            requestedBooks: [],
            bookNotFound : true
          })
        }
      }
     
      render() {
        const { requestedBooks, bookNotFound } = this.state
        return(
        <div className="search-books">
            <div className="search-books-bar">
            <Link
                to='/'
                className="close-search">
            </Link>
            <div className="search-books-input-wrapper">
            <DebounceInput
                  debounceTimeout={400}
                  type="text"
                  placeholder="Search by title or author"
                  onChange={this.searchBook}/>
            </div>
        </div>
        <div className="search-books-results">
            {this.query !== '' && (
                <ol className="books-grid">
                {requestedBooks.map(book => (
                    <li key={book.id}>
                        <Book
                          book={book}
                          updateBookShelf={this.props.updateBookShelf}
                        />
                    </li>
                    ))}
                </ol>
            )}
            
            {this.query !== '' && requestedBooks.length !== 0 && (
                <ol className="books-grid">
                    <i>{requestedBooks.length} books found!</i>
                </ol>
            )}
            {(bookNotFound === false &&(
                <h1 className="error-message">Can not find "{this.query}" . Try searching another one !</h1>
              )
            )}
            </div>
          </div>
        )
      }
    }    

export default SearchBook