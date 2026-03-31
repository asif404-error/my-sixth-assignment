import React from "react";

const steps = [
  {
    number: "01",
    icon: "https://i.ibb.co.com/s9jTPR1S/user.png",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    number: "02",
    icon: "https://i.ibb.co.com/yCfjkFC/package.png",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    number: "03",
    icon: "https://i.ibb.co.com/YTQJCT25/rocket.png",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-sm text-gray-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white border border-gray-200 rounded-2xl px-8 py-10 flex flex-col items-center text-center gap-5 shadow-sm"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-purple-600 text-white text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center">
                <img src={step.icon} alt="" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
