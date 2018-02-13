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

componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
}


render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <BookShelf 
              books={this.state.books}/>
            )}/>
          
          <Route exact path='/search' render={() => (
            <SearchBook 
              books={this.state.books}/>
            )}/>
                
      </div>
      
    )
  }
}

export default App
