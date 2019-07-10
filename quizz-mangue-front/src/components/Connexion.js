import React from 'react'
import { Modal, Button } from 'react-bootstrap'
export default class Quizz extends React.Component {
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

  componentDidMount() {}

  render() {
    return (
      <>
        <a href="#" onClick={this.handleShow}>
          Connexion
        </a>
        <Modal
          className="my-modal"
          show={this.state.show}
          onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Connexion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="email">
              Email:
              <input type="email" placeholder="Entrez votre email" />
            </label>
            <label htmlFor="password">
              Mot de passe:
              <input type="password" placeholder="Entrez votre mot de passe" />
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
