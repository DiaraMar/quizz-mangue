import React from 'react'
import './App.css'
import Quizz from './components/Quiz'
import Connexion from './components/connexion'
// import { Route, Link } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import { Router } from 'react-router'
import { Route, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Profil from './views/profil'
export default class App extends React.Component {
  componentDidMount() {}

  render() {
    const history = createHistory()
    return (
      <section>
        <Router history={history}>
          <div>
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
                <Connexion history={history} />
              </li>
            </ul>

            <hr />
            <Route path="/" exact component={Profil} />
            <Route path="/profil" component={Profil} />
            <Route path="/quizz" component={Quizz} />
          </div>
        </Router>
      </section>
    )
  }
}
