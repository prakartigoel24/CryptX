import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../main";
import Loader from "./Loader";
import CoinCard from "./CoinCard";
import ErrorComponent from "./ErrorComponent";
import currency_symbols from "../currency_symbols";
import { useParams } from "react-router-dom";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import ProgressBar from "./ProgressBar";
import { CoinStats } from "./CoinStats";

const CoinDetails = () => {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState("inr");
  const currency_symbol = currency_symbols[currency];
  const params = useParams();
  const [details, setDetails] = useState("");

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${baseURL}/coins/${params.id}`);
        setLoading(false);
        setCoin(data);
        setDetails(coin.description?.en);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [details, currency]);

  if (error) return <ErrorComponent error={error} />;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="m-4">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center">
            <CoinCard
            id={coin.id}
              key={coin.id}
              name={coin.name}
              img={coin.image.large}
              price={coin.market_data.current_price[currency]}
              currency_symbol={currency_symbol}
            />
            <h1 className="text-amber-900 text-justify font-semibold text-md p-5 m-4 sm:text-md md:text-md lg:text-lg">
              {details?.split(/(\r?\n|\r|\n)/g).slice(0, 2)}
            </h1>
          </div>
          <div className="m-4">
            <h1 className="text-md sm:text-lg md:text-lg lg:text-lg font-semibold">Change Currency : </h1>
            <div>
              {Object.keys(currency_symbols).map((key) => {
                return (
                  <button
                    key={key}
                    className="px-2.5 sm:px-4 md:px-4 lg:px-4 sm:font-medium md:font-medium lg:font-medium py-1 mx-2 mt-2 mb-4 rounded-lg bg-amber-900 text-black hover:-translate-y-0.5 hover:bg-amber-950"
                    onClick={() => {
                      setLoading(true);
                      setCurrency(key);
                    }}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-start">
              {coin.market_data.price_change_percentage_24h_in_currency[
                currency
              ] > 0 ? (
                <GoTriangleUp size={35} color="green" />
              ) : (
                <GoTriangleDown size={35} color="red" />
              )}
              {`${coin.market_data.price_change_percentage_24h_in_currency[currency]} %`}
            </div>
            <ProgressBar
              low_val={coin.market_data.low_24h[currency]}
              high_val={coin.market_data.high_24h[currency]}
              time_range={"24H Range"}
              currency_symbol={currency_symbol}
            />
            <CoinStats currency_symbol = {currency_symbol}
             market_cap_rank = {coin.market_cap_rank}  market_cap={coin.market_data.market_cap[currency]} total_supply={coin.market_data.total_supply} liquidity_score={coin.liquidity_score} total_volume={coin.market_data.total_volume[currency]}/>
          </div>
          <h1 className="font-semibold bg-red-100 mx-4 text-sm sm:text-md md:text-lg lg:text-lg">
              Last Updated: <span className="font-normal">{new Date(coin.market_data.last_updated).toLocaleString()}</span> 
            </h1>
        </div>
      )}
    </>
  );
};
export default CoinDetails;
