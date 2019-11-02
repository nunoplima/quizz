import React from "react";
import Answer from "../Answer/Answer";
import Timer from "../Timer/Timer";

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clearInt: false
    }
  }

  handleAnswerChoice = (e) => {
    // so that the timer stop at user click
    this.setState({ clearInt: true });
    this.props.setAnswerChoice(e);
  };
  
  renderAnswers = () => {
    const currentQuestionObj = this.props.questionsArr[this.props.currentQuestionIdx];
    const answers = currentQuestionObj.answers;
    console.log(currentQuestionObj.correct_answer)
    return answers.map((answer, idx) => {
      return <Answer key={idx} answer={answer} />
    })
  }

  render() {
    return (
      <>
        <ul onClick={this.handleAnswerChoice}>
          {this.renderAnswers()}
        </ul>
        <Timer clearInt={this.state.clearInt} setAnswerChoice={this.props.setAnswerChoice} />
      </>
    )
  }
}

export default Answers;