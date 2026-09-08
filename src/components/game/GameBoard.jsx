import React from "react";
import ChoicesTriangle from "./ChoicesTriangle";
import ResultDisplay from "./ResultDisplay";


const GameBoard = ({playerChoice, houseChoice, result, gamePhase, handlePlayerChoice, handlePlayAgain,gameMode }) => {
  return (
    <div className={`${gamePhase !== "choosing" ? "" : gameMode === "classic" ? "bg-[url('/images/bg-triangle.svg')] bg-no-repeat bg-size-[70%] md:bg-size-[50%] bg-center" : "bg-[url('/images/bg-pentagon.svg')] bg-no-repeat bg-size-[70%] md:bg-size-[50%] bg-center"} w-full md:w-2/5 flex flex-col flex-1 items-start relative`}>
      {gamePhase === "choosing" && <ChoicesTriangle handlePlayerChoice={handlePlayerChoice} gameMode={gameMode}/>}
      
      {(gamePhase === 'result' || gamePhase === 'revealing') && <ResultDisplay playerChoice={playerChoice} houseChoice={houseChoice} result={result} handlePlayAgain={handlePlayAgain} gamePhase={gamePhase} gameMode={gameMode} />}
    </div>
  );
};

export default GameBoard;
