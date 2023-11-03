import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, price, symbol, currency_symbol }) => {
  return (
    <Link to={`/coin/${id}`}>
      <div className="flex flex-col w-60 h-60 items-center justify-center rounded-md bg-red-50 drop-shadow-lg hover:bg-red-100 m-4">
        <img src={img} alt="Coin image here" width={60} height={60} />
        <h2 className="text-lg font-bold">{symbol}</h2>
        <h2 className="text-lg font-semibold text-slate-600">{`${currency_symbol} ${price}`}</h2>
        <h1 className="text-2xl text-red-900 font-semibold">{name}</h1>
      </div>
    </Link>
  );
};

export default CoinCard;
