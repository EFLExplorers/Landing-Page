import { FC } from "react";

export const PricingSection: FC = () => {
  const pricingTiers = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Access to basic lessons",
        "Limited practice exercises",
        "Community forum access",
        "Basic progress tracking",
      ],
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "/month",
      description: "Best for serious learners",
      features: [
        "All Basic features",
        "Unlimited practice exercises",
        "Personalized feedback",
        "Advanced progress tracking",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$49.99",
      period: "/month",
      description: "For dedicated language enthusiasts",
      features: [
        "All Pro features",
        "One-on-one tutoring",
        "Custom learning path",
        "Group classes access",
        "Premium content library",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan that matches your learning goals and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 ${
                tier.highlighted
                  ? "ring-2 ring-blue-600 shadow-xl"
                  : "shadow-lg"
              }`}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
              </div>

              <ul className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <span className="mr-2 text-blue-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
