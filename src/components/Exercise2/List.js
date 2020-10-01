import React, { Component } from "react"
import Contact from "./Contact"

class List extends Component {
  render() {
    return (
      <div>
        {this.props.contacts.map((contact) => {
          return <Contact key={contact} name={contact} displayConvo={this.props.displayConvo}/>
        })}
      </div>
    )
  }
}

export default List
