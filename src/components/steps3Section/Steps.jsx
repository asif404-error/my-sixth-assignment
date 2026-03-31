import React from "react";

const steps = [
  {
    number: "01",
    icon: "https://i.ibb.co.com/JwkLWK5x/user.png",
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
      </div>
    </section>
  );
};

export default Steps;
