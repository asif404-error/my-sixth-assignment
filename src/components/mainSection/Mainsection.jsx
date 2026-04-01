import React, { useState } from "react";
import productsData from "../../data/productsData.json";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";

const tagStyles = {
  "best-seller": "bg-orange-100 text-orange-600",
  populer: "bg-purple-100 text-purple-600",
  new: "bg-green-100 text-green-600",
};

const periodLable = {
  monthly: "/Mo",
  "one-time": "/One-Time",
  yearly: "/Yr",
};

const Mainsection = ({ cart, setCart }) => {
  // console.log(cart.length);
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (product) => {
    // console.log(product);
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (alreadyInCart) {
      toast.info(`"${product.name}" is already in your cart.`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`"${product.name}" added to cart!`);
  };

  const handleRemove = (productId) => {
    const product = cart.find((item) => item.id === productId);
    setCart(cart.filter((item) => item.id !== productId));
    toast.error(`"${product.name}" removed from cart.`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.info("Your cart is already empty.");
      return;
    }
    setCart([]);
    toast.success("Proceeding to checkout! Cart cleared.");
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

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
                <div className="text-3xl w-fit">
                  <img src={product.icon} alt="" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-400">
                    {periodLable[product.period]}
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {product.features.map((feature, ind) => (
                    <li
                      key={ind}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <TiTick className="text-purple-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn mt-auto bg-indigo-700 text-white text-sm font-medium py-3 rounded-full hover:bg-purple-600 transition-colors w-full"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "cart" && (
          <div className="max-w-2xl mx-auto">
            {cart.length === 0 ? (
              <div className="text-center text-gray-400 py-20">
                <span className="flex justify-center items-center text-center">
                  <FaShoppingCart className="text-gray-300 text-9xl" />
                </span>
                <p className="text-lg font-medium">Your cart is empty.</p>
                <p text-sm mt-1>
                  Go to Products and add some items!
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">
                        <img src={item.icon} alt="" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          ${item.price} {periodLable[item.period]}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="btn text-sm text-red-500 font-medium border border-red-200 px-4 py-1.5 rounded-full hover:bg-red-50 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="flex items-center justify-between px-2 pt-2">
                  <span className="text-sm font-semibold text-gray-700">
                    Total ({cart.length} items)
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    ${totalPrice}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="btn bg-indigo-700 text-white text-sm font-medium py-3 rounded-full hover:bg-purple-600 transition-colors w-full mt-2"
                >
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Mainsection;
