import React from "react";
import { Link } from "react-router-dom";
import Branding from "./Branding";

const Navbar = () => {
  return (
    <div className="bg-black text-white sticky flex justify-between items-center mx-auto px-5 z-50">
      <Branding/>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/coins" className="hover:text-gray-400">Coins</Link>
        <Link to="/exchanges" className="hover:text-gray-400">Exchanges</Link>
        <Link to="/about-developer" className="hover:text-gray-400">Developer</Link>
      </div>
    </div>
  );
};

export default Navbar;
