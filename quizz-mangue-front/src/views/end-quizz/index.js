import React from 'react'
import './end-quizz.scss'
import axios from 'axios'

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      pin: ''
    }
  }

  componentDidMount() {
    const idQuizz = localStorage.getItem('idQuizz')
    axios.get(`http://localhost:9999/api/v1/quizz/${idQuizz}`).then(res => {
      this.setState({
        pin: res.data[0].pin
      })
    })
  }

  render() {
    return (
      <section className="end-quizz">
        <h1>Vous avez terminer votre quizz !!</h1>
        <p>
          Pour inviter vos amis a joué donnez leur le pin suivant :{' '}
          {this.state.pin.toUpperCase()}
        </p>
      </section>
    )
  }
}
