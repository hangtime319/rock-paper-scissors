import { choicesBonus } from "../constants/choicesBonus";

export function getWinnerBonus(playerChoice, houseChoice) {
  if (playerChoice === houseChoice) {
    return "tie";
  }

  const playerBeatsHouse = choicesBonus[playerChoice].beats.includes(houseChoice);

  return playerBeatsHouse ? "win" : "lose";
}
