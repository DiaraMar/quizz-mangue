import React from 'react'
import Question from './Question'
import axios from 'axios'
import { nullableTypeAnnotation } from '@babel/types'
import QuestionsForm from './Questionsform'

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      theme: '',
      idCreator: '',
      size: 10
    }
    this.handleSubmitQuizz = this.handleSubmitQuizz.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {}

  handleLastQuestion() {
    if (
      this.state.title &&
      this.state.prop1 &&
      this.state.prop2 &&
      this.state.prop3 &&
      this.state.prop4 &&
      this.state.time
    ) {
    }
  }
  handleSubmitQuizz(event) {
    event.preventDefault()
    const { title, id_creator, theme } = this.state
    console.log(this.state)
    axios
      .post('http://localhost:9999/api/v1/quizz', { title, id_creator, theme })
      .then(res => {
        console.log('allo', res)
        // logique post post
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
    return (
      <section>
        <h1>Create a quizz </h1>
        <form onSubmit={this.handleSubmitQuizz} className="w-50">
          <label>Name of your quizz </label>
          <input name="name" onChange={this.handleChange} required />
          <label>Theme of your quizz </label>
          <input name="theme" onChange={this.handleChange} required />
          <button className="btn btn-primary">CREATE A QUIZZ</button>
        </form>
        <QuestionsForm />
      </section>
    )
  }
}
