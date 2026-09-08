import React from "react";
import ScoreCard from "./ScoreCard";
import imgLogo from "/images/logo.svg";
import imgLogoBonus from "/images/logo-bonus.svg";

const Header = ({ score, gameMode }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border-3 border-gray-600 p-3 md:p-4 w-full md:w-1/2">
      <img className="object-cover w-2/6 ml-2 md:w-2/12" src={gameMode === "classic" ? imgLogo : imgLogoBonus} alt={`${gameMode === "classic" ? "ROCK PAPER SCISSORS" : "ROCK PAPER SCISSORS LIZARD SPOCK"}`} />
      <ScoreCard score={score} />
    </div>
  );
};

export default Header;
