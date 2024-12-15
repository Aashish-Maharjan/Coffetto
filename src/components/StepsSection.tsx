import React from "react";
import greencoffee from "../assets/greencoffee.png"
import coffeebeans from "../assets/coffeebeans.png"
import groundcoffee from "../assets/groundcoffee.png"


const steps = [
  { step: "01",  text: "Harvest occurs annually when the coffee beans reach maturity.",image:greencoffee  },
  { step: "02",  text: "The beans are dried using a wet or dry technique depending on taste." ,image:coffeebeans},
  { step: "03",  text: "The coffee is roasted and acquires its flavor." ,image:groundcoffee},
];

const StepsSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#4b2e2e] text-white">
      <h2 className="text-center text-3xl font-bold mb-8">Steps of Manufacturing Our Products</h2>
      <div className="flex justify-center space-x-8">
        {steps.map((item) => (
          <div key={item.step} className="text-center max-w-xs">
            <div className="text-yellow-400 text-4xl font-bold mb-4">
                {item.step}
                <img src={item.image}/>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
