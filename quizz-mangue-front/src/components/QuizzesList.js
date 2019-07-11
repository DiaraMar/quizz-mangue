import React from "react";

export default class QuizzesList extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
        id : "",
        name:"",
        idCreator: "",
        theme:"",
        pin:""
    })
  }

  componentDidMount() {
    //fetch
    //mock

  }

 
  render() {
      console.log(this.state)
      
    return (
      <section>
      </section>
    );
  }
}