import React from "react";
import "./App.css";
import {  BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import StartMenu from "../StartMenu/StartMenu";
import Game from "../Game/Game"
import { getQuestions } from "../../util/getQuestionsHelper";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: "easy",
      isGameLive: false,
      questionsArr: []
    }
  }

  componentDidMount = async () => {
    // getQuestions(this.state.difficulty);
  }

  setDifficulty = (difficulty) => {
    this.setState({
      difficulty: difficulty
    })
  };

  startGame = async () => {
    const questionsArr = await getQuestions(this.state.difficulty);
    this.setState({
      isGameLive: true, 
      questionsArr: questionsArr
    });
  }

  render() {
    return (
      <BrowserRouter>
        {/* since this.props.history is undefined in App */}
        {/* Push is a bool, when true, redirecting will push a new entry onto the history INSTEAD of replacing the current one. */}
        <h1>WWTBAM</h1>  
        <div className="App">
          {this.state.isGameLive ? <Redirect push to={{ pathname: "/game", questionsArr: this.state.questionsArr }}/> : null}
          <Switch>
            <Route path="/" exact render={() => <StartMenu setDifficulty={this.setDifficulty} startGame={this.startGame} /> } />
            <Route path="/game"exact component={Game} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
