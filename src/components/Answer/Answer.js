import React from "react";

class Answer extends React.Component {

  // shouldComponentUpdate(nextProps) {
  //   return this.props.currentQuestion !== nextProps.currentQuestion;
  // }

  render() {
    return (
      <li>{this.props.answer}</li>
    )
  }
};

export default Answer;