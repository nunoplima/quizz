import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 5,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.startTimer, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startTimer = () => {
    if (this.props.clearInt) {
      return clearInterval(this.intervalId);
    }
    const newTimer = this.state.timer - 1;
    if (newTimer >= 0) {
      this.setState(prevState => {
        return { timer: prevState.timer - 1 }
      });
    } else {
      // time ended without a response
      this.props.setAnswerChoice("time expired");
    }
  };

  render() {
    return (
      <>
        <p>{this.state.timer}</p>
      </>
    )
  }
};

export default Timer;