import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import GameBoard from "./components/game/GameBoard";
import RulesModal from "./components/rules/RulesModal";
import { choices } from "./constants/choices";
import { choicesBonus } from "./constants/choicesBonus";
import { getHouseChoice } from "./utils/getHouseChoice";
import { getWinner } from "./utils/getWinner";
import { getWinnerBonus } from "./utils/getWinnerBonus";

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);
  const [gamePhase, setGamePhase] = useState("choosing");
  const [gameMode, setGameMode] = useState(() => localStorage.getItem("gameMode") || "classic");
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(() => parseInt(localStorage.getItem("score")) || 0);
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  function handlePlayerChoice(choice) {
    setPlayerChoice(choice);
    setGamePhase("revealing");

    setTimeout(() => {
      let house;
      let outcome;
      if (gameMode === "classic") {
        house = getHouseChoice(choices);
        outcome = getWinner(choice, house);
      } else {
        house = getHouseChoice(choicesBonus);
        outcome = getWinnerBonus(choice, house);
      }

      setHouseChoice(house);
      setResult(outcome);
      setGamePhase("result");

      if (outcome === "win") {
        setScore((prevScore) => prevScore + 1);
      } else if (outcome === "lose") {
        setScore((prevScore) => (prevScore === 0 ? 0 : prevScore - 1));
      }
    }, 1000);
  }

  function handlePlayAgain() {
    setPlayerChoice(null);
    setHouseChoice(null);
    setResult(null);
    setGamePhase("choosing");
  }

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  useEffect(() => {
    localStorage.setItem("gameMode", gameMode);
  }, [gameMode]);

  return (
    <main className="flex flex-col items-center justify-center gap-20 min-h-screen p-6">
      <Header score={score} gameMode={gameMode} />
      <GameBoard playerChoice={playerChoice} houseChoice={houseChoice} result={result} gamePhase={gamePhase} handlePlayerChoice={handlePlayerChoice} handlePlayAgain={handlePlayAgain} gameMode={gameMode} />

      <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:justify-end md:w-full">
        <button className="bg-transparent text-gray-300 text-xl tracking-widest border-2 border-gray-300 rounded-xl px-12 py-3 md:self-end cursor-pointer" type="button" onClick={() => setGameMode((prevMode) => (prevMode === "classic" ? "bonus" : "classic"))}>
          {gameMode === "classic" ? "BONUS" : "CLASSIC"}
        </button>
        <button type="button" className="bg-transparent text-gray-300 text-xl tracking-widest border-2 border-gray-300 rounded-xl px-12 py-3 md:self-end cursor-pointer" onClick={() => setIsRulesOpen(true)}>
          RULES
        </button>
        {isRulesOpen && <RulesModal setIsRulesOpen={setIsRulesOpen} gameMode={gameMode} />}
      </div>
    </main>
  );
};

export default App;
