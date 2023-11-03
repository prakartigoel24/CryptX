import React from "react";

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <a href={url} target="_blank">
      <div className="flex flex-col w-60 h-60 items-center justify-center rounded-md bg-red-50 drop-shadow-lg hover:bg-red-100 m-4">
        <img src={img} alt="Coin image here" width={60} height={60} />
        <h2 className="text-lg font-bold">{rank}</h2>
        <h1 className="text-xl text-red-900 font-semibold">{name}</h1>
      </div>
    </a>
  );
};

export default ExchangeCard;
