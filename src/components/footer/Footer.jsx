import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 px-6 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1 flex flex-col gap-4">
            <h2 className="text-white text-2xl font-bold">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-semibold">Product</h3>
            <ul className="flex flex-col gap-3">
              {["Features", "Pricing", "Templates", "Integrations"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-semibold">Company</h3>
            <ul className="flex flex-col gap-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-semibold">Resources</h3>
            <ul className="flex flex-col gap-3">
              {["Documentation", "Help Center", "Community", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-semibold">Social Links</h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 transition-colors w-9 h-9 rounded-full flex items-center justify-center text-white"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 transition-colors w-9 h-9 rounded-full flex items-center justify-center text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 transition-colors w-9 h-9 rounded-full flex items-center justify-center text-white"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 text-xs hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
