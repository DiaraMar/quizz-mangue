import React from 'react'
import './customMsg.scss'

export default class CustomMsg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <section>
        <p className={this.props.css}>{this.props.msg}</p>
      </section>
    )
  }
}
