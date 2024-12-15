import React from "react";
import logo from "../assets/logo.png"

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-[#3a1f1f] text-white">
        <img src={logo} />
      <div className="text-2xl font-bold">Coffetto</div>
      <nav>
        <ul className="flex space-x-8">
          <li><a href="#" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#" className="hover:text-yellow-500">About</a></li>
          <li><a href="#" className="hover:text-yellow-500">Steps</a></li>
          <li><a href="#" className="hover:text-yellow-500">Testimonial</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
