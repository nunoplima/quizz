import React from "react";
import { withRouter } from "react-router-dom";
import Answers from "../Answers/Answers";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsArr: this.props.location.questionsArr, 
      currentQuestionIdx: this.props.location.currentQuestionIdx, 
      correctAnswer: this.props.location.questionsArr[this.props.location.currentQuestionIdx].correct_answer,
      lifesLeft: 3
    }
  }

  setAnswerChoice = (e) => {
    // if answer is wrong
    if (e.target.innerText !== this.state.correctAnswer) {
      this.setState(state => {
        return { 
          lifesLeft: state.lifesLeft - 1, 
          currentQuestionIdx: state.currentQuestionIdx + 1,
          correctAnswer: state.questionsArr[state.currentQuestionIdx + 1].correct_answer
        };
      })
    // if answer is right
    } else {
      this.setState((state) => {
        return { 
          currentQuestionIdx: state.currentQuestionIdx + 1, 
          correctAnswer: state.questionsArr[state.currentQuestionIdx + 1].correct_answer
        }
      })
    }
  };

  render() {
    const currentQuestion = this.state.questionsArr[this.state.currentQuestionIdx];
                          
    return (
      <>
        <h1>Game ON</h1>
        <div>
          <h3>{currentQuestion.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&eacute;/g, "é")}</h3>
          <div>
            <Answers {...this.state} setAnswerChoice={this.setAnswerChoice}/>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Game);