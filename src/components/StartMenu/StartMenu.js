import React from "react";

class StartMenu extends React.Component {
  
  handleDifficultyChoice = (e) => {
    // li values are integers...
    this.props.setDifficulty(e.target.getAttribute("value"));
  };

  handleStartGame = () => {
    this.props.startGame();
  };
  
  render() {
    return (
      <>
        <ul onClick={this.handleDifficultyChoice}>
          <li value="easy">Easy</li>
          <li value="medium">Medium</li>
          <li value="hard">Hard</li>
        </ul>
        <button onClick={this.handleStartGame}>Start</button>
      </>
    )
  }
}

export default StartMenu;