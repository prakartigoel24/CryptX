import React from "react";

const ProgressBar = ({low_val, high_val, time_range, currency_symbol}) => {

  const percentage = ((high_val-low_val)/high_val)*100;
  return (
    <div className="m-2 p-2">
      <div className="h-5 w-full bg-red-200">
        <div className="h-5 bg-black" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="flex justify-between items-start">
        <h1 className="bg-red-400 mt-1 p-1">{currency_symbol} {low_val}</h1>
        <h1 className="font-semibold">{time_range}</h1>
        <h1 className="bg-green-400 mt-1 p-1">{currency_symbol} {high_val}</h1>
      </div>
    </div>  
  );
};

export default ProgressBar;
