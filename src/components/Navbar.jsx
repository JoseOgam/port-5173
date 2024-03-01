import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav
      className="w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className=" flex items-center gap-2">
          <h1>PORT</h1>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <div key={nav.id}>{nav.title} </div>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
