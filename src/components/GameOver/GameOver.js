import React from "react";

const GameOver = ({ dollars, stopGame }) => {
  return (
    <>
      <h1>Game Over</h1>
      <p>Congratulations, you earned ${dollars.toFixed(2)}</p>
      <button onClick={() => stopGame()}>Play again</button>

    </>
  )
};

export default GameOver;