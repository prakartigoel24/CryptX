import React, { useState } from "react";
import { Link } from "react-router-dom";
import Branding from "./Branding";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  return (
    <div className="bg-black text-white sticky w-full z-50 flex justify-between items-center pr-6 h-16 sm:text-lg
     md:text-lg lg:text-lg">
      <Branding />
      <div
        className={`flex flex-col gap-3 absolute top-16 sm:flex-row sm:relative sm:top-auto sm:w-auto px-3 py-3 bg-black w-full font-semibold sm:flex md:flex lg:flex xl:flex ${ 
          !navbarOpen ? "flex" : "hidden"
        } `}
      >
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/coins" className="hover:text-gray-400">
          Coins
        </Link>
        <Link to="/exchanges" className="hover:text-gray-400">
          Exchanges
        </Link>
        <Link to="/about-developer" className="hover:text-gray-400">
          Developer
        </Link>
      </div>

      <button onClick={() => setNavbarOpen(!navbarOpen)} className="sm:hidden">
        {!navbarOpen ? (
          <AiOutlineClose size={23} color={"white"} />
        ) : (
          <TiThMenu size={23} />
        )}
      </button>
    </div>
  );
};
export default Navbar;
