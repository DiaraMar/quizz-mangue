import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
// import { Route } from 'react-router-dom'

export default class Quizz extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false,
      email: 'lolol@lol.fr',
      password: 'gneugneu'
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleShow() {
    this.setState({ show: true })
  }
  connexion = () => {
    const { email, password } = this.state
    axios
      .post(
        'http://localhost:9999/api/v1/user/login',
        { email, password },
        { headers: { 'Access-Control-Allow-Origin': '*' } }
      )
      .then(res => {
        const token = res.data.token
        localStorage.setItem('authToken', token)
        this.setState({ show: false })
        this.props.history.push('/profil')
      })
  }

  render() {
    // const Button = () => (
    //   <Route
    //     render={({ history }) => (
    //       <button
    //         type="button"
    //         onClick={() => {
    //           history.push('/profil')
    //         }}>
    //         Click Me!
    //       </button>
    //     )}
    //   />
    // )
    return (
      <>
        <p className="link" href="#" onClick={this.handleShow}>
          Connexion
        </p>
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
              <input
                onChange={this.handleChange}
                name="email"
                type="email"
                placeholder="Entrez votre email"
              />
            </label>
            <label htmlFor="password">
              Mot de passe:
              <input
                name="password"
                onChange={this.handleChange}
                type="password"
                placeholder="Entrez votre mot de passe"
              />
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Fermer
            </Button>
            <Button variant="primary" onClick={this.connexion}>
              Connexion
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
