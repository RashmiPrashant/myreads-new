import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {     
        super(props);     
        this.state = { error: false };
      }

  componentDidCatch(error, info) {     
    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      return <h1 className='error-message'>Can not find the Book. Try searching another one ! </h1>;
    }
    return <div>{this.props.children}</div>   
  } 
}

export default ErrorBoundary