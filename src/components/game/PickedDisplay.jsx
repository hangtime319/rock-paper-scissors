import React from "react";

const PickedDisplay = ({ pickedChoice, label, choiceName, orderClass, isWinner }) => {
  return (
    <div className={`flex flex-col md:flex-col-reverse items-center gap-4 md:gap-14 ${orderClass}`}>
      {pickedChoice !== undefined ? (
        <div
          aria-label={choiceName}
          className={`flex items-center justify-center rounded-full border-14 md:border-36
        bg-gray-100 ${pickedChoice.borderColor}
        aspect-square w-32 md:w-72 
        ${isWinner ? "shadow-[inset_0_6px_0_var(--color-shadow),0_0_0_20px_var(--color-winner-ring),0_0_0_40px_var(--color-winner-ring),0_0_0_60px_var(--color-winner-ring-subtle)]" : "shadow-[inset_0_6px_0_var(--color-shadow)]"}`}>
          <img className="w-12 md:w-18" src={pickedChoice.icon} alt={choiceName} />
        </div>
      ) : (
        <div className={`rounded-full aspect-square w-32 md:w-72 bg-navy-900 opacity-85`}></div>
      )}
      <p className="text-white tracking-widest md:text-2xl">{label}</p>
    </div>
  );
};

export default PickedDisplay;
