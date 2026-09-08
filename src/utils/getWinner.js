import {choices} from '../constants/choices';

export function getWinner(playerChoice, houseChoice) {
    if(playerChoice === houseChoice) {
        return "tie";
    }

    const playerBeatsHouse = choices[playerChoice].beats === houseChoice;

    return playerBeatsHouse ? 'win' : 'lose';
}