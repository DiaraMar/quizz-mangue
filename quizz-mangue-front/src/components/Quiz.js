import React from "react";
import { nullableTypeAnnotation } from "@babel/types";
import QuestionsForm from "./Questionsform";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      theme: "",
      idCreator: "",
      size: 10
    };
    this.handleSubmitQuizz = this.handleSubmitQuizz.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}


  handleSubmitQuizz(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }
  render() {
    console.log("render in the quiz", this.state.questions);

    console.log("render in the quiz ****", this.state);
    console.log("***** end of the render in the quiz ****");
    return (
      <section>
        <h1>Create a quizz </h1>
        <form onSubmit={this.handleSubmitQuizz} className="w-50">
          <label>Name of your quizz </label>
          <input name="name" onChange={this.handleChange} required />
          <label>Theme of your quizz </label>
          <input name="theme" onChange={this.handleChange} required />
          <button
            className="btn btn-primary">
            CREATE A QUIZZ
          </button>
        </form>
        <QuestionsForm/>
      </section>
    );
  }
}
