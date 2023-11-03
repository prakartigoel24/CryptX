import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../main";
import Loader from "./Loader";
import CoinCard from "./CoinCard";
import ErrorComponent from "./ErrorComponent";
import currency_symbols from "../currency_symbols";


const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);
  
  const currency_symbol = currency_symbols[currency];

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${baseURL}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setLoading(false);
        setCoins(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent error={error} />;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap items-center justify-center w-full my-6">
          {coins.map((curr_item, id) => {
            return (
              <CoinCard
                key={curr_item.id}
                id={curr_item.id}
                name={curr_item.name}
                img={curr_item.image}
                price={curr_item.current_price}
                symbol={curr_item.symbol}
                currency_symbol={currency_symbol}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Coins;
