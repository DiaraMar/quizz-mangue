import React from "react";
import shortid from "shortid";
import axios from "axios";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", choiceOne: "", choiceTwo: "", choiceThree: "", choiceFour: "", answers: [], answer: "", timeLimit: 30, isAnswer: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLastQuestion = this.handleLastQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  componentDidMount() {
    console.log("componentdidmount");
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleAnswer(event) {
    console.log("xxxxxxxxxxxxxxxxxxx", event.target.value);
    this.setState({
      answer: event.target.value,
      isAnswer: true
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handle submit");
    this.setState({
      answers: [...this.state.answers, { answer : event.target.value }]
    });

    this.props.onSubmit({
      question: this.state
    });
    /*const { id_quizz, title, choices, answer, time_limit } = this.state;
    axios.post(`http://localhost/9999/api/v1/question`, {
      id_quizz,
      title,
      choices,
      answer,
      time_limit
    });*/
    console.log("handle submit", this.state);
  }

  handleLastQuestion(event) {
    //if(event.target.state === null)
  }

  render() {
    console.log("Julia is here ***************************", this.state.answer);

    return (
      <section>
        <div className="w-50" key={this.state.idQuestion}>
            <label>Question </label>
          <input
            className="form-control"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <label>Proposition </label>{" "}
          <input
            className="form-control"
            name="choiceOne"
            value={this.state.firstProposition}
            onChange={this.handleChange}
            onClick={this.handleAnswer}
            required
          />
          <label>Proposition </label>{" "}
          <input
            className="form-control"
            name="choiceTwo"
            value={this.state.secondProposition}
            onChange={this.handleChange}
            onClick={this.handleAnswer}
            required
          />
          <label>Proposition </label>{" "}
          <input
            className="form-control"
            name="choiceThree"
            value={this.state.thirdProposition}
            onChange={this.handleChange}
            onClick={this.handleAnswer}
          />
          <label>Proposition </label>{" "}
          <input
            className="form-control"
            name="choiceFour"
            value={this.state.fourthProposition}
            onChange={this.handleChange}
            onClick={this.handleAnswer}
          />
          <label>time limite for this question </label>{" "}
          <input
            type="number"
            className="form-control"
            name="timeLimit"
            value={this.state.timeLimit}
            onChange={this.handleChange}
            required
          />
          <br />
          <button
            className="btn btn-primary"
            disabled={!this.state.isAnswer}
            onClick={this.handleSubmit}
          >
            New question
          </button>
          <button className="btn btn-primary" onClick={this.handleLastQuestion}>
            Finish
          </button>
        </div>
      </section>
    );
  }
}
