import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../main";
import Loader from "./Loader";
import CoinCard from "./CoinCard";
import ErrorComponent from "./ErrorComponent";
import currency_symbols from "../currency_symbols";
import { BsSearch } from "react-icons/bs";

const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState("usd");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const currency_symbol = currency_symbols[currency];
  const pageNums = new Array(110).fill(1); // filled with random val

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  let filterCoins = coins.filter((coin) => {
    if (query === "") {
      return coin;
    } else if (coin.name.toLowerCase().includes(query.toLowerCase())) {
      return coin;
    }
  });

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
        <>
          
          <div className="bg-amber-950 text-white flex justify-center items-center py-4 my-4 mx-3 rounded-full px-6">
            <h1 className="text-md md:text-xl font-semibold">
              Change Currency :
            </h1>
            {Object.keys(currency_symbols).map((key) => {
              return (
                <div
                  key={key}
                  className="px-3 py-1 mx-1.5 rounded-lg bg-white text-black md:text-xl md:mx-3 font-medium hover:-translate-y-0.5 hover:bg-slate-300"
                >
                  <button
                    onClick={() => {
                      setLoading(true);
                      setCurrency(key);
                    }}
                  >
                    {key}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center text-gray-500">
            <BsSearch className="relative left-52 w-4 h-4" />
            <input
              className="py-4 px-4 m-4 rounded-2xl flex justify-center items-center bg-red-200 hover: outline-red-700"
              value={query}
              type="text"
              placeholder="Search"
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-wrap items-center justify-center w-full my-6">
            {filterCoins.map((curr_item, id) => {
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
          <div className="overflow-auto flex m-4">
            {pageNums.map((item, index) => {
              return (
                <button
                  key={index}
                  className="flex items-center justify-center rounded-xl bg-black text-white px-6 py-2 m-3 w-10 transition hover:bg-slate-700 hover:translate-y-0.5"
                  onClick={() => {
                    setLoading(true);
                    setPage(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Coins;
