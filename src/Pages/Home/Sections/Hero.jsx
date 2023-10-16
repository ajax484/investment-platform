import React from "react";

export default function Hero() {
  return (
    <section className="[background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/src/Assets/img/hero.jpg')] h-screen bg-fixed bg-cover bg-center bg-no-repeat relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-3 w-full px-2 md:px-0">
        <h1 className="text-3xl md:text-5xl text-white w-full font-semibold">
          Unlock Your Financial Potential
        </h1>
        <p className="text-white text-lg md:text-2xl">
          Invest with Confidence on Our Secure Platform
        </p>

        <button className="block bg-vestaPurple-1 py-2 px-3 text-white rounded-md mx-auto md:text-2xl cursor-pointer relative hover:bg-vestaPurple-2 transition-all duration-75 ease-linear">
          Show me
        </button>
      </div>
    </section>
  );
}
