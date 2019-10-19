import React from "react";
import { withRouter } from "react-router-dom";

class Game extends React.Component {
  render() {
    const { questionsArr } = this.props.location;
    console.log(this.props.location, questionsArr[0])

    return (
      <>
        <h1>Game ON</h1>
        {questionsArr.map(question => <p>{question.type}</p>)}
      </>
    )
  }
}

export default withRouter(Game);