import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import CustomMsg from './customMsg'

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      theme: '',
      id_creator: '',
      redirect: false,
      error: ''
    }
    this.handleSubmitQuizz = this.handleSubmitQuizz.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  decodeToken = token => {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )

    return JSON.parse(jsonPayload)
  }
  handleSubmitQuizz(event) {
    event.preventDefault()
    const token = localStorage.getItem('authToken')

    if (!token) {
      return this.setState({
        error: 'Vous devez vous connecter pour créer un quizz'
      })
    }
    const idUser = this.decodeToken(token).id
    console.log(idUser)
    this.setState({ id_creator: idUser }, () => {
      const { title, id_creator, theme } = this.state
      axios
        .post('http://localhost:9999/api/v1/quizz', {
          title,
          id_creator,
          theme
        })
        .then(res => {
          localStorage.setItem('idQuizz', res.data.insertId)
          this.setState({
            redirect: true
          })
        })
    })
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/create-question" />
    }
    return (
      <section>
        <h1>Create a quizz </h1>
        <CustomMsg msg={this.state.error} css="error" />
        <form onSubmit={this.handleSubmitQuizz} className="w-50">
          <label>Name of your quizz </label>
          <input name="title" onChange={this.handleChange} required />
          <label>Theme of your quizz </label>
          <input name="theme" onChange={this.handleChange} required />
          <button className="btn btn-primary">CREATE A QUIZZ</button>
        </form>
      </section>
    )
  }
}
