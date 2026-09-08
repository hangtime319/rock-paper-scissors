import React from "react";
import imgRules from "/images/image-rules.svg";
import imgRulesBonus from "/images/image-rules-bonus.svg";
import imgClose from "../../assets/icons/close.svg";

const RulesModal = ({ setIsRulesOpen, gameMode }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center md:bg-black/70 md:z-30">
      <div className="w-full h-screen md:w-1/4 md:h-1/2 flex flex-col items-center justify-between bg-gray-200 z-40 py-12 md:py-8 md:px-4 md:rounded-md md:gap-4">
        <div className="flex items-center justify-between md:w-full px-6">
          <h2 className="text-3xl font-bold text-gray-800">RULES</h2>
          <button type="button" className="hidden md:flex items-center justify-between cursor-pointer" onClick={() => setIsRulesOpen(false)}>
            <img src={imgClose} alt="Close" />
          </button>
        </div>
        <img
          className="md:w-4/5"
          src={gameMode === "classic" ? imgRules : imgRulesBonus}
          alt={`${gameMode === "classic" ? "Rock beats scissors, scissors beats paper and paper beats rock" : "Rock beats scissors and lizard, scissors beats paper and lizard, paper beats rock and spock, lizard beats spock and paper, spock beats scissors and rock"}`}
        />
        <button type="button" className="md:hidden" onClick={() => setIsRulesOpen(false)}>
          <img src={imgClose} alt="Close" />
        </button>
      </div>
    </div>
  );
};

export default RulesModal;
