import React from "react";
import plansData from "../../data/plansData.json";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
          {plansData.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col gap-6 rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-purple-600 text-white shadow-xl"
                  : "bg-white border border-gray-200 text-gray-900"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-400 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}
              <div>
                <h3
                  className={`text-xl font-bold mb-1 ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-purple-200" : "text-gray-500"
                  }`}
                >
                  {plan.tagline}
                </p>
              </div>
              <div className="flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-purple-200" : "text-gray-500"
                  }`}
                >
                  /{plan.period}
                </span>
              </div>
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <TiTick className="text-blue-600" />
                    <span
                      className={
                        plan.highlighted ? "text-purple-100" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-4 w-full py-3 rounded-full text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-purple-600 hover:bg-purple-50"
                    : "border border-purple-600 text-purple-600 hover:bg-purple-50"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
