import React from "react";
import Answer from "../Answer/Answer";

class Answers extends React.Component {
  
  handleAnswerChoice = (e) => {
    this.props.setAnswerChoice(e);
  };
  
  renderAnswers = () => {
    const currentQuestion = this.props.questionsArr[this.props.currentQuestionIdx];
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
    // Add randomness to answers order
    const randomNum = Math.floor(Math.random() * 100);
    return answers.map((answer, idx) => {
      const randomAnswer = answers[(idx + randomNum) % answers.length];
      return <Answer key={idx} randomAnswer={randomAnswer} />
    })
  }

  render() {
    return (
      <ul onClick={this.handleAnswerChoice}>
        {this.renderAnswers()}
      </ul>
    )
  }
}

export default Answers;