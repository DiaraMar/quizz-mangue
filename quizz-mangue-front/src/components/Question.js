import React from 'react';
import shortid from 'shortid';

export default class Question extends React.Component {
  constructor(props){
    super(props);
    this.state=({
      idQuestion:"",
      title: "",
      firstProposition:"",
      secondProposition:"",
      thirdProposition:"",
      fourthProposition:"",
      answer:"",
      timeLimit:"",
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

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      ...this.state,
      timeLimit : shortid.generate()
    })
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

  render(){

    return(
      <section>
        <form onSubmit={this.handleSubmit} className="w-50">
         <label>Question </label> <input className="form-control" name="title" onChange={this.handleChange}/>
         <label>Proposition </label> <input className="form-control" name="firstProposition" onChange={this.handleChange} onClick={this.handleAnswer}/>
         <label>Proposition </label> <input className="form-control" name="secondProposition" onChange={this.handleChange} onClick={this.handleAnswer}/>
         <label>Proposition </label> <input className="form-control" name="thirdProposition" onChange={this.handleChange} onClick={this.handleAnswer}/>
         <label>Proposition </label> <input className="form-control" name="fourthProposition" onChange={this.handleChange}onClick={this.handleAnswer}/>
         <label>time limite for this question </label> <input className="form-control" name="timeLimit" onChange={this.handleChange}/>
        </form>
      </section>
    )
  }
}