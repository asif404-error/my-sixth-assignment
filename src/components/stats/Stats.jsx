import React from 'react';
import statsData from "../../data/statsData.json"

const Stats = () => {
    return (
        <section className="bg-purple-600 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-purple-400">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 px-16 py-6 sm:py-2"
          >
            <span className="text-4xl font-bold text-white">{stat.value}</span>
            <span className="text-sm text-purple-200">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
    );
};

export default Stats;