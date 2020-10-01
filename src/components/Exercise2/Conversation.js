import React, { Component } from "react"

class Conversation extends Component {
  hideConversation = () => {
    this.props.hideConvo(this.props.sender)
  }
  render() {
    return (
      <div>
        <button className="back" onClick={this.hideConversation}>
          {"< back"}
        </button>
        <p className="contact">{this.props.sender}</p>
        {this.props.convo.map((message, index) => {
          return (
            <div key={`m-${index}`}>
              <span className="sender">
                {message.sender === "self" ? "Me" : this.props.sender}:{" "}
              </span>
              <span className="message">{message.text}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Conversation
