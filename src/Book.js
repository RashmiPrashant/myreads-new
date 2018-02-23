import React from 'react'

class Book extends React.Component{
    render(){
      const {book} = this.props
        return(
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks && book.imageLinks.thumbnail?`${book.imageLinks.thumbnail}`:`http://via.placeholder.com/128x193?text=No%20Cover`})` }}></div>
              <div className="book-shelf-changer">
              <select 
              defaultValue={ book.shelf ? book.shelf : "none" } 
              onChange={e => this.props.updateBookShelf(book, e.target.value)}>
                  <option value="" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className='book-subtitle'>{book.subtitle}</div>
            <div className="book-authors">{Array.isArray(book.authors)?book.authors.join(', '):''}</div>
          </div>
        )
    }

}

export default Book