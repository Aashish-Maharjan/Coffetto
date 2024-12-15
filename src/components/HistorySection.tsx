import React from "react";
import history from "../assets/history.png"
const HistorySection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white text-[#4b2e2e] rounded-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={history} 
            alt="Coffee Beans"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-4xl font-pacifico mb-4 text-[#4b2e2e]">
            Our History
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We make and grow the best coffee in Peru, accompanying families since 1930, 
            with professional workers who harvest, collect, and select the coffee with 
            quality work, thus providing exquisite coffee to enjoy together as a family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
