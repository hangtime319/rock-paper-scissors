import React from "react";

const ResultBanner = ({ result, handlePlayAgain, orderClass }) => {
  const getResultText = () => {
    switch (result) {
      case "win":
        return "YOU WIN";
      case "lose":
        return "YOU LOSE";
      case "tie":
        return "TIE";
      default:
        return "";
    }
  };

  return (
    <div className={`flex flex-col items-center gap-8  ${orderClass}`}>
      <p className="font-bold text-white text-6xl md:whitespace-nowrap">{getResultText()}</p>
      <button type="button" className=" bg-white px-14 md:px-16 py-4 whitespace-nowrap  text-gray-600 tracking-widest text-xl rounded-lg cursor-pointer md:hover:text-red-600 md:transition-colors duration-200 " onClick={handlePlayAgain}>PLAY AGAIN</button>
    </div>
  );
};

export default ResultBanner;
