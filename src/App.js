import React from 'react'
import * as BooksAPI from './BooksAPI'
//import SearchBook from './SearchBook'
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
        <BookShelf books={this.state.books}/>
      </div>
    )
  }
}

export default App
