import React from "react";
import ChoicesTriangle from "./ChoicesTriangle";
import ResultDisplay from "./ResultDisplay";


const GameBoard = ({playerChoice, houseChoice, result, gamePhase, handlePlayerChoice, handlePlayAgain,gameMode }) => {
  const boardImage = gameMode === "classic" ? "bg-triangle.svg" : "bg-pentagon.svg";

  return (
    <div
      className={`${gamePhase !== "choosing" ? "" : "bg-no-repeat bg-size-[70%] md:bg-size-[50%] bg-center"} w-full md:w-2/5 flex flex-col flex-1 items-start relative`}
      style={gamePhase === "choosing" ? { backgroundImage: `url(${import.meta.env.BASE_URL}images/${boardImage})` } : undefined}>
      {gamePhase === "choosing" && <ChoicesTriangle handlePlayerChoice={handlePlayerChoice} gameMode={gameMode}/>}
      
      {(gamePhase === 'result' || gamePhase === 'revealing') && <ResultDisplay playerChoice={playerChoice} houseChoice={houseChoice} result={result} handlePlayAgain={handlePlayAgain} gamePhase={gamePhase} gameMode={gameMode} />}
    </div>
  );
};

export default GameBoard;
