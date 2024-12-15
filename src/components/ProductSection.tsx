import React from "react";
import classiccoffee from "../assets/classiccoffee.png"
import blackcoffee from "../assets/blackcoffee.png"
import strongcoffee from "../assets/strongcoffee.png"

const products = [
  { title: "Classic Coffee", price: "$17.90", image: classiccoffee },
  { title: "Black Coffee", price: "$24.90", image: blackcoffee },
  { title: "Strong Coffee", price: "$32.90", image: strongcoffee },
];

const ProductSection: React.FC = () => {
  return (
    <section className="bg-[#492D26] py-12 text-white text-center rounded-full">
      <button className="bg-[#2e1414] px-4 py-2 rounded-full mb-6">Scroll Down ↓</button>
      <p className="text-gray-300 max-w-md mx-auto mb-12">
        We strive to form deep partnerships with farmers from all over the world to create perspective and healthy working relationships built on trust and respect.
      </p>
      <div className="flex justify-center space-x-8">
        {products.map((product) => (
          <div key={product.title} className="text-center">
            <img src={product.image} alt={product.title} className="w-36 h-48 mx-auto mb-4" />
            <h3 className="font-bold">{product.title}</h3>
            <p className="text-yellow-400">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
