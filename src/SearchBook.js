import React from 'react'
import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBook extends React.Component {
    state = {
        query: ''
      }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
      }
    
      render(){
        let showingBooks
        if (this.state.query) {
          const match = new RegExp(escapeRegExp(this.state.query), 'i')
          showingBooks = this.props.books.filter((book) => match.test(book.title || book.authors))
        } else {
            showingBooks = this.props.books
        }
    
        //showingBooks.sort(sortBy('title'))

        return(
            <div className="search-books">
                <div className="search-books-bar">
                <Link
                    to='/' 
                    className="close-search">
                </Link>
                <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {showingBooks.map((book) => (
                    <li key={book.id}>
                    <Book book = {book}/>
                  </li>
                    ))}
                </ol>
            </div>
          </div>
        )}
    

}

export default SearchBook