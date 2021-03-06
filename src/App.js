import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import BookShelf from './BookShelf'
import './App.css'

class App extends React.Component {
  
  state = {
    books : []
  }

  shelves = [
    {
      title: 'Currently Reading',
      status: 'currentlyReading'
    },
    {
      title: 'Want To Read',
      status: 'wantToRead'
    },
    {
      title: 'Read',
      status: 'read'
    }
  ]

  componentDidMount(){
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => this.setState({books}))
      
    })
  }

  render() {
    const {books} = this.state
    const {status, title} = this.shelves
      return (
        <div className="app">
          <Route exact path='/' render={() => (
              <BookShelf 
              books={books}
              shelves={this.shelves}
              title={title}
              status={status}
              updateBookShelf={this.updateBookShelf}
                />
              )}/>
            
            <Route exact path='/search' render={() => (
              <SearchBook 
                books={books}
                updateBookShelf={this.updateBookShelf}/>
              )}/>    
        </div>
      )
  }
}

export default App
