import React from 'react'

export default class CustomMsg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <section>
        <p>{this.props.msg}</p>
      </section>
    )
  }
}
