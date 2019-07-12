import React from 'react'
import Connexion from '../connexion'
import Register from '../register'
import Profil from '../../views/profil'
import Home from '../../views/home'
import CreateQuestion from '../../views/create-question'
import CreateQuizz from '../../views/create-quizz'
import EndQuizz from '../../views/end-quizz'
import { Route, Link } from 'react-router-dom'
import './nav.scss'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/create-quizz">Créer un quizz</Link>
          </li>
          <li>
            <Connexion history={this.props.history} />
          </li>
          <li>
            <Register history={this.props.history} />
          </li>
        </ul>
        <hr className="hr" />
        <Route path="/" exact component={Home} />
        <Route path="/profil" component={Profil} />
        <Route
          path="/create-question"
          history={this.props.history}
          component={CreateQuestion}
        />
        <Route path="/create-quizz" component={CreateQuizz} />
        <Route path="/end-quizz" component={EndQuizz} />
      </>
    )
  }
}
