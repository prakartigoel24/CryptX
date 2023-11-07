import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../main";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import ErrorComponent from "./ErrorComponent";
import { BsSearch } from "react-icons/bs";

const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  let filterExchanges = exchanges.filter((exchange) => {
    if (query === "") {
      return exchange;
    } else if (exchange.name.toLowerCase().includes(query.toLowerCase())) {
      return exchange;
    }
  });

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${baseURL}/exchanges`);
        setLoading(false);
        setExchanges(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <ErrorComponent error={error} />;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex justify-center items-center text-gray-500">
            <BsSearch className="relative left-52 w-4 h-4"/>
            <input
              className="py-4 px-4 m-4 rounded-2xl flex justify-center items-center bg-red-200 hover: outline-red-700"
              value={query}
              type="text"
              placeholder="Search"
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-wrap items-center justify-center w-full my-6">
            {filterExchanges.map((curr_item, id) => {
              return (
                <ExchangeCard
                  id={id}
                  key={curr_item.id}
                  name={curr_item.name}
                  img={curr_item.image}
                  rank={curr_item.trust_score_rank}
                  url={curr_item.url}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Exchanges;
