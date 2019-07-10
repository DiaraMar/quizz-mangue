import React from 'react';
import './App.css';
import Quiz from './components/Quiz'

export default class App extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){ 
  }

  render(){
    return(
      <section>
        <Quiz/> 
      </section>
    )
  }
}

