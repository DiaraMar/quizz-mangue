import React from 'react'
import Question from './Question'
// import shortid from 'shortid';
// import { nullableTypeAnnotation } from '@babel/types';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      theme: '',
      idCreator: '',
      questions: [],
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

  handleSubmitQuizz(event) {
    event.preventDefault()
    console.log(this.state)
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  render() {
    console.log('render in the quiz', this.state.questions)

    console.log('render in the quiz ****', this.state)
    console.log('***** end of the render in the quiz ****')
    return (
      <section>
        <h1>Create a quizz </h1>
        <form onSubmit={this.handleSubmitQuizz} className="w-50">
          <label>Name of your quizz </label>
          <input name="name" onChange={this.handleChange} required />
          <label>Theme of your quizz </label>
          <input name="theme" onChange={this.handleChange} required />
          <button
            className="btn btn-primary"
            disabled={!this.state.questions.length >= 1}>
            CREATE A QUIZZ
          </button>
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
