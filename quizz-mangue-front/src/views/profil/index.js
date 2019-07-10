import React from 'react'
import './profil.css'

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section>
        <h1>Bienvenu sur votre profil</h1>
        <p onClick={this.test}>{this.state.bendo}</p>
      </section>
    )
  }
}
