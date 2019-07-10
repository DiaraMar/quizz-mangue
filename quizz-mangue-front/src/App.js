import React from 'react'
import './App.css'
import Quizz from './components/Quiz'
import Connexion from './components/Connexion'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Profil from './views/profil'
export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <section>
        <Router>
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
                <Connexion />
              </li>
            </ul>

            <hr />

            <Route path="/profil" component={Profil} />
            <Route path="/quizz" component={Quizz} />
          </div>
        </Router>
      </section>
    )
  }
}
