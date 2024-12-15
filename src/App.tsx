import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import HistorySection from "./components/HistorySection";
import StepsSection from "./components/StepsSection";
import NewsletterSection from "./components/NewsletterSection";
import QuoteSection from "./components/QuoteSection";

const App: React.FC = () => {
  return (
    <div className="bg-[#3a1f1f]">
      <Header/>
       <HeroSection />
      <ProductSection />
      <HistorySection/> 
      <StepsSection />
      <QuoteSection/>
      <NewsletterSection />
    </div>
  );
};

export default App;
