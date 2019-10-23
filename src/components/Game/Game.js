import React from "react";
import Answers from "../Answers/Answers";
import Timer from "../Timer/Timer";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    // console.log(this.state.questionsArr[this.state.currentQuestionIdx])
    const currentQuestion = this.props.questionsArr[this.props.currentQuestionIdx];
    // const currentQuestion = this.props.location.questionsArr[this.props.location.currentQuestionIdx];
                          
    return (
      <>
        <h1>Game ON</h1>
        <div>
        <h3>#{this.props.currentQuestionIdx + 1} {currentQuestion.question.replace(/&amp;/g, "&")
          .replace(/&deg;/g, "°")
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&eacute;/g, "é")}
        </h3>
        <div>
          {/* <Answers {...this.state} setAnswerChoice={this.setAnswerChoice}/> */}
          {/* <Answers {...this.state} setAnswerChoice={this.props.setAnswerChoice}/> */}
          <Answers {...this.props} setAnswerChoice={this.props.setAnswerChoice} />
          
        </div>
        {/* <Timer setAnswerChoicee={this.setAnswerChoice} /> */}
          <Timer timer={this.props.timer} />
        </div>
      </>
    )
  }
}

export default Game;