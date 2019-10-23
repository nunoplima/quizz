import React from "react";
import "./App.css";
import {  BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import StartMenu from "../StartMenu/StartMenu";
import Game from "../Game/Game";
// import GameOver from "../GameOver/GameOver";
import { getQuestions } from "../../util/getQuestionsHelper";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: "easy",
      isGameLive: false,
      questionsArr: [], 
      currentQuestionIdx: 0,
      lifesLeft: 3,
      timer: 5
    }
  }

  
  setAnswerChoice = (e) => {
    clearInterval(this.intervalId);
    const correctAnswer = this.state.questionsArr[this.state.currentQuestionIdx].correct_answer;
    // if time expires...
    if (e === "not an event...") {
      this.intervalId = setInterval(this.startTimer, 1000);
      return this.setState(state => {
        return { 
          lifesLeft: state.lifesLeft - 1, 
          currentQuestionIdx: state.currentQuestionIdx + 1,
        };
      });   
    }
    // if answer is wrong
    const eTarget = e.target;
    if (eTarget.innerText !== correctAnswer) {
      eTarget.style.backgroundColor = "red";
      setTimeout(() => {
        eTarget.style.backgroundColor = "white";
        this.intervalId = setInterval(this.startTimer, 1000);
        this.setState(state => {
          return { 
            lifesLeft: state.lifesLeft - 1, 
            currentQuestionIdx: state.currentQuestionIdx + 1,
          };
        });   
      }, 1500);
      // if answer is right
    } else {
      eTarget.style.backgroundColor = "green";
      setTimeout(() => {
        this.intervalId = setInterval(this.startTimer, 1000);
        this.setState((state) => {
          eTarget.style.backgroundColor = "white";
          return { 
            currentQuestionIdx: state.currentQuestionIdx + 1, 
          };
        });
      }, 1500)
    }
  };
  
  stopGame = () => {
    this.setState({
      isGameLive: false
    })
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
      questionsArr: questionsArr,
    });
    this.intervalId = setInterval(this.startTimer, 1000);
  }
  
  startTimer = () => {
    const newTimer = this.state.timer - 1;
    if (newTimer >= 0) {
      this.setState(prevState => {
        return { timer: prevState.timer - 1 }
      });
    } else {
      this.setAnswerChoice("not an event...");
      clearInterval(this.intervalId);
    }
  };
  
  render() {
    return (
      <BrowserRouter>
        <h1>WWTBAM</h1>  
        <div className="App">
          {/* since this.props.history is undefined in App */}
          {/* Push is a bool, when true, redirecting will push a new entry onto the history INSTEAD of replacing the current one. */}
          {/* {this.state.isGameLive ? <Redirect push to={{ pathname: "/game", questionsArr: this.state.questionsArr, currentQuestionIdx: this.state.currentQuestionIdx, setAnswerChoice: this.setAnswerChoice }}/> : null} */}
          
          {this.state.isGameLive && <Game questionsArr={this.state.questionsArr} 
            currentQuestionIdx={this.state.currentQuestionIdx} 
            setAnswerChoice={this.setAnswerChoice} 
            timer={this.state.timer} />
            }
          <Switch>
            {/* <Route path="/" exact render={() => <StartMenu setDifficulty={this.setDifficulty} startGame={this.startGame} stopGame={this.stopGame} /> } /> */}
            {!this.state.isGameLive && <StartMenu setDifficulty={this.setDifficulty} startGame={this.startGame} stopGame={this.stopGame} />}
            {this.state.isGameLive ? <Route path="/game"exact component={Game} /> : <h1>Not found</h1>}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
