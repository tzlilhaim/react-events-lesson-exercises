import React, { Component } from "react"

class Task extends Component {
  complete = () => {
    const text = this.props.task.text
    this.props.markComplete(text)
  }

  render() {
    return (
      <div>
        <span>{this.props.task.text}</span>{" "}
        <button onClick={this.complete}>complete</button>
      </div>
    )
  }
}

export default Task
