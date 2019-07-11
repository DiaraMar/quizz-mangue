import React from 'react'
import Question from './Question'
import axios from 'axios'
// import shortid from 'shortid';
// import { nullableTypeAnnotation } from '@babel/types';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'salut lol mdr',
      theme: 'sport',
      id_creator: 1,
      questions: [
        { answer1: '' },
        { answer2: '' },
        { answer3: '' },
        { answer4: '' }
      ],
      size: 10
    }
    this.addQuestion = this.addQuestion.bind(this)
    this.handleSubmitQuizz = this.handleSubmitQuizz.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {}

  addQuestion(question) {
    this.setState({
      questions: [...this.state.questions, question]
    })
    console.log(
      'questions state from add question after :',
      this.state.questions
    )
  }

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
        <hr />
        {this.state.questions.length < this.state.size ? (
          <h3>Add a question</h3>
        ) : (
          <p> Submit your quizz</p>
        )}
        {this.state.questions.length < this.state.size && (
          <Question onSubmit={e => this.addQuestion(e)} />
        )}
        <hr />
      </section>
    )
  }
}
