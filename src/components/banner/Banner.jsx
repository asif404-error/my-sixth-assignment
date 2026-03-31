import React from "react";
import PlayIcon from "../../assets/play.png";
import BannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-white- px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full w-fit">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-purple-600 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-purple-700 transition-colors">
              Explore Products
            </button>

            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded-full hover:border-purple-500 hover:text-purple-600 transition-colors">
              <img src={PlayIcon} alt="" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1 w-full">
          <img
            src={BannerImg}
            alt="AI Digital Workflow"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
