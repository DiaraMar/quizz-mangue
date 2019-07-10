import React from 'react';
import Question from './Question';
import shortid from 'shortid';
import { nullableTypeAnnotation } from '@babel/types';

export default class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state=({
      name:"",
      theme:"",
      idCreator:"",
      questions : [],
      size : 10,
    })
    this.addQuestion = this.addQuestion.bind(this);
  }

  componentDidMount(){
    
  }

  addQuestion(question){
    
    console.log('questions state :', this.state.questions);
    this.setState({
      questions : [question, ...this.state.questions]
    })
  }

  render(){
    console.log("render in the quiz", this.state.questions)
    return(
      <section>
       <Question onSubmit={()=>this.addQuestion(this)}/>
      </section>
    )
  }
}