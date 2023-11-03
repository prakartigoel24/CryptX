import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../main";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";

const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${baseURL}/exchanges`);
      setLoading(false);
      setExchanges(data);
    };
    fetchExchanges();
  }, []);

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
