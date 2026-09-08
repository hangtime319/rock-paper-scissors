import React from "react";
import ChoiceButton from "./ChoiceButton";
import { choices } from "../../constants/choices";
import { choicesBonus } from "../../constants/choicesBonus";

const ChoicesTriangle = ({ handlePlayerChoice, gameMode }) => {
  return (
    <div>
      {Object.entries(gameMode === "classic" ? choices : choicesBonus).map(([choiceName, value]) => (
        <ChoiceButton key={choiceName} handlePlayerChoice={handlePlayerChoice} choiceName={choiceName} value={value} />
      ))}
    </div>
  );
};

export default ChoicesTriangle;
