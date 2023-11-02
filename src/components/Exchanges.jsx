import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseURL } from "../main"

const Exchanges = () => {

  useEffect(() => {
    const fetchExchanges = async ()=>{
        const {data} = await axios.get(`${baseURL}/exchanges`);
        console.log(data);
    }
    fetchExchanges();
  },[])
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges