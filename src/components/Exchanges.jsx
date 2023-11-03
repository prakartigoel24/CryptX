import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../main";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${baseURL}/exchfanges`);
        setLoading(false);
        setExchanges(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if(error) return <ErrorComponent error={error}/>;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap items-center justify-center w-full my-6">
          {exchanges.map((curr_item, id) => {
            return (
              <ExchangeCard
                key={curr_item.id}
                name={curr_item.name}
                img={curr_item.image}
                rank={curr_item.trust_score_rank}
                url={curr_item.url}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Exchanges;
