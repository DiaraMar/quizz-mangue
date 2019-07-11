import React from 'react'
import Quizz from './Quiz'
import Connexion from './connexion'
import Register from './register'
import Profil from './../views/profil'
import Home from './../views/home'
import { Route, Link } from 'react-router-dom'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/quizz">Quizz</Link>
          </li>
          <li>
            <Connexion history={this.props.history} />
          </li>
          <li>
            <Register history={this.props.history} />
          </li>
        </ul>

        <hr />
        <Route path="/" exact component={Home} />
        <Route path="/profil" component={Profil} />
        <Route path="/quizz" component={Quizz} />
      </>
    )
  }
}
