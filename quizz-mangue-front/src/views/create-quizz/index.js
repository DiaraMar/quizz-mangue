import React from 'react'
import './create-quizz.scss'
import Quizz from '../../components/quiz'

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
      <section className="create-quizz">
        <h1>Créez votre quizz</h1>
        <Quizz />
      </section>
    )
  }
}
