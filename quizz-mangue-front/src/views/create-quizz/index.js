import React from 'react'
import './create-quizz.scss'
import Quizz from './../../components/Quiz'

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
      <section>
        <h1>Bienvenu sur create quizz</h1>
        <Quizz />
      </section>
    )
  }
}
