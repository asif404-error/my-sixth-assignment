import React from "react";

const Banner = () => {
  return (
    <section className="bg-white- px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full w-fit">
          <span> New: AI-Powered Tools Available</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>
        <p className="text-sm text-gray-500">Explore Products</p>
      </div>
    </section>
  );
};

export default Banner;
