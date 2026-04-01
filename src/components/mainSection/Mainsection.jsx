import React, { useState } from "react";
import productsData from "../../data/productsData.json";

const tagStyles = {
  "best-seller": "bg-orange-100 text-orange-600",
  populer: "bg-purple-100 text-purple-600",
  new: "bg-green-100 text-green-600",
};

const Mainsection = ({ cart }) => {
  // console.log(cart.length);
  const [activeTab, setActiveTab] = useState("products");
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
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
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "products"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "cart"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Cart({cart.length})
          </button>
        </div>
        {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 relative"
              >
                <span
                  className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[product.tagType]}`}
                >
                  {product.tag}
                </span>
                <div text-3xl w-fit>
                    <img src={product.icon} alt="" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Mainsection;
