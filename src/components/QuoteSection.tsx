import React from "react";
import history from "../assets/history.png"
const QuoteSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
       
        <h2 className="text-3xl lg:text-4xl font-pacifico mb-6 leading-relaxed">
          Coffee is the best drink in the morning, it keeps you focused.
        </h2>

       
        <p className="text-lg text-gray-300 italic">- Jhon Doe</p>

        
        <div className="mt-8 w-full max-w-md">
          <img
            src={history}
            alt="Coffee Cup"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
