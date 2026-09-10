import React from "react";

const ChoiceButton = ({ choiceName, value, handlePlayerChoice }) => {
  return (
    <button
      type="button"
      aria-label={choiceName}
      className={`
        absolute flex items-center justify-center rounded-full border-12 md:border-18
        bg-gray-100 ${value.borderColor} ${value.position}
        aspect-square w-24 md:w-36
        shadow-[inset_0_6px_0_rgba(0,0,0,0.1)]
        transition-transform duration-150 hover:scale-[1.02] active:scale-95
      cursor-pointer`}
      onClick={() => handlePlayerChoice(choiceName)}>
      <img className="w-10 h-10 md:w-14 md:h-14 object-contain" src={value.icon} alt={choiceName} />
    </button>
  );
};

export default ChoiceButton;
