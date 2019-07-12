import React from 'react'
import Question from './../../components/Question'
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
      <section>
        <h1>Bienvenu sur create question</h1>
        <Question />
      </section>
    )
  }
}
