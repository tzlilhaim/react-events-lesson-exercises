import React, { Component } from 'react';
import Quote from "./Quote"

class SpotCheck3 extends Component {

    constructor() {
        super()
        this.state = {
            quotes: [
                { id: "3bf00g", text: "Friends are like butter, always wrapped up in their own thing", likes: 24 },
                { id: "50xx11", text: "If you're going to walk in the rain, at least make sure it's raining", likes: 82 },
                { id: "50ggr2", text: "Don't stop climbing the mountain. Instead, keep climbing the mountain.", likes: 33 }
            ]
        }
    }

    likeQuote = quoteId => {
        let allQuotes = [...this.state.quotes]
        let likedQuote = allQuotes.find(quote=>quote.id === quoteId)
        likedQuote.likes++
        this.setState({quotes:allQuotes})
    }

    //Load instances of `Quote` instead of rendering a `div`, and make sure to pass the correct props: 
    //a quote object and the `likeQuote` method

    render() {
        return (
            <div>
                {this.state.quotes.map((q,index) => {
                    return (
                       <Quote key={`quote-${index}`} quote={q} likeQuote={this.likeQuote}/>
                    )
                })}
            </div>
        )
    }
}

export default SpotCheck3;
