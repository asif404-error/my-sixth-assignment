import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

const Navbar = ({ cartCount }) => {
  const [menu, setMenu] = useState(false);
  //   console.log(cartCount.length);
  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-600">DigiTools</div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-600 transition-colors">
              FAQ
            </a>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative cursor-pointer">
            <FaShoppingCart />
            {cartCount.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount.length}
              </span>
            )}
          </div>
          <a
            href="#"
            className="text-sm text-gray-700 font-medium hover:text-purple-600 transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-purple-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            Get Started
          </a>
        </div>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenu(!menu)}
        >
          {!menu ? <TiThMenu /> : <FaX />}
        </button>
      </div>

      {menu && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2 pb-4 text-sm text-gray-700 font-medium">
          <a href="#" className="hover:text-purple-600 transition-colors">
            Products
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors">
            Pricing
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors">
            Testimonials
          </a>
          <a href="#" className="hover:text-purple-600 transition-colors">
            FAQ
          </a>
          <div className="flex items-center gap-4 pt-2">
            <div className="relative cursor-pointer">
              <FaShoppingCart />
              {cartCount.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount.length}
                </span>
              )}
            </div>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Login
            </a>
            <a
              href="#"
              className="bg-purple-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// I have import all the icons from React Icons such as cart icons and humburger menu (got instructions from instruction video that I can use react icons or import image from image bb)
