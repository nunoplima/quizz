import React from "react";
import Answer from "../Answer/Answer";
import Timer from "../Timer/Timer";

class Answers extends React.Component {
  componentDidMount = () => {
    console.log("Answers did mount");
  }

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
      <>
        <ul onClick={this.handleAnswerChoice}>
          {this.renderAnswers()}
        </ul>
        {/* <Timer key={Math.random() * 100} setAnswerChoice={this.props.setAnswerChoice} /> */}
      </>
    )
  }
}

export default Answers;