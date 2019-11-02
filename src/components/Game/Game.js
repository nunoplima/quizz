import React from "react";
import Answers from "../Answers/Answers";

// TODO turn to func comp
class Game extends React.Component {

  render() {
    const currentQuestion = this.props.questionsArr[this.props.currentQuestionIdx];
                          
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
            <Answers key={this.props.currentQuestionIdx} 
              questionsArr={this.props.questionsArr} 
              currentQuestionIdx={this.props.currentQuestionIdx}
              setAnswerChoice={this.props.setAnswerChoice} />          
          </div>
        </div>
      </>
    )
  }
}

export default Game;