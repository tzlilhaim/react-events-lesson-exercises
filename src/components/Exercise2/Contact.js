import React, { Component } from "react"

class Contact extends Component {
  displayConversation = () => {
    this.props.displayConvo(this.props.name)
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <button onClick={this.displayConversation}>Display conversation</button>
      </div>
    )
  }
}

export default Contact
