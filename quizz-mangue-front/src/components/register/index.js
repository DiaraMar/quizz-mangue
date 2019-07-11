import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

import CustomMsg from './../CustomMsg'

export default class Quizz extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false,
      email: 'lolol@lol.fr',
      password: 'gneugneu',
      pseudo: 'flex',
      errorMsg: ''
    }
  }

  handleClose() {
    this.setState({ show: false, errorMsg: '' })
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    if (name === 'email') {
      this.setState({ errorMsg: '' })
    }

    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleShow() {
    this.setState({ show: true })
  }
  register = () => {
    const { email, password, pseudo } = this.state
    axios
      .post(
        'http://localhost:9999/api/v1/user',
        { email, password, pseudo },
        { headers: { 'Access-Control-Allow-Origin': '*' } }
      )
      .then(res => {
        console.log(res.data)
        // const token = res.data.token
        // localStorage.setItem('authToken', token)
        // this.setState({ show: false })
        // this.props.history.push('/profil')
      })
      .catch(err => {
        if (err.response.data === 'mail already exists') {
          this.setState({
            errorMsg: 'Ce mail existe déja'
          })
        }
      })
  }

  render() {
    return (
      <>
        <p className="link" href="#" onClick={this.handleShow}>
          Inscription
        </p>
        <Modal
          className="my-modal"
          show={this.state.show}
          onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inscription</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CustomMsg msg={this.state.errorMsg} css="error" />
            <label htmlFor="pseudo">
              Pseudo:
              <input
                onChange={this.handleChange}
                name="pseudo"
                type="pseudo"
                placeholder="Entrez votre pseudo"
              />
            </label>
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
            <Button variant="primary" onClick={this.register}>
              S'inscrire
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
