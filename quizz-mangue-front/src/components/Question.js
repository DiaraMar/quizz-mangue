import React from 'react';
import shortid from 'shortid';

export default class Question extends React.Component {
  constructor(props){
    super(props);

    this.state=({
      title: "",
      firstProposition:"",
      secondProposition:"",
      thirdProposition:"",
      fourthProposition:"",
      answer:"",
      timeLimit:30,
      isAnswer : false
    })

   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.handleAnswer= this.handleAnswer.bind(this);
  }

  componentDidMount(){ 
    console.log("componentdidmount");
    console.log(this.state)
  }

  handleChange(event){
    this.setState({
      ...this.state,
      [event.target.name] : event.target.value
    })
    console.log(this.state) 
  }

  handleAnswer(event){
    console.log('xxxxxxxxxxxxxxxxxxx', event.target.value)
    this.setState({
      answer : event.target.value, 
      isAnswer: true
    })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("handle submit");
    this.props.onSubmit({
      question: this.state
    })

    console.log("handle submit", this.state);
  }

  render(){
    console.log('question in the question', this.state);
    return(
      <section>
        <form 
        onSubmit={this.handleSubmit} 
        className="w-50" 
        key={this.state.idQuestion}
        >
         <label>Question </label> <input className="form-control" name="title"value={this.state.title} onChange={this.handleChange} required/>
         <label>Proposition </label> <input className="form-control" name="firstProposition" value={this.state.firstProposition} onChange={this.handleChange} onClick={this.handleAnswer}  required/>
         <label>Proposition </label> <input className="form-control" name="secondProposition" value={this.state.secondProposition} onChange={this.handleChange} onClick={this.handleAnswer} required/>
         <label>Proposition </label> <input className="form-control" name="thirdProposition" value={this.state.thirdProposition} onChange={this.handleChange} onClick={this.handleAnswer} />
         <label>Proposition </label> <input className="form-control" name="fourthProposition" value={this.state.fourthProposition} onChange={this.handleChange}onClick={this.handleAnswer} />
         <label>time limite for this question </label> <input type="number" className="form-control" name="timeLimit" value={this.state.timeLimit} onChange={this.handleChange} required/>
        <br/>
        <button className="btn btn-primary" disabled={!this.state.isAnswer}>Next question</button>
        </form>
      </section>
    )
  }
}