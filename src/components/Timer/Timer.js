import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   timer: 5,
    //   // clocking: this.props.clocking
    // }
  }
 
  // componentDidUpdate = () => {
  //   console.log("Timer updated");
  //   if (!this.state.clocking && this.state.timer === 0) {
  //     this.setState({ timer: 3, clocking: true });
  //     this.intervalId = setInterval(this.startTimer, 1000);
  //   } 
  // }

  // componentDidMount = () => {
  //   console.log("Timer mounted");
  //   this.intervalId = setInterval(this.startTimer, 1000);
  //   // this.setState({ clocking: true, timer: 3 });
  // }
  
  // componentWillUnmount = () => {
  //   clearInterval(this.intervalId);
  //   console.log("Unmounting timer")
  // }


  // startTimer = () => {
  //   // if (this.state.clocking) {
  //     const newTimer = this.state.timer - 1;
  //     if (newTimer >= 0) {
  //       this.setState(prevState => {
  //         return { timer: prevState.timer - 1, clocking: true }
  //       });
  //     } else {
  //       this.props.setAnswerChoice("not an event...");
  //       this.setState({ clocking: false })
  //       clearInterval(this.intervalId);
  //     }
  //   // }
  // };

  render() {
    return (
      <>
        <p>{this.props.timer}</p>
      </>
    )
  }
};

export default Timer;