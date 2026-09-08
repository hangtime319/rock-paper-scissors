import React from "react";
import ResultBanner from "./ResultBanner";
import PickedDisplay from "./PickedDisplay";
import { choices } from "../../constants/choices";
import { choicesBonus } from "../../constants/choicesBonus";

const ResultDisplay = ({ gamePhase, playerChoice, houseChoice, result, handlePlayAgain, gameMode }) => {
  
  const activeChoices = gameMode === "classic" ? choices : choicesBonus;

  return (
    <div className="flex flex-wrap items-center justify-center md:m-auto md:gap-20 md:flex-nowrap gap-8 w-full">
      <PickedDisplay pickedChoice={activeChoices[playerChoice]} label={"YOU PICKED"} choiceName={playerChoice} orderClass="md:order-1" isWinner={result === "win"} />

      <PickedDisplay pickedChoice={activeChoices[houseChoice]} label={"THE HOUSE PICKED"} choiceName={houseChoice} orderClass="md:order-3" isWinner={result === "lose"} />

      {gamePhase === "result" && <ResultBanner result={result} handlePlayAgain={handlePlayAgain} orderClass="md:order-2" />}
    </div>
  );
};

export default ResultDisplay;
