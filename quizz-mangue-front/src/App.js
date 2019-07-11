import React from 'react';
import './App.css';
import Quiz from './components/Quiz'
import QuizzesList from './components/QuizzesList'

export default class App extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){ 
  }

  render(){
    return(
      <section>
        <QuizzesList/>
        <Quiz/> 
      </section>
    )
  }
}

