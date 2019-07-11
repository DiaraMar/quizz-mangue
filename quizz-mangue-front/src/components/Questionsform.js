import React from 'react';
import Question from './Question';

export default class QuestionsForm extends React.Component{
    constructor(props){
        super(props);
        this.state=({
        questions : [],
        size: 10
        })

        this.addQuestion = this.addQuestion.bind(this);

    }

    componentDidMount(){

    }

    addQuestion(question) {
        this.setState({
          questions: [...this.state.questions, question]
        });
        console.log(
          "questions state from add question after :",
          this.state.questions
        );
      }

    render(){
        return(
            <section>

                <hr />
        {this.state.questions.length < this.state.size ? (
          <h3>Add a question</h3>
        ) : (
          <p> Submit your quizz</p>
        )}
        
          <Question onSubmit={e => this.addQuestion(e)} />
        
        <hr />
            </section>
        )
    }
}