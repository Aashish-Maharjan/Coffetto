import React from "react";
import homecoffee from "../assets/homecoffee.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#3a1f1f] text-white flex justify-center items-center py-20">
      <div className="flex items-center space-x-12 px-8">
      <img src={homecoffee}  className="w-72" />
        <div>
          <h3 className="text-yellow-400 uppercase mb-2">Exceptional Quality</h3>
          <h1 className="text-6xl font-bold mb-4 leading-tight font-pacifico">
            It’s time for a <br /> good coffee
          </h1>
          <p className="mb-6 text-gray-300 max-w-lg">
            Each select coffee bean reflects our commitment to Peruvian coffee growers, who bring the best select coffee to your table.
          </p>
          <button className="bg-yellow-400 text-[#4b2e2e] px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
