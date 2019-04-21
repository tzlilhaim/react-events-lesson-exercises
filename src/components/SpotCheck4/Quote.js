import React, { Component } from 'react';

class Quote extends Component {
    likeQuote = () => {
      this.props.likeQuote(this.props.quote.id) // this invokes App's likeQuote method, and passes it *this* quote's ID
    }
  
    render() {
      let q = this.props.quote
      return (
        <div>
          <sup>{q.likes}</sup>
          <span onClick={this.likeQuote}>+</span> {/* this will invoke the *inner* likeQuote method */}
          <span>{q.text}</span>
        </div>
      )
    }
  }

  export default Quote;
