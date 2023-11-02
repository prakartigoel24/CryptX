import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../main";
import Loader from "./Loader";

const Exchanges = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${baseURL}/exchanges`);
      // setLoading(false);
      console.log(data);
    };
    fetchExchanges();
  }, []);

  return <div>
    {loading ? <Loader /> : 
    <>
    data fetched
    </>
    }
    </div>;
};

export default Exchanges;
