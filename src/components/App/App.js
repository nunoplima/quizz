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
      lifesLeft: 3
    }
  }

  setAnswerChoice = (e) => {
    // if time expires...
    if (e === "time expired") {
      return this.setState(state => {
        return { 
          lifesLeft: state.lifesLeft - 1, 
          currentQuestionIdx: state.currentQuestionIdx + 1,
        };
      }); 
    }
    // if answer is wrong
    const correctAnswer = this.state.questionsArr[this.state.currentQuestionIdx].correct_answer;
    const eTarget = e.target;
    if (eTarget.innerText !== correctAnswer) {
      eTarget.style.backgroundColor = "red";
      setTimeout(() => {
        eTarget.style.backgroundColor = "white";
        this.setState(prevState => {
          return { 
            lifesLeft: prevState.lifesLeft - 1, 
            currentQuestionIdx: prevState.currentQuestionIdx + 1,
          };
        });   
      }, 1500);
    // if answer is right
    } else {
      eTarget.style.backgroundColor = "green";
      setTimeout(() => {
        this.setState((prevState) => {
          eTarget.style.backgroundColor = "white";
          return { 
            currentQuestionIdx: prevState.currentQuestionIdx + 1,
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
    let questionsArr = await getQuestions(this.state.difficulty);
    // rearrange arr and randomize questions
    const newQuestionsArr = questionsArr.map(questionObj => {
      const answers = [...questionObj.incorrect_answers, questionObj.correct_answer]; 
      for (let i = 0; i < answers.length; i++) {
        const randomIdx = Math.floor(Math.random() * answers.length) % 10;
        [answers[i], answers[randomIdx]] = [answers[randomIdx], answers[i]];
      }
      return { answers: answers, question: questionObj.question, correct_answer: questionObj.correct_answer }
    });
    this.setState({
      isGameLive: true, 
      questionsArr: newQuestionsArr,
    });
  }

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
            /> }
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
