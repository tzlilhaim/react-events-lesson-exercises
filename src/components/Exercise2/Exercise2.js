import React, { Component } from "react"
import List from "./List"
import Conversation from "./Conversation"

class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura",
          convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" },
          ],
        },
        {
          with: "Dad",
          convo: [
            {
              text: "Have you finished your school work yet?",
              sender: "other",
            },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" },
          ],
        },
        {
          with: "Shoobert",
          convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ],
        },
      ],
    }
  }
  displayConvo = (name) => {
    this.setState({
      displayConversation: name,
    })
  }
  hideConvo = () => {
    this.setState({
      displayConversation: null,
    })
  }
  render() {
    return (
      <div>
        {this.state.displayConversation ? (
          <Conversation
            hideConvo={this.hideConvo}
            sender={this.state.displayConversation}
            convo={
              this.state.conversations.find(
                (convo) => convo.with === this.state.displayConversation
              ).convo
            }
          />
        ) : (
          <List
            contacts={this.state.conversations.map((conv) => {
              return conv.with
            })}
            displayConvo={this.displayConvo}
          />
        )}
      </div>
    )
  }
}

export default Exercise2
