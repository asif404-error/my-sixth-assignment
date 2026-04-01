import React, { useState } from "react";

const Mainsection = () => {
  const [active, setActive] = useState();
  return (
    <section className="bg-white px-6 py-16">
      <div className="">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 mb-10">
          <button className="btn px-6 py-2 rounded-full text-sm font-medium transition-colors">
            Products
          </button>
          <button className="btn px-6 py-2 rounded-full text-sm font-medium transition-colors">
            Cart(0)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mainsection;
