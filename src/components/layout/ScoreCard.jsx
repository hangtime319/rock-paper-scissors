import React from "react";

const ScoreCard = ({ score }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-gray-100 rounded-md px-6 py-2 md:px-12 md:py-4 shadow-xs shadow-gray-600">
      <h2 className="text-blue-700 text-sm md:text-xl tracking-widest">SCORE</h2>
      <span className="text-gray-600 text-5xl md:text-6xl font-bold">{score}</span>
    </div>
  );
};

export default ScoreCard;
