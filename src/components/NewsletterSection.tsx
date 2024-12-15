import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-[#3a1f1f] py-8 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Sign up for our newsletter</h2>
      <div className="flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter your e-mail address"
          className="p-2 rounded-l-md text-gray-700"
        />
        <button className="bg-yellow-400 text-[#4b2e2e] px-6 py-2 rounded-r-md hover:bg-yellow-500">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;
