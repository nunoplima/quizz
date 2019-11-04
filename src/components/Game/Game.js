import React from "react";
import Answers from "../Answers/Answers";

const Game = ({ questionsArr, currentQuestionIdx, setAnswerChoice, lifesLeft, dollars, stopGame }) => {    
  const currentQuestion = questionsArr[currentQuestionIdx];
                          
  return (
    <>
      <div>
        <p>Lifes: {lifesLeft}</p>
        <p>${dollars > 0 ? dollars.toFixed(2) : 0}</p>
      </div>
      <div>
        <h3>#{currentQuestionIdx + 1} {currentQuestion.question.replace(/&amp;/g, "&")
          .replace(/&deg;/g, "°")
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&eacute;/g, "é")}
        </h3>
        <div>
          <Answers key={currentQuestionIdx} 
            questionsArr={questionsArr} 
            currentQuestionIdx={currentQuestionIdx}
            setAnswerChoice={setAnswerChoice} 
            stopGame={stopGame} />          
        </div>
      </div>
    </>
  )
};

export default Game;
