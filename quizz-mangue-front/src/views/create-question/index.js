import React from 'react'
import Question from '../../components/question/index.'
import './create-question.scss'

export default class App extends React.Component {
  // constructor(props, context) {
  //   super(props, context)

  //   this.handleShow = this.handleShow.bind(this)
  //   this.handleClose = this.handleClose.bind(this)

  //   this.state = {
  //     show: false
  //   }
  // }

  render() {
    return (
      <section className="create-question">
        <h1>Créez vos question !</h1>
        <Question />
      </section>
    )
  }
}
