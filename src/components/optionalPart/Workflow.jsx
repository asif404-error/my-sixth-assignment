import React from 'react';
import { GoDotFill } from 'react-icons/go';

const Workflow = () => {
    return (
        <section className="bg-purple-600 px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-sm text-purple-200 max-w-md leading-relaxed">
          Join thousands of professionals who are already using DigiTools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <button className="border border-white text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white hover:text-purple-600 transition-colors">
            Explore Products
          </button>
          <button className="border border-white text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white hover:text-purple-600 transition-colors">
            View Pricing
          </button>
        </div>
        <p className="flex text-xs text-purple-200 gap-2 items-center">
          14-day free trial <GoDotFill /> No credit card required <GoDotFill /> Cancel anytime
        </p>
      </div>
    </section>
    );
};

export default Workflow;