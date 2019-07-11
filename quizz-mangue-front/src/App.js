import React from 'react'
import './App.css'
import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import './App.css'
import Quiz from './components/Quiz'
import QuizzesList from './components/QuizzesList'

import Nav from './components/Nav'
const history = createHistory()

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <section>
        <Router history={history}>
          <Nav history={history} />
        </Router>
        <QuizzesList />
        
      </section>
    )
  }
}
