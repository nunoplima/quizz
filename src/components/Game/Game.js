import React from "react";
import { withRouter } from "react-router-dom";

// category: "Entertainment: Music"
// correct_answer: "Toto"
// difficulty: "easy"
// incorrect_answers: (3) ["Foreigner", "Steely Dan", "Journey"]
// question: "Who had a 1983 hit with the song &#039;Africa&#039;?"
// type: "multiple"

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

  handleAnswerChoice = (e) => {
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

  renderAnswers = () => {
    const currentQuestion = this.state.questionsArr[this.state.currentQuestionIdx];
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    // Add randomness to answers order
    const randomNum = Math.floor(Math.random() * 100);
    return answers.map((answer, idx) => {
      const randomAnswer = answers[(idx + randomNum) % answers.length];
      return <div key={idx} onClick={this.handleAnswerChoice}>{randomAnswer}</div>
    })
  }

  render() {
    const currentQuestion = this.state.questionsArr[this.state.currentQuestionIdx];
                          
    return (
      <>
        <h1>Game ON</h1>
        <div>
          <h3>{currentQuestion.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&eacute;/g, "é")}</h3>
          <div>
            {this.renderAnswers()}
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Game);