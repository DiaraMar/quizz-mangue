import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './question.scss'
const initialState = {
  title: '',
  choices: {
    answer0: '',
    answer1: '',
    answer2: '',
    answer3: ''
  },
  id_quizz: localStorage.getItem('idQuizz'),
  answer: '',
  time_limit: '',
  isAnswer: false,
  redirect: false
}

export default class Question extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChoice = this.handleChoice.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
  }

  componentDidMount() {
    console.log('componentdidmount')
    console.log(this.state)
  }

  resetState = () => {
    this.setState(initialState)
  }
  handleChoice(event) {
    const name = event.target.name
    const index = name[name.length - 1]
    this.setState({
      choices: {
        ...this.state.choices,
        [Object.keys(this.state.choices)[Number(index)]]: event.target.value
      }
    })
  }

  handleAnswer(event) {
    this.setState({
      answer: event.target.value,
      isAnswer: true
    })
  }
  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { id_quizz, title, choices, answer, time_limit } = this.state
    console.log(id_quizz, title, choices, answer, time_limit)
    axios
      .post(
        `http://localhost:9999/api/v1/question`,
        {
          id_quizz,
          title,
          choices: JSON.stringify(choices),
          answer,
          time_limit
        },
        { headers: { 'Access-Control-Allow-Origin': '*' } }
      )
      .then(res => {
        console.log('alo', res)
        this.resetState()
      })
  }

  handleFinishQuizz = event => {
    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/end-quizz" />
    }
    return (
      <section className="question">
        <div className="question-inputs" key={this.state.idQuestion}>
          <label>Question </label>
          <input
            className="form-control"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <label>
            Réponse 1
            <input
              className="form-control"
              name="answer0"
              value={this.state.choices.answer0}
              onChange={this.handleChoice}
              required
            />
          </label>
          <label>
            Réponse 2
            <input
              className="form-control"
              name="answer1"
              value={this.state.choices.answer1}
              onChange={this.handleChoice}
              required
            />
          </label>
          <label>
            Réponse 3
            <input
              className="form-control"
              name="answer2"
              value={this.state.choices.answer2}
              onChange={this.handleChoice}
            />
          </label>
          <label>
            Réponse 4
            <input
              className="form-control"
              name="answer3"
              onChange={this.handleChoice}
              value={this.state.choices.answer3}
            />
          </label>
          <label htmlFor="answer">
            Vraie réponse
            <select name="answer" onChange={this.handleChange} id="answer">
              <option>Choisissez la vraie réponse</option>
              <option value={this.state.choices.answer0}>
                {this.state.choices.answer0}
              </option>
              <option value={this.state.choices.answer1}>
                {this.state.choices.answer1}
              </option>
              <option value={this.state.choices.answer2}>
                {this.state.choices.answer2}
              </option>
              <option value={this.state.choices.answer3}>
                {this.state.choices.answer3}
              </option>
            </select>
          </label>
          <label className="time-limit">
            Limite de temps
            <input
              type="number"
              className="form-control"
              name="time_limit"
              value={this.state.time_limit}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <button
            className="btn btn-primary add-question"
            // disabled={!this.state.isAnswer}
            onClick={this.handleSubmit}>
            Ajouter la question
          </button>
          <button className="btn btn-primary" onClick={this.handleFinishQuizz}>
            Terminer le quizz
          </button>
        </div>
      </section>
    )
  }
}
